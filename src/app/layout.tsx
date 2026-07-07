import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MEDAARIS - Gestion scolaire',
  description: "Plateforme de gestion d'etablissement scolaire.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
