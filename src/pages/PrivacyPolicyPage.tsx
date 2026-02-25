import React from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { Language } from "../types";
import FloatingNavigation from "../components/FloatingNavigation";
import ContactFooter from "../components/Footer";
import FloatingWhatsAppCTA from "../components/FloatingCTAs";

const translations: Record<Language, {
  title: string;
  lastUpdated: string;
  sections: { heading: string; body: string }[];
}> = {
  [Language.SPANISH]: {
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: febrero 2026",
    sections: [
      {
        heading: "1. Información que recopilamos",
        body: `A través del formulario de contacto de nuestro sitio web recopilamos únicamente los datos que usted proporciona voluntariamente: nombre, dirección de correo electrónico y nombre de su empresa. No recopilamos datos sensibles ni información de tarjetas de crédito.`,
      },
      {
        heading: "2. Cómo usamos su información",
        body: `Los datos del formulario de contacto se utilizan exclusivamente para responder a su consulta y establecer comunicación comercial. El envío de mensajes se realiza mediante EmailJS, un servicio de terceros que procesa los datos conforme a su propia política de privacidad disponible en emailjs.com.`,
      },
      {
        heading: "3. Cookies y análisis",
        body: `Este sitio utiliza Google Analytics 4 (GA4) para medir el tráfico y el comportamiento de los visitantes de forma anónima y agregada. GA4 emplea cookies propias de Google para recopilar datos estadísticos. No utilizamos cookies propias ni cookies de seguimiento de terceros adicionales. Puede configurar su navegador para bloquear o eliminar cookies en cualquier momento.`,
      },
      {
        heading: "4. Compartición de datos",
        body: `No vendemos, alquilamos ni compartimos su información personal con terceros, excepto con los proveedores de servicios ya mencionados (EmailJS y Google Analytics) que actúan como procesadores de datos bajo acuerdos que garantizan la confidencialidad.`,
      },
      {
        heading: "5. Seguridad",
        body: `Implementamos medidas técnicas razonables para proteger sus datos contra acceso no autorizado, alteración o divulgación. El sitio se sirve exclusivamente mediante HTTPS.`,
      },
      {
        heading: "6. Sus derechos",
        body: `Usted tiene derecho a acceder, rectificar o solicitar la eliminación de sus datos personales en cualquier momento. Para ejercer estos derechos, contáctenos en gonzalo_luvani@lyspasandco.com indicando "Privacidad" en el asunto del correo. Responderemos dentro de los 30 días hábiles.`,
      },
      {
        heading: "7. Cambios a esta política",
        body: `Nos reservamos el derecho de actualizar esta política en cualquier momento. La fecha de última actualización indicada al inicio del documento reflejará cualquier cambio. Le recomendamos revisar esta página periódicamente.`,
      },
      {
        heading: "8. Contacto",
        body: `Si tiene preguntas sobre esta política de privacidad, puede contactarnos en: gonzalo_luvani@lyspasandco.com o llamando al +54 9 3416 40-8758.`,
      },
    ],
  },
  [Language.ENGLISH]: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: February 2026",
    sections: [
      {
        heading: "1. Information We Collect",
        body: `Through our website contact form, we only collect data you voluntarily provide: your name, email address, and company name. We do not collect sensitive data or payment information.`,
      },
      {
        heading: "2. How We Use Your Information",
        body: `Contact form data is used solely to respond to your inquiry and establish commercial communication. Messages are sent via EmailJS, a third-party service that processes data according to its own privacy policy available at emailjs.com.`,
      },
      {
        heading: "3. Cookies and Analytics",
        body: `This site uses Google Analytics 4 (GA4) to measure traffic and visitor behavior anonymously and in aggregate. GA4 uses Google's own cookies to collect statistical data. We do not use first-party cookies or additional third-party tracking cookies. You may configure your browser to block or delete cookies at any time.`,
      },
      {
        heading: "4. Data Sharing",
        body: `We do not sell, rent, or share your personal information with third parties, except with the service providers already mentioned (EmailJS and Google Analytics) who act as data processors under agreements that guarantee confidentiality.`,
      },
      {
        heading: "5. Security",
        body: `We implement reasonable technical measures to protect your data against unauthorized access, alteration, or disclosure. The site is served exclusively via HTTPS.`,
      },
      {
        heading: "6. Your Rights",
        body: `You have the right to access, rectify, or request the deletion of your personal data at any time. To exercise these rights, contact us at gonzalo_luvani@lyspasandco.com with "Privacy" in the subject line. We will respond within 30 business days.`,
      },
      {
        heading: "7. Changes to This Policy",
        body: `We reserve the right to update this policy at any time. The last updated date at the top of this document will reflect any changes. We recommend reviewing this page periodically.`,
      },
      {
        heading: "8. Contact",
        body: `If you have questions about this privacy policy, you may contact us at: gonzalo_luvani@lyspasandco.com or by calling +54 9 3416 40-8758.`,
      },
    ],
  },
  [Language.PORTUGUESE]: {
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: fevereiro 2026",
    sections: [
      {
        heading: "1. Informações que coletamos",
        body: `Por meio do formulário de contato do nosso site, coletamos apenas os dados que você fornece voluntariamente: nome, endereço de e-mail e nome da sua empresa. Não coletamos dados sensíveis nem informações de pagamento.`,
      },
      {
        heading: "2. Como usamos suas informações",
        body: `Os dados do formulário de contato são usados exclusivamente para responder à sua consulta e estabelecer comunicação comercial. O envio de mensagens é feito via EmailJS, um serviço de terceiros que processa os dados conforme sua própria política de privacidade disponível em emailjs.com.`,
      },
      {
        heading: "3. Cookies e análise",
        body: `Este site usa o Google Analytics 4 (GA4) para medir o tráfego e o comportamento dos visitantes de forma anônima e agregada. O GA4 utiliza cookies próprios do Google para coletar dados estatísticos. Não utilizamos cookies próprios nem cookies de rastreamento de terceiros adicionais. Você pode configurar seu navegador para bloquear ou excluir cookies a qualquer momento.`,
      },
      {
        heading: "4. Compartilhamento de dados",
        body: `Não vendemos, alugamos nem compartilhamos suas informações pessoais com terceiros, exceto com os provedores de serviços já mencionados (EmailJS e Google Analytics), que atuam como processadores de dados sob acordos que garantem a confidencialidade.`,
      },
      {
        heading: "5. Segurança",
        body: `Implementamos medidas técnicas razoáveis para proteger seus dados contra acesso não autorizado, alteração ou divulgação. O site é servido exclusivamente via HTTPS.`,
      },
      {
        heading: "6. Seus direitos",
        body: `Você tem o direito de acessar, retificar ou solicitar a exclusão de seus dados pessoais a qualquer momento. Para exercer esses direitos, entre em contato conosco em gonzalo_luvani@lyspasandco.com com "Privacidade" no assunto. Responderemos em até 30 dias úteis.`,
      },
      {
        heading: "7. Alterações nesta política",
        body: `Reservamo-nos o direito de atualizar esta política a qualquer momento. A data da última atualização indicada no início do documento refletirá qualquer mudança. Recomendamos que você revise esta página periodicamente.`,
      },
      {
        heading: "8. Contato",
        body: `Se você tiver dúvidas sobre esta política de privacidade, entre em contato conosco em: gonzalo_luvani@lyspasandco.com ou ligando para +54 9 3416 40-8758.`,
      },
    ],
  },
};

const PrivacyPolicyPage: React.FC = () => {
  const { currentLanguage } = useLanguage();
  const t = translations[currentLanguage];

  return (
    <div className="min-h-screen bg-[var(--color-bg)]">
      <FloatingNavigation />

      <main className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold text-[var(--color-primary)] mb-2">
          {t.title}
        </h1>
        <p className="text-sm text-[var(--color-text)] opacity-70 mb-12">
          {t.lastUpdated}
        </p>

        <div className="space-y-10">
          {t.sections.map((section, idx) => (
            <section key={idx}>
              <h2 className="text-xl font-semibold text-[var(--color-primary)] mb-3">
                {section.heading}
              </h2>
              <p className="text-[var(--color-text)] leading-relaxed">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      </main>

      <ContactFooter />
      <FloatingWhatsAppCTA />
    </div>
  );
};

export default PrivacyPolicyPage;
