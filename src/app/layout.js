import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

// Metadata configurada sin viewport
export const metadata = {
  title: "Verónica Cano Digital Card",
  description:
    "Especialista en Derecho Societario y Civil, además de ser Community Manager. Fundadora de Globaleg.",
  keywords:
    "Verónica Cano, Abogada, Derecho Societario, Derecho Civil, Community Manager, Globaleg",
  authors: [{ name: "Verónica Cano" }],

  robots: "index, follow",

  openGraph: {
    title: "Verónica Cano Digital Card",
    description:
      "Digital Card de Verónica Cano, Abogada especialista en Derecho Societario y Civil, y Community Manager. Fundadora de Globaleg.",
    url: "https://veronicacano.anvetcard.com",
    images: [
      {
        url: "https://veronicacano.anvetcard.com/assets/images/sharedimage.jpg",
        alt: "Globaleg Logo",
        width: 1200, // Ajuste de tamaño recomendado para OpenGraph
        height: 630,
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Verónica Cano - Abogada Especialista en Derecho Societario y Civil",
    description:
      "Abogada especialista en Derecho Societario y Civil, y Community Manager. Fundadora de Globaleg.",
    images: ["/assets/images/logo.jpg"],
  },

  icons: {
    icon: "/assets/icons/favicon.ico",
  },
};

// Nueva exportación para viewport
export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-image-with-overlay">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
