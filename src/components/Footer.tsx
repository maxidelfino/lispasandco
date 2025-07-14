"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  X,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

// Simulación de Joi para validación (en un proyecto real usarías: import Joi from 'joi')
const Joi = {
  string: () => ({
    required: () => ({
      min: (min) => ({
        max: (max) => ({
          email: () => ({
            messages: (msgs) => ({
              validate: (value) => {
                if (!value)
                  return {
                    error: { details: [{ message: msgs["string.empty"] }] },
                  };
                if (value.length < min)
                  return {
                    error: {
                      details: [
                        {
                          message: msgs["string.min"].replace("{#limit}", min),
                        },
                      ],
                    },
                  };
                if (value.length > max)
                  return {
                    error: {
                      details: [
                        {
                          message: msgs["string.max"].replace("{#limit}", max),
                        },
                      ],
                    },
                  };
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value))
                  return {
                    error: { details: [{ message: msgs["string.email"] }] },
                  };
                return { value };
              },
            }),
          }),
          messages: (msgs) => ({
            validate: (value) => {
              if (!value)
                return {
                  error: { details: [{ message: msgs["string.empty"] }] },
                };
              if (value.length < min)
                return {
                  error: {
                    details: [
                      { message: msgs["string.min"].replace("{#limit}", min) },
                    ],
                  },
                };
              if (value.length > max)
                return {
                  error: {
                    details: [
                      { message: msgs["string.max"].replace("{#limit}", max) },
                    ],
                  },
                };
              return { value };
            },
          }),
        }),
      }),
      email: () => ({
        messages: (msgs) => ({
          validate: (value) => {
            if (!value)
              return {
                error: { details: [{ message: msgs["string.empty"] }] },
              };
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value))
              return {
                error: { details: [{ message: msgs["string.email"] }] },
              };
            return { value };
          },
        }),
      }),
      messages: (msgs) => ({
        validate: (value) => {
          if (!value)
            return { error: { details: [{ message: msgs["string.empty"] }] } };
          return { value };
        },
      }),
    }),
    min: (min) => ({
      max: (max) => ({
        messages: (msgs) => ({
          validate: (value) => {
            if (value && value.length < min)
              return {
                error: {
                  details: [
                    { message: msgs["string.min"].replace("{#limit}", min) },
                  ],
                },
              };
            if (value && value.length > max)
              return {
                error: {
                  details: [
                    { message: msgs["string.max"].replace("{#limit}", max) },
                  ],
                },
              };
            return { value };
          },
        }),
      }),
      messages: (msgs) => ({
        validate: (value) => {
          if (value && value.length < min)
            return {
              error: {
                details: [
                  { message: msgs["string.min"].replace("{#limit}", min) },
                ],
              },
            };
          return { value };
        },
      }),
    }),
    max: (max) => ({
      messages: (msgs) => ({
        validate: (value) => {
          if (value && value.length > max)
            return {
              error: {
                details: [
                  { message: msgs["string.max"].replace("{#limit}", max) },
                ],
              },
            };
          return { value };
        },
      }),
    }),
    email: () => ({
      messages: (msgs) => ({
        validate: (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (value && !emailRegex.test(value))
            return { error: { details: [{ message: msgs["string.email"] }] } };
          return { value };
        },
      }),
    }),
    pattern: (pattern) => ({
      messages: (msgs) => ({
        validate: (value) => {
          if (value && !pattern.test(value))
            return {
              error: { details: [{ message: msgs["string.pattern.base"] }] },
            };
          return { value };
        },
      }),
    }),
  }),
};

// Esquema de validación
const contactSchema = {
  name: Joi.string().required().min(2).max(50).messages({
    "string.empty": "El nombre es requerido",
    "string.min": "El nombre debe tener al menos {#limit} caracteres",
    "string.max": "El nombre no puede exceder {#limit} caracteres",
  }),
  company: Joi.string().min(2).max(100).messages({
    "string.min": "La empresa debe tener al menos {#limit} caracteres",
    "string.max": "La empresa no puede exceder {#limit} caracteres",
  }),
  phone: Joi.string()
    .pattern(/^[\+]?[\d\s\-\(\)]+$/)
    .messages({
      "string.pattern.base": "El número de teléfono no es válido",
    }),
  email: Joi.string().required().email().messages({
    "string.empty": "El correo electrónico es requerido",
    "string.email": "El correo electrónico debe ser válido",
  }),
  message: Joi.string().required().min(10).max(1000).messages({
    "string.empty": "El mensaje es requerido",
    "string.min": "El mensaje debe tener al menos {#limit} caracteres",
    "string.max": "El mensaje no puede exceder {#limit} caracteres",
  }),
};

// Componente Toast
const Toast = ({ type, message, onClose }) => {
  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const Icon = type === "success" ? CheckCircle : AlertCircle;

  return (
    <div
      className={`fixed bottom-4 right-4 ${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 z-50 animate-bounce`}
    >
      <Icon className="w-5 h-5" />
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="ml-2 hover:bg-white/20 rounded-full p-1 transition-colors"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

const ContactFooter: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    Object.keys(contactSchema).forEach((field) => {
      const result = contactSchema[field].validate(formData[field]);
      if (result.error) {
        newErrors[field] = result.error.details[0].message;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      showToast("error", "Por favor corrige los errores en el formulario");
      return;
    }

    setIsSubmitting(true);

    try {
      // Aquí se integrará con SendGrid en el futuro
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        showToast("success", "¡Mensaje enviado con éxito!");
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Error al enviar el mensaje");
      }
    } catch (error) {
      showToast("error", "Error al enviar el mensaje. Inténtalo de nuevo.");
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
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

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre completo"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300`}
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Empresa"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.company ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300`}
              />
              {errors.company && (
                <p className="text-red-400 text-sm mt-1">{errors.company}</p>
              )}
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Número de teléfono"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.phone ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300`}
              />
              {errors.phone && (
                <p className="text-red-400 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent transition-all duration-300`}
              />
              {errors.email && (
                <p className="text-red-400 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div className="md:col-span-2">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Mensaje"
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.message ? "border-red-500" : "border-white/20"
                } bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] focus:border-transparent resize-none transition-all duration-300`}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="md:col-span-2 text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl ${
                  isSubmitting
                    ? "bg-gray-500 cursor-not-allowed"
                    : "bg-[var(--color-accent)] hover:bg-emerald-600 hover:scale-105"
                } text-white`}
              >
                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
              </button>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/20 text-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 mb-6">
              <a
                href="mailto:info@lyspas.com"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>info@lyspas.com</span>
              </a>
              <a
                href="tel:+5434112345678"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+54 341 123 4567</span>
              </a>
              <a
                href="https://linkedin.com/company/lyspas"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-[var(--color-accent)] transition-colors"
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
