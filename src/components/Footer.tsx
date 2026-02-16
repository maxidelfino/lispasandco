"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import Joi from "joi";
import {
  Mail,
  Phone,
  Linkedin,
  CheckCircle,
  AlertCircle,
  X,
} from "lucide-react";
import emailjs from "emailjs-com";

import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import { trackEvent } from "../analytics/ga";
import { GA_EVENTS } from "../analytics/events";

// Mensajes de validación multilenguaje
const validationMessages = {
  name: {
    [Language.SPANISH]: {
      "string.empty": "El nombre es requerido",
      "string.min": "El nombre debe tener al menos {#limit} caracteres",
      "string.max": "El nombre no puede exceder {#limit} caracteres",
    },
    [Language.ENGLISH]: {
      "string.empty": "Name is required",
      "string.min": "Name must be at least {#limit} characters",
      "string.max": "Name cannot exceed {#limit} characters",
    },
    [Language.PORTUGUESE]: {
      "string.empty": "O nome é obrigatório",
      "string.min": "O nome deve ter pelo menos {#limit} caracteres",
      "string.max": "O nome não pode exceder {#limit} caracteres",
    },
  },
  company: {
    [Language.SPANISH]: {
      "string.min": "La empresa debe tener al menos {#limit} caracteres",
      "string.max": "La empresa no puede exceder {#limit} caracteres",
    },
    [Language.ENGLISH]: {
      "string.min": "Company must be at least {#limit} characters",
      "string.max": "Company cannot exceed {#limit} characters",
    },
    [Language.PORTUGUESE]: {
      "string.min": "A empresa deve ter pelo menos {#limit} caracteres",
      "string.max": "A empresa não pode exceder {#limit} caracteres",
    },
  },
  phone: {
    [Language.SPANISH]: {
      "string.pattern.base": "El número de teléfono no es válido",
    },
    [Language.ENGLISH]: {
      "string.pattern.base": "Phone number is not valid",
    },
    [Language.PORTUGUESE]: {
      "string.pattern.base": "O número de telefone não é válido",
    },
  },
  email: {
    [Language.SPANISH]: {
      "string.empty": "El correo electrónico es requerido",
      "string.email": "El correo electrónico debe ser válido",
    },
    [Language.ENGLISH]: {
      "string.empty": "Email is required",
      "string.email": "Email must be valid",
    },
    [Language.PORTUGUESE]: {
      "string.empty": "O e-mail é obrigatório",
      "string.email": "O e-mail deve ser válido",
    },
  },
  message: {
    [Language.SPANISH]: {
      "string.empty": "El mensaje es requerido",
      "string.min": "El mensaje debe tener al menos {#limit} caracteres",
      "string.max": "El mensaje no puede exceder {#limit} caracteres",
    },
    [Language.ENGLISH]: {
      "string.empty": "Message is required",
      "string.min": "Message must be at least {#limit} characters",
      "string.max": "Message cannot exceed {#limit} characters",
    },
    [Language.PORTUGUESE]: {
      "string.empty": "A mensagem é obrigatória",
      "string.min": "A mensagem deve ter pelo menos {#limit} caracteres",
      "string.max": "A mensagem não pode exceder {#limit} caracteres",
    },
  },
};

