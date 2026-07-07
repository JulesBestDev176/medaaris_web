'use client';

import Image from 'next/image';
import {
  BarChart3,
  BookOpenCheck,
  Check,
  CheckCircle2,
  FileCheck2,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Smartphone,
  UsersRound,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { fetchPublicReporting, formatOptionalNumber, type PublicReporting } from '@/lib/reporting';

const navItems = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'A propos' },
  { href: '#benefices', label: 'Pourquoi MEDAARIS' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

const benefits = [
  {
    title: 'Une gestion simplifiee',
    desc: 'Reunissez les principales activites de votre etablissement sur une seule plateforme.',
    icon: FileCheck2,
    color: '#1B62F0',
  },
  {
    title: 'Une meilleure organisation',
    desc: "Accedez rapidement aux informations importantes et ameliorez la coordination entre les equipes.",
    icon: UsersRound,
    color: '#6D4BF6',
  },
  {
    title: 'Un gain de temps',
    desc: "Automatisez les taches administratives repetitives afin de consacrer plus de temps a l'education.",
    icon: CheckCircle2,
    color: '#0E9F70',
  },
  {
    title: 'Des decisions plus intelligentes',
    desc: "Suivez l'evolution de votre etablissement avec des indicateurs clairs et actualises.",
    icon: BarChart3,
    color: '#1B62F0',
  },
  {
    title: 'Une communication renforcee',
    desc: 'Facilitez les echanges entre la direction, les enseignants, les parents et les eleves.',
    icon: MessageCircle,
    color: '#6D4BF6',
  },
  {
    title: 'Des donnees securisees',
    desc: 'Vos informations restent protegees, disponibles et accessibles uniquement aux bonnes personnes.',
    icon: ShieldCheck,
    color: '#0E9F70',
  },
];

const audiences = [
  ['Direction', 'Pilotez votre etablissement avec une vision globale.'],
  ['Administration', 'Optimisez les taches administratives quotidiennes.'],
  ['Enseignants', 'Suivez plus facilement les activites pedagogiques.'],
  ['Parents', 'Restez informes de la vie scolaire de vos enfants.'],
  ['Eleves', 'Consultez vos informations scolaires en toute simplicite.'],
];

const advantages = [
  'Gain de temps',
  'Productivite accrue',
  'Meilleure organisation',
  'Communication simplifiee',
  'Plateforme moderne',
  'Accessible partout',
  'Interface intuitive',
  'Données sécurisées',
  'Sauvegardes automatiques',
  'Disponible 24h/24',
  'Accompagnement personnalise',
  'Evolutive selon vos besoins',
];

const faqs = [
  ['MEDAARIS convient-elle aux petites ecoles ?', 'Oui, la plateforme accompagne aussi bien les petites structures que les etablissements plus grands.'],
  ['Faut-il installer un logiciel ?', 'Non, MEDAARIS est accessible en ligne depuis un navigateur.'],
  ['Peut-on utiliser MEDAARIS sur telephone ?', 'Oui, la plateforme est accessible depuis ordinateur, tablette et smartphone.'],
  ['Les donnees sont-elles securisees ?', 'Oui, la protection et la confidentialite des donnees sont une priorite.'],
  ['Comment obtenir une demonstration ?', 'Contactez notre equipe par telephone, WhatsApp ou depuis le site web.'],
  ['Quels niveaux sont compatibles ?', "Jardin d'enfants, primaire, college et lycee."],
];

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [reporting, setReporting] = useState<PublicReporting | null>(null);
  const [reportingError, setReportingError] = useState(false);

  useEffect(() => {
    let active = true;
    fetchPublicReporting()
      .then((data) => {
        if (active) setReporting(data);
      })
      .catch(() => {
        if (active) setReportingError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const stats = useMemo(
    () => [
      { value: formatOptionalNumber(reporting?.marketing.schools), label: 'Etablissements' },
      { value: formatOptionalNumber(reporting?.marketing.students), label: 'Eleves geres' },
      { value: formatOptionalNumber(reporting?.dashboard.paymentsValidated), label: 'Paiements valides' },
      { value: formatOptionalNumber(reporting?.dashboard.pendingTasks), label: 'Actions a suivre' },
    ],
    [reporting],
  );

  return (
    <main className="min-h-screen bg-[#F7F9FE] text-[#111827]">
      <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((value) => !value)} onCloseMenu={() => setMenuOpen(false)} />

      <section id="accueil" className="border-b border-[#E5E7EB] bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:px-10 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#D7E2FA] bg-[#EEF3FF] px-4 py-2 text-sm font-semibold text-[#1B62F0]">
              Plateforme de gestion scolaire
            </div>
            <h1 className="mb-5 max-w-[680px] text-[38px] font-bold leading-[1.05] tracking-[-0.02em] text-[#0B1526] sm:text-[56px] lg:text-[68px]">
              Toute votre ecole dans une seule plateforme.
            </h1>
            <p className="mb-8 max-w-[620px] text-lg leading-8 text-[#4B5563]">
              MEDAARIS est une plateforme de gestion scolaire intelligente qui simplifie l'administration, ameliore la communication et accompagne les etablissements dans leur transformation numerique.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#contact" className="rounded-xl bg-[#1B62F0] px-6 py-3.5 text-base font-semibold text-white shadow-sm transition hover:bg-[#0A46A8]">
                Demander une demonstration
              </a>
              <a href="#contact" className="rounded-xl border border-[#1B62F0] bg-white px-6 py-3.5 text-base font-semibold text-[#1B62F0] transition hover:bg-[#EEF3FF]">
                Commencer maintenant
              </a>
            </div>
          </div>

          <DashboardPreview reporting={reporting} />
        </div>
      </section>

      <section className="bg-[#0B1526] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-2 gap-6 px-5 py-9 sm:px-8 lg:grid-cols-4 lg:px-10">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{stat.value}</div>
              <div className="mt-1 text-sm text-[#B7C0D6]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {reportingError && (
        <div className="mx-auto max-w-[1180px] px-5 pt-6 sm:px-8 lg:px-10">
          <div className="rounded-xl border border-[#F8C7C7] bg-white px-4 py-3 text-sm font-semibold text-[#9F1239]">
            Donnees statistiques indisponibles depuis le backend.
          </div>
        </div>
      )}

      <section id="apropos" className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <SectionIntro eyebrow="Qui sommes-nous ?" title="MEDAARIS" />
          <div className="space-y-5 text-lg leading-8 text-[#4B5563]">
            <p>
              MEDAARIS est une solution complete de gestion scolaire developpee pour repondre aux besoins des etablissements d'enseignement modernes.
            </p>
            <p>
              Notre plateforme centralise les operations essentielles d'un etablissement afin de faciliter le travail des equipes administratives, pedagogiques et financieres, tout en offrant une meilleure experience aux eleves et aux parents.
            </p>
            <p>
              Notre objectif est d'aider les ecoles a gagner du temps, ameliorer leur organisation et prendre de meilleures decisions grace a une plateforme moderne, securisee et accessible partout.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 px-5 py-14 sm:px-8 md:grid-cols-2 lg:px-10">
          <InfoPanel title="Notre mission" color="#1B62F0">
            Accompagner les etablissements scolaires dans leur transformation numerique en proposant une solution fiable, simple et performante.
          </InfoPanel>
          <InfoPanel title="Notre vision" color="#6D4BF6">
            Construire l'avenir de la gestion scolaire en Afrique grace a une plateforme innovante, evolutive et accessible a tous les etablissements.
          </InfoPanel>
        </div>
      </section>

      <section id="benefices" className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-[680px]">
          <SectionIntro eyebrow="Pourquoi MEDAARIS ?" title="Des resultats concrets pour votre etablissement" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-2xl border border-[#E5E7EB] bg-white p-6 shadow-sm">
              <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-[#F3F6FC]" style={{ color: benefit.color }}>
                <benefit.icon size={22} />
              </span>
              <h3 className="mb-2 text-xl font-bold text-[#0B1526]">{benefit.title}</h3>
              <p className="leading-7 text-[#4B5563]">{benefit.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="mb-10 max-w-[720px]">
            <SectionIntro eyebrow="Pour toute la communaute scolaire" title="Une plateforme claire pour chaque profil" />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
            {audiences.map(([title, desc], index) => (
              <article key={title} className="rounded-2xl border border-[#E5E7EB] bg-[#F7F9FE] p-5">
                <div className={index % 2 === 0 ? 'mb-4 h-2 w-10 rounded-full bg-[#1B62F0]' : 'mb-4 h-2 w-10 rounded-full bg-[#6D4BF6]'} />
                <h3 className="mb-2 font-bold text-[#0B1526]">{title}</h3>
                <p className="text-sm leading-6 text-[#4B5563]">{desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <SectionIntro eyebrow="Les avantages" title="Simple, moderne et accessible partout" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[#E5E7EB] bg-white px-4 py-3">
                <Check size={18} className="text-[#0E9F70]" />
                <span className="font-medium text-[#263044]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E5E7EB] bg-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-5 px-5 py-14 sm:px-8 md:grid-cols-3 lg:px-10">
          <InfoPanel title="Compatible avec tous les niveaux" color="#1B62F0">
            Jardin d'enfants, primaire, college et lycee.
          </InfoPanel>
          <InfoPanel title="Accessible partout" color="#6D4BF6">
            Travaillez depuis ordinateur, tablette ou smartphone. Vos informations restent synchronisees.
          </InfoPanel>
          <InfoPanel title="Securite" color="#0E9F70">
            Hebergement securise, sauvegardes regulieres, confidentialite des donnees et acces securise.
          </InfoPanel>
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
        <div className="mb-10 max-w-[680px]">
          <SectionIntro eyebrow="Questions frequentes" title="Les reponses essentielles" />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {faqs.map(([question, answer]) => (
            <article key={question} className="rounded-2xl border border-[#E5E7EB] bg-white p-6">
              <h3 className="mb-2 font-bold text-[#0B1526]">{question}</h3>
              <p className="leading-7 text-[#4B5563]">{answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#0B1526] text-white">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[1fr_.9fr] lg:px-10 lg:py-24">
          <div>
            <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#22CCEE]">Contact</p>
            <h2 className="mb-4 text-[32px] font-bold leading-tight tracking-[-0.02em] sm:text-[46px]">
              Notre equipe est a votre ecoute.
            </h2>
            <p className="max-w-[560px] text-lg leading-8 text-[#C4CDE1]">
              Notre equipe est a votre ecoute pour vous accompagner dans la digitalisation de votre etablissement.
            </p>
          </div>
          <div className="rounded-2xl bg-white p-6 text-[#0B1526] shadow-sm">
            <ContactRow icon={Phone} label="Telephone" value="22113543" href="tel:22113543" />
            <ContactRow icon={Smartphone} label="WhatsApp" value="+221 785984396" href="https://wa.me/221785984396" />
            <ContactRow icon={Globe2} label="Site web" value="www.medaaris.com" href="http://www.medaaris.com/" />
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="https://wa.me/221785984396" className="rounded-xl bg-[#1B62F0] px-5 py-3 font-semibold text-white transition hover:bg-[#0A46A8]">
                Ecrire sur WhatsApp
              </a>
              <a href="http://www.medaaris.com/" className="rounded-xl border border-[#D7E2FA] px-5 py-3 font-semibold text-[#1B62F0] transition hover:bg-[#EEF3FF]">
                Visiter le site
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Navbar({ menuOpen, onToggleMenu, onCloseMenu }: { menuOpen: boolean; onToggleMenu: () => void; onCloseMenu: () => void }) {
  return (
    <header className="sticky top-0 z-50 border-b border-[#E5E7EB] bg-white">
      <nav className="mx-auto flex max-w-[1180px] items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-10">
        <a href="#accueil" className="flex items-center gap-3" aria-label="MEDAARIS">
          <Image src="/medaaris-logo.jpeg" alt="MEDAARIS" width={150} height={36} className="h-9 w-auto rounded-lg" priority />
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-semibold text-[#4B5563] transition hover:bg-[#EEF3FF] hover:text-[#1B62F0]">
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="rounded-xl bg-[#1B62F0] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0A46A8]">
            Demander une demo
          </a>
        </div>
        <button type="button" onClick={onToggleMenu} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#E5E7EB] text-[#0B1526] lg:hidden" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>
      {menuOpen && (
        <div className="border-t border-[#E5E7EB] bg-white px-5 pb-5 lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={onCloseMenu} className="rounded-xl px-3 py-3 font-semibold text-[#263044]">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={onCloseMenu} className="mt-2 rounded-xl bg-[#1B62F0] px-3 py-3 text-center font-semibold text-white">
              Demander une demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function DashboardPreview({ reporting }: { reporting: PublicReporting | null }) {
  return (
    <div className="rounded-2xl border border-[#E5E7EB] bg-[#F7F9FE] p-5 shadow-sm">
      <div className="rounded-xl border border-[#E5E7EB] bg-white p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <div className="text-sm font-semibold text-[#6B7280]">Apercu MEDAARIS</div>
            <div className="text-xl font-bold text-[#0B1526]">Tableau de bord</div>
          </div>
          <span className="rounded-lg bg-[#EEF3FF] px-3 py-1 text-sm font-bold text-[#1B62F0]">Live</span>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <MiniStat value={formatOptionalNumber(reporting?.dashboard.students)} label="Eleves" color="#1B62F0" />
          <MiniStat value={formatOptionalNumber(reporting?.dashboard.attendanceRate, ' %')} label="Presence" color="#0E9F70" />
          <MiniStat value={formatOptionalNumber(reporting?.dashboard.pendingTasks)} label="A suivre" color="#6D4BF6" />
        </div>
        <div className="mt-5 space-y-3">
          <PreviewLine label="Paiements valides" value={formatOptionalNumber(reporting?.dashboard.paymentsValidated)} />
          <PreviewLine label="Bulletins prets" value={formatOptionalNumber(reporting?.dashboard.bulletinsReady)} />
          <PreviewLine label="Absences a traiter" value={formatOptionalNumber(reporting?.dashboard.pendingAbsences)} />
        </div>
      </div>
    </div>
  );
}

function MiniStat({ value, label, color }: { value: string; label: string; color: string }) {
  return (
    <div className="rounded-xl border border-[#E5E7EB] bg-white p-4">
      <div className="text-2xl font-bold" style={{ color }}>{value}</div>
      <div className="mt-1 text-xs font-semibold text-[#6B7280]">{label}</div>
    </div>
  );
}

function PreviewLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl bg-[#F7F9FE] px-4 py-3">
      <span className="text-sm font-medium text-[#4B5563]">{label}</span>
      <span className="font-bold text-[#0B1526]">{value}</span>
    </div>
  );
}

function SectionIntro({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[#1B62F0]">{eyebrow}</p>
      <h2 className="text-[30px] font-bold leading-[1.15] tracking-[-0.02em] text-[#0B1526] sm:text-[44px]">{title}</h2>
    </div>
  );
}

function InfoPanel({ title, color, children }: { title: string; color: string; children: React.ReactNode }) {
  return (
    <article className="rounded-2xl border border-[#E5E7EB] bg-[#F7F9FE] p-6">
      <div className="mb-4 h-2 w-12 rounded-full" style={{ backgroundColor: color }} />
      <h3 className="mb-3 text-xl font-bold text-[#0B1526]">{title}</h3>
      <p className="leading-7 text-[#4B5563]">{children}</p>
    </article>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Phone; label: string; value: string; href: string }) {
  return (
    <a href={href} className="flex items-center gap-4 border-b border-[#E5E7EB] py-4 last:border-b-0">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF3FF] text-[#1B62F0]">
        <Icon size={20} />
      </span>
      <span>
        <span className="block text-sm font-semibold text-[#6B7280]">{label}</span>
        <span className="block font-bold text-[#0B1526]">{value}</span>
      </span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-6 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <Image src="/medaaris-logo.jpeg" alt="MEDAARIS" width={145} height={34} className="mb-3 h-8 w-auto rounded-lg" />
          <p className="max-w-[360px] text-sm leading-6 text-[#6B7280]">MEDAARIS accompagne les etablissements dans une gestion scolaire plus simple, moderne et securisee.</p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-[#4B5563]">
          <a href="#apropos" className="hover:text-[#1B62F0]">A propos</a>
          <a href="#benefices" className="hover:text-[#1B62F0]">Fonctionnalites</a>
          <a href="#faq" className="hover:text-[#1B62F0]">FAQ</a>
          <a href="#contact" className="hover:text-[#1B62F0]">Contact</a>
        </div>
      </div>
      <div className="border-t border-[#E5E7EB] py-4 text-center text-sm text-[#6B7280]">© 2026 MEDAARIS. Tous droits reserves.</div>
    </footer>
  );
}
