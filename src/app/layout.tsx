import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MEDAARIS — Gestion scolaire',
  description:
    "Plateforme de gestion d'établissement scolaire. Inscriptions, notes, présences, communication et facturation réunis en un seul outil.",
  icons: {
    icon: '/medaaris-logo.jpeg',
    apple: '/medaaris-logo.jpeg',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