const uiText = {
  title: {
    [Language.SPANISH]: "Contáctanos",
    [Language.ENGLISH]: "Contact Us",
    [Language.PORTUGUESE]: "Fale Conosco",
  },
  name: {
    [Language.SPANISH]: "Nombre completo",
    [Language.ENGLISH]: "Full name",
    [Language.PORTUGUESE]: "Nome completo",
  },
  company: {
    [Language.SPANISH]: "Empresa (opcional)",
    [Language.ENGLISH]: "Company (optional)",
    [Language.PORTUGUESE]: "Empresa (opcional)",
  },
  phone: {
    [Language.SPANISH]: "Teléfono (opcional)",
    [Language.ENGLISH]: "Phone (optional)",
    [Language.PORTUGUESE]: "Telefone (opcional)",
  },
  email: {
    [Language.SPANISH]: "Correo electrónico",
    [Language.ENGLISH]: "Email",
    [Language.PORTUGUESE]: "E-mail",
  },
  message: {
    [Language.SPANISH]: "Mensaje",
    [Language.ENGLISH]: "Message",
    [Language.PORTUGUESE]: "Mensagem",
  },
  sending: {
    [Language.SPANISH]: "Enviando...",
    [Language.ENGLISH]: "Sending...",
    [Language.PORTUGUESE]: "Enviando...",
  },
  send: {
    [Language.SPANISH]: "Enviar Mensaje",
    [Language.ENGLISH]: "Send Message",
    [Language.PORTUGUESE]: "Enviar Mensagem",
  },
  emailSuccess: {
    [Language.SPANISH]: "¡Mensaje enviado con éxito!",
    [Language.ENGLISH]: "Message sent successfully!",
    [Language.PORTUGUESE]: "Mensagem enviada com sucesso!",
  },
  emailError: {
    [Language.SPANISH]: "Fallo al enviar, inténtalo luego.",
    [Language.ENGLISH]: "Failed to send, please try again later.",
    [Language.PORTUGUESE]: "Falha ao enviar, tente novamente mais tarde.",
  },
  reserved: {
    [Language.SPANISH]: "Todos los derechos reservados.",
    [Language.ENGLISH]: "All rights reserved.",
    [Language.PORTUGUESE]: "Todos os direitos reservados.",
  },
  linkedin: {
    [Language.SPANISH]: "LinkedIn",
    [Language.ENGLISH]: "LinkedIn",
    [Language.PORTUGUESE]: "LinkedIn",
  },
  developedBy: {
    [Language.SPANISH]: "Web desarrollada por",
    [Language.ENGLISH]: "Website developed by",
    [Language.PORTUGUESE]: "Site desenvolvido por",
  },
};

type FormData = {
  name: string;
  company?: string;
  phone?: string;
  email: string;
  message: string;
};

