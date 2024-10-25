"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/profile/ProfileCard/ProfileCard.jsx";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons.jsx";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons.jsx";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal.jsx";
import Slider from "@/components/cardContent/Slider/Slider.jsx";
import EducationExperience from "@/components/cardContent/EducationExperience/EducationExperience.jsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDispaly.jsx";
import PaymentInfo from "@/components/cardContent/PaymentInfo/PaymentInfo.jsx";

// Animaciones básicas
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

export default function Home() {
  //---------------------------------------------------------
  // Perfil
  //---------------------------------------------------------

  const profileData = {
    name: "Verónica Cano",
    title: "Especialista en Derecho Societario y Civil",
    image: "/assets/images/profile/profile.png",
    description:
      "Abogada con amplia experiencia en Derecho Societario y Civil, además de ser Community Manager. Fundadora del estudio jurídico Globaleg, se especializa en brindar asesoría legal integral a empresas y personas en el ámbito corporativo y civil. Su enfoque es ofrecer soluciones prácticas y eficientes a sus clientes.",
    
  };
  

  const whatsappMessage = "Hola Vero, me gustaría saber más sobre tus servicios.";

  //---------------------------------------------------------
  // Datos de contacto
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de contacto

  const contacts = [
    {
      type: "location",
      icon: "/assets/icons/ubicacion_g.png",
      text: "Dirección",
      address:
        "Abdón Calderón 181 y Ángel Acosta, Urb. Acosta Soberón, Conocoto, Quito, Ecuador",
      hours: "Lunes a Viernes, 9:00 AM - 6:00 PM",
      googleMapsLink:
        "https://www.google.com/maps/place/Abdón+Calderón+181,+Conocoto,+Quito,+Ecuador", // Ajusta con la ubicación correcta si es necesario
    },
    {
      type: "phone",
      icon: "/assets/icons/call_g.png",
      action: "tel:+593994805678",
      text: "Llamar",
    },
    {
      type: "email",
      icon: "/assets/icons/email_g.png",
      action: "mailto:veritocanor@gmail.com",
      text: "Email",
    },
    {
      type: "whatsapp",
      icon: "/assets/icons/whatsapp_g.png",
      action: "https://wa.me/+593994805678",
      text: "WhatsApp",
    },
  ];
  

  //---------------------------------------------------------
  // Social media
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos y botones de redes sociales

  const socialMediaLinks = [
    {
      type: "facebook",
      icon: "facebook_g.png",
      url: "https://www.facebook.com/veronica.cano.94",
      text: "Facebook",
    },
    {
      type: "instagram",
      icon: "instagram_g.png",
      url: "https://www.instagram.com/veritocanor/",
      text: "Instagram",
    },
    {
      type: "linkedin",
      icon: "linkedin_g.png", // Asegúrate de tener el icono de LinkedIn en tu carpeta de íconos
      url: "https://www.linkedin.com/in/veronica-cano-33298229a/",
      text: "LinkedIn",
    },
    {
      type: "tiktok",
      icon: "tiktok_g.png",
      url: "https://www.tiktok.com/@veritocano02",
      text: "TikTok",
    },
  ];
  

  //---------------------------------------------------------
  // Galería de productos y/servicios con imagen o video
  //---------------------------------------------------------

  const items = [
    {
      type: "image",
      title: "Manejo de Redes Sociales",
      image: "/assets/images/services/producto1.jpeg",
      description: [
        "Plan Básico",
        "Plan Emprendedor",
        "Plan Profesional",
        "Plan Transformación Digital",
        "Campaña Express",
        "Plan TikTok Básico",
        "Plan TikTok Pro",
      ],
      highlight:
        "Si necesitas mejorar el manejo de tus redes sociales, lo hacemos por ti, creando contenido, publicando en el horario adecuado, pautando publicidad exitosa, logrando crecer y vender como esperas. Elige el plan que más te guste.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Asesorías 1.1",
      image: "/assets/images/services/producto2.jpeg",
      description: [
        "Asesoría Express de tu perfil de Instagram",
        "Asesoría y auditoría de redes sociales",
        "Asesoría de preguntas y respuestas",
        "Asesoría de contenido",
      ],
      highlight:
        "Si eres una marca, emprendedor, pequeña o gran empresa y quieres impulsar y mejorar tu imagen digital, he creado asesorías con temas específicos según tus necesidades para que logres crecer y vender en el mundo digital.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Diseño de Marca",
      image: "/assets/images/services/producto3.jpeg",
      description: [
        "Logotipo",
        "Logotipo + manual de marca",
        "Manual de marca",
        "Registro de marca",
      ],
      highlight:
        "Tu marca debe representar e identificar la esencia y el corazón de quién está detrás de lo que eres. Te ayudamos a visualizarla creando el diseño que necesitas para que seas una marca inolvidable y legal.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Manejo de Redes Sociales",
      image: "/assets/images/services/service1.jpg",
      description: [
        "Mejoramos el manejo de tus redes sociales con estrategias de contenido, publicaciones en horarios adecuados, y publicidad exitosa.",
      ],
      highlight:
        "Creación de contenido personalizado para hacer crecer y vender a través de redes sociales.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Consultoría y Asesoría de Marketing",
      image: "/assets/images/services/service2.jpg",
      description: [
        "Consultoría personalizada para marcas, emprendedores, y empresas, diseñada para mejorar su presencia y rendimiento en el mundo digital.",
      ],
      highlight:
        "Asesorías específicas para ayudarte a crecer y vender en el mundo digital.",
      phone: "+593992542248",
    },
    {
      type: "image",
      title: "Branding y Creación de Marca",
      image: "/assets/images/services/service3.jpg",
      description: [
        "Creamos el diseño y branding que representa la esencia de tu marca, haciéndola inolvidable y legal.",
      ],
      highlight:
        "Te ayudamos a desarrollar una identidad de marca sólida y profesional que conecte con tu audiencia.",
      phone: "+593992542248",
    },
  ];

  //---------------------------------------------------------
  //Slider de productos y servicios
  //---------------------------------------------------------

  const slidesData = [
    {
      image: "/assets/images/slides/social_media_management.jpeg",
      title: "Manejo de Redes Sociales",
    },
    {
      image: "/assets/images/slides/consultoria_marketing.jpeg",
      title: "Consultoría de Marketing Digital",
    },
    {
      image: "/assets/images/slides/branding.jpeg",
      title: "Branding y Creación de Marca",
    },
    {
      image: "/assets/images/slides/cursos_online.jpeg",
      title: "Cursos Online ",
    },
    {
      image: "/assets/images/slides/campanas_publicitarias.jpeg",
      title: "Manejo de campañas publicitarias",
    },
  ];
  

  //---------------------------------------------------------
  // Accordion de experiencia laboral y educación
  //---------------------------------------------------------

  const entries = [
    {
      date: "2021",
      title: "Ingeniera en Marketing",
      description: "Universidad Tecnológica Equinoccial",
      details: [
        "Ericka Veintimilla se graduó en Marketing en la Universidad Tecnológica Equinoccial, una institución reconocida por su enfoque innovador y práctico en la enseñanza del marketing.",
        "Adquirió una base sólida en principios de marketing, estrategias de mercado y comportamiento del consumidor.",
        "Durante su licenciatura, participó en proyectos enfocados en análisis de mercado y estrategias de branding.",
        "Desarrolló habilidades en la creación de campañas publicitarias y estudios de mercado para negocios locales.",
      ],
      image: "/assets/images/education/ute_logo.jpeg",
    },
    {
      date: "2023",
      title: "Máster en Marketing Digital",
      description: "Escuela de Postgrado Newman",
      details: [
        "Complementó su educación con un máster en Marketing Digital en la Escuela de Postgrado Newman.",
        "Especialización en las últimas tendencias y herramientas del marketing digital, incluyendo SEO, redes sociales y análisis de datos.",
        "Adoptó estrategias digitales innovadoras para mejorar la presencia online de marcas y empresas.",
        "Desarrolló campañas digitales para potenciar el engagement en plataformas como Facebook, Instagram y LinkedIn.",
      ],
      image: "/assets/images/education/newman_logo.png",
    },
    {
      date: "2022 - Presente",
      title: "Experta en Creación de Contenido y Manejo de Redes Sociales",
      description: "Consultora de Marketing Digital",
      details: [
        "Asesorando a empresas en la creación de contenido estratégico para diversas plataformas digitales.",
        "Gestión de redes sociales para marcas, logrando un aumento significativo en seguidores y engagement.",
        "Desarrollo de campañas creativas que incrementaron la visibilidad y conversión en las plataformas de redes sociales.",
        "Estrategias de contenido orientadas a mejorar la identidad de marca y generar leads cualificados.",
      ],
      image: "/assets/images/education/service3.jpg",
    },
    {
      date: "2022 - Presente",
      title: "Fundadora de Likeate Digital",
      description: "Agencia de Marketing Digital",
      details: [
        "Lidera la agencia Likeate Digital, enfocada en estrategias digitales personalizadas para pequeñas y medianas empresas.",
        "Implementación de campañas de marketing digital que incluyen SEO, SEM, y marketing en redes sociales.",
        "Consultoría en crecimiento digital y optimización de presencia online.",
        "Creación de contenido visual y audiovisual para incrementar la interacción en redes sociales.",
      ],
      image: "/assets/images/education/logo.jpg",
    },
  ];

  //---------------------------------------------------------
  // Payment Info
  //---------------------------------------------------------

  const banksData = [
    {
      name: "Banco Pichincha",
      logo: "bancoPichincha_b.png",
      instructions:
        "Use estos detalles para realizar el pago. La cuenta está a nombre de Ericka Veintimilla.",
      details: [
        { label: "Número de Cuenta", value: "2204744098" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1726213612" },
        { label: "Email", value: "eriveinti@gmail.com" },
      ],
    },
    {
      name: "Banco Guayaquil",
      logo: "bancoGuayaquil_b.png",
      instructions:
        "Use estos detalles para realizar el pago. La cuenta está a nombre de Ericka Veintimilla.",
      details: [
        { label: "Número de Cuenta", value: "0013840275" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1726213612" },
        { label: "Email", value: "eriveinti@gmail.com" },
      ],
    },
    {
      name: "Produbanco",
      logo: "produbanco_b.png",
      instructions:
        "Use estos detalles para realizar el pago. La cuenta está a nombre de Ericka Veintimilla.",
      details: [
        { label: "Número de Cuenta", value: "18000872592" },
        { label: "Tipo de Cuenta", value: "Ahorros" },
        { label: "Identificación", value: "1726213612" },
        { label: "Email", value: "eriveinti@gmail.com" },
      ],
    },
  ];

  //---------------------------------------------------------
  //---------------------------------------------------------

  return (
    <main>
      {/* Sección Inicio */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        id="inicio"
      >
        <ProfileCard profile={profileData} whatsappMessage={whatsappMessage} />
        <ContactButtons contacts={contacts} />
        <SocialMediaIcons socialLinks={socialMediaLinks} />
      </motion.div>

      {/* Educación y Experiencia Laboral */}
      <motion.div
        id="curriculum"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">
          Educación y Experiencia Laboral
        </h1>
        <EducationExperience entries={entries} />
      </motion.div>

      {/* Productos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="productos"
      >
        <h1 className="section-subtitle py-spacing-2">Servicios Destacados</h1>
        <GalleryWithModal items={items} />
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <h1 className="section-subtitle py-spacing-2">Ofertas y Promociones</h1>
        <Slider slides={slidesData} />
      </motion.div>

      {/* Video Player */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <VideoPlayer
          videoSrc="/assets/videos/marketing.mp4"
          title="Experiencia y Calidad"
        />
      </motion.div>

      {/* Información de Pago */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="info_pago"
      >
        <h1 className="section-subtitle py-spacing-2">Información de Pago</h1>
        <PaymentInfo banks={banksData} />
      </motion.div>

      {/* QR Code */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
      >
        <QRDisplay qrImage="/assets/images/qrcode.png" title="Código QR" />
      </motion.div>
    </main>
  );
}
