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

import emailjs from 'emailjs-com';

// Schema Joi con mensajes explícitos
const schema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "El nombre es requerido",
    "string.min": "El nombre debe tener al menos {#limit} caracteres",
    "string.max": "El nombre no puede exceder {#limit} caracteres",
  }),
  company: Joi.string().allow("").min(2).max(100).messages({
    "string.min": "La empresa debe tener al menos {#limit} caracteres",
    "string.max": "La empresa no puede exceder {#limit} caracteres",
  }),
  phone: Joi.string()
    .pattern(/^[+]?[\d\-() ]+$/)
    .allow("")
    .messages({
      "string.pattern.base": "El número de teléfono no es válido",
    }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "El correo electrónico es requerido",
      "string.email": "El correo electrónico debe ser válido",
    }),
  message: Joi.string().min(10).max(1000).required().messages({
    "string.empty": "El mensaje es requerido",
    "string.min": "El mensaje debe tener al menos {#limit} caracteres",
    "string.max": "El mensaje no puede exceder {#limit} caracteres",
  }),
});

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

  const onSubmit = async (data: FormData) => {
    try {
      const res = await emailjs.send(
        'service_yn9ib5g',     // 👈 tu Service ID
        'template_uo6xkvy',    // 👈 tu Template ID
        {
          name: data.name,
          company: data.company || "No especificado",
          phone: data.phone || "No especificado",
          email: data.email,
          message: data.message,
        },
        'UV6jxCVYKlwvH3GhS'   // 👈 tu Public Key
      );

      if (res.status !== 200) throw new Error("Error en servidor");
      // setToast({ type: "success", message: "¡Mensaje enviado con éxito!" });
      reset();
    } catch (err) {
      console.error(err);
      setToast({ type: "error", message: "Fallo al enviar, inténtalo luego." });
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
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
                placeholder="Nombre completo"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Empresa */}
            <div>
              <input
                {...register("company")}
                placeholder="Empresa (opcional)"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.company ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.company.message}
                </p>
              )}
            </div>

            {/* Teléfono */}
            <div>
              <input
                {...register("phone")}
                placeholder="Teléfono (opcional)"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.phone.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <input
                {...register("email")}
                placeholder="Correo electrónico"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 transition-all duration-300`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Mensaje */}
            <div className="md:col-span-2">
              <textarea
                {...register("message")}
                placeholder="Mensaje"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-0 resize-none transition-all duration-300`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">
                  {errors.message.message}
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
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </form>

          {/* Datos de contacto */}
          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6">
              <a
                href="mailto:info@lyspas.com"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)]"
              >
                <Mail className="w-5 h-5" />
                <span>info@lyspas.com</span>
              </a>
              <a
                href="tel:+5434112345678"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)]"
              >
                <Phone className="w-5 h-5" />
                <span>+54 341 123 4567</span>
              </a>
              <a
                href="https://linkedin.com/company/lyspas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)]"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} LYSPAS & CO. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactFooter;