const Toast: React.FC<{
  type: "success" | "error";
  message: string;
  onClose: () => void;
}> = ({ type, message, onClose }) => {
  const bg = type === "success" ? "bg-green-500" : "bg-red-500";
  const Icon = type === "success" ? CheckCircle : AlertCircle;
  return (
    <div
      className={`${bg} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 fixed bottom-4 right-4 z-50`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{message}</span>
      <button onClick={onClose} className="ml-2 p-1">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export const ContactFooter: React.FC = () => {
  const { currentLanguage } = useLanguage();

  // Creamos el schema con mensajes según idioma
  const schema = React.useMemo(
    () =>
      Joi.object({
        name: Joi.string()
          .min(2)
          .max(50)
          .required()
          .messages(validationMessages.name[currentLanguage]),
        company: Joi.string()
          .allow("")
          .min(2)
          .max(100)
          .messages(validationMessages.company[currentLanguage]),
        phone: Joi.string()
          .pattern(/^[+]?[\d\-() ]+$/)
          .allow("")
          .messages(validationMessages.phone[currentLanguage]),
        email: Joi.string()
          .email({ tlds: { allow: false } })
          .required()
          .messages(validationMessages.email[currentLanguage]),
        message: Joi.string()
          .min(10)
          .max(1000)
          .required()
          .messages(validationMessages.message[currentLanguage]),
      }),
    [currentLanguage],
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: joiResolver(schema),
    mode: "onBlur",
  });

  const [toast, setToast] = React.useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  React.useEffect(() => {
    if (toast) {
      const timeout = setTimeout(() => {
        setToast(null);
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [toast]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await emailjs.send(
        "service_yn9ib5g",
        "template_uo6xkvy",
        {
          name: data.name,
          company:
            data.company ||
            (currentLanguage === Language.SPANISH
              ? "No especificado"
              : currentLanguage === Language.ENGLISH
                ? "Not specified"
                : "Não especificado"),
          phone:
            data.phone ||
            (currentLanguage === Language.SPANISH
              ? "No especificado"
              : currentLanguage === Language.ENGLISH
                ? "Not specified"
                : "Não especificado"),
          email: data.email,
          message: data.message,
        },
        "UV6jxCVYKlwvH3GhS",
      );

      if (res.status !== 200) throw new Error("Error en servidor");

      trackEvent(GA_EVENTS.FORM_SUBMIT, {
        form_id: "contact_footer",
        location: "footer",
        status: "success",
        method: "emailjs",
        language: currentLanguage,
        company_provided: !!data.company,
        message_length: data.message.length,
        // debug_mode: true, // solo en pruebas
        send_to: "G-BVDQHM3XTL",
      });

      setToast({
        type: "success",
        message: uiText.emailSuccess[currentLanguage],
      });
      reset();
    } catch (err) {
      console.error(err);

      trackEvent(GA_EVENTS.FORM_SUBMIT, {
        form_id: "contact_footer",
        location: "footer",
        status: "error",
        method: "emailjs",
        language: currentLanguage,
        company_provided: !!(data && data.company),
        error_type: "emailjs_failed",
        send_to: "G-BVDQHM3XTL",
      });

      setToast({ type: "error", message: uiText.emailError[currentLanguage] });
    }
  };

  return (
    <>
      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}

      <footer
        id="contacto"
        className="bg-[var(--color-primary)] text-white py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {uiText.title[currentLanguage]}
            </h2>
            <div className="w-24 h-1 bg-[var(--color-accent)] mx-auto"></div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid md:grid-cols-2 gap-6"
          >
            {/* Nombre */}
            <div>
              <input
                {...register("name")}
                placeholder={uiText.name[currentLanguage]}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message as string}
                </p>
              )}
            </div>

            {/* Empresa */}
            <div>
              <input
                {...register("company")}
                placeholder={uiText.company[currentLanguage]}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.company ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.company.message as string}
                </p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <input
                {...register("phone")}
                placeholder={uiText.phone[currentLanguage]}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message as string}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email")}
                placeholder={uiText.email[currentLanguage]}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message as string}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2">
              <textarea
                {...register("message")}
                placeholder={uiText.message[currentLanguage]}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 resize-none transition-all duration-300`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message as string}
                </p>
              )}
            </div>

            {/* Submit */}
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[var(--color-accent)] hover:bg-emerald-600 hover:scale-105"
                } text-white`}
              >
                {isSubmitting
                  ? uiText.sending[currentLanguage]
                  : uiText.send[currentLanguage]}
              </button>
            </div>
          </form>

          {/* Datos de contacto */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <a
                href="mailto:gonzalo_luvani@lyspasandco.com"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)]"
                itemProp="email"
              >
                <Mail className="w-5 h-5" />
                <span>gonzalo_luvani@lyspasandco.com</span>
              </a>
              <a
                href="tel:+5434112345678"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)]"
                itemProp="telephone"
              >
                <Phone className="w-5 h-5" />
                <span>+54 9 3416 40-8758</span>
              </a>
              <a
                href="https://www.linkedin.com/company/lyspasandco/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)]"
                itemProp="sameAs"
              >
                <Linkedin className="w-5 h-5" />
                <span>{uiText.linkedin[currentLanguage]}</span>
              </a>
            </div>
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} LYSPAS & CO.{" "}
              {uiText.reserved[currentLanguage]}
            </p>
            <p className="text-white/50 text-xs mt-10">
              {uiText.developedBy[currentLanguage]}{" "}
              <a
                href="https://maxidelfino.github.io/MyPortfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-[var(--color-accent)]"
              >
                Maximiliano Delfino - MaxDesign
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
