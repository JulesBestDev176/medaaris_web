'use client';

import Image from 'next/image';
import {
  BarChart3,
  BookOpenCheck,
  CalendarDays,
  Check,
  CheckCircle2,
  CreditCard,
  FileCheck2,
  Globe2,
  Mail,
  Menu,
  MessageCircle,
  Play,
  Rocket,
  Settings,
  ShieldCheck,
  UsersRound,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { fetchPublicReporting, formatOptionalNumber, type PublicReporting } from '@/lib/reporting';

const navItems = [
  { href: '#top', label: 'Accueil' },
  { href: '#fonctionnalites', label: 'Fonctionnalites' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#contact', label: 'Contact' },
];

const features = [
  {
    title: 'Inscriptions & dossiers',
    desc: "Centralisez l'etat civil, les documents et l'affectation aux classes. Un dossier eleve complet, en un clic.",
    icon: UsersRound,
    bg: '#EEF3FF',
    color: '#1B62F0',
  },
  {
    title: 'Notes & bulletins',
    desc: 'Saisie des evaluations, calcul automatique des moyennes et generation de bulletins personnalises.',
    icon: FileCheck2,
    bg: '#F0ECFF',
    color: '#6D4BF6',
  },
  {
    title: 'Presences & emplois du temps',
    desc: 'Appel numerique, suivi des absences et emplois du temps synchronises pour toutes les classes.',
    icon: CalendarDays,
    bg: '#E9FBF4',
    color: '#0E9F70',
  },
  {
    title: 'Communication familles',
    desc: "Messages, circulaires et notifications vers les parents. L'information passe, sans papier perdu.",
    icon: MessageCircle,
    bg: '#EEF3FF',
    color: '#1B62F0',
  },
  {
    title: 'Facturation & paiements',
    desc: "Frais de scolarite, echeanciers et suivi des reglements. Une vision claire des finances de l'ecole.",
    icon: CreditCard,
    bg: '#F0ECFF',
    color: '#6D4BF6',
  },
  {
    title: 'Securite & confidentialite',
    desc: "Droits d'acces par role, donnees chiffrees et journalisation. Vos informations restent protegees.",
    icon: ShieldCheck,
    bg: '#E9FBF4',
    color: '#0E9F70',
  },
];

const steps = [
  {
    n: '1',
    title: 'Parametrage',
    desc: 'Nous configurons vos classes, niveaux et baremes avec vous. Import de vos donnees existantes inclus.',
    icon: Settings,
    bg: '#EEF3FF',
    color: '#1B62F0',
  },
  {
    n: '2',
    title: 'Formation',
    desc: 'Vos equipes sont formees aux modules utiles a leur role, en une session courte et concrete.',
    icon: BookOpenCheck,
    bg: '#F0ECFF',
    color: '#6D4BF6',
  },
  {
    n: '3',
    title: 'Lancement',
    desc: "Vous demarrez l'annee avec un accompagnement dedie et un support reactif a vos cotes.",
    icon: Rocket,
    bg: '#E9FBF4',
    color: '#0E9F70',
  },
];

const plans = [
  {
    name: 'Essentiel',
    price: '2,90 EUR',
    unit: '/ eleve / an',
    note: 'Pour les petites structures.',
    cta: 'Commencer',
    featured: false,
    features: ['Inscriptions & dossiers', 'Presences & emplois du temps', 'Communication familles', 'Support par e-mail'],
  },
  {
    name: 'Etablissement',
    price: '4,90 EUR',
    unit: '/ eleve / an',
    note: 'Le choix des ecoles.',
    cta: 'Choisir cette formule',
    featured: true,
    features: ['Tout Essentiel, plus :', 'Notes & bulletins', 'Facturation & paiements', 'Support prioritaire', 'Rapports & statistiques'],
  },
  {
    name: 'Reseau',
    price: 'Sur mesure',
    unit: '',
    note: 'Multi-etablissements.',
    cta: 'Nous contacter',
    featured: false,
    features: ['Tout Etablissement, plus :', 'Console multi-ecoles', 'Integrations dediees', 'Accompagnement sur site'],
  },
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
      { value: formatOptionalNumber(reporting?.marketing.schools), label: 'Etablissements accompagnes' },
      { value: formatOptionalNumber(reporting?.marketing.students), label: 'Eleves geres chaque jour' },
      { value: formatOptionalNumber(reporting?.dashboard.paymentsValidated), label: 'Paiements valides' },
      { value: formatOptionalNumber(reporting?.dashboard.pendingTasks), label: 'Taches a traiter' },
    ],
    [reporting],
  );

  return (
    <main className="min-h-screen bg-[#F4F7FE] text-[#0B1526]">
      <Navbar menuOpen={menuOpen} onToggleMenu={() => setMenuOpen((value) => !value)} onCloseMenu={() => setMenuOpen(false)} />

      <section id="top" className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-[120px] -top-[180px] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(27,98,240,.16),transparent_66%)]" />
        <div className="pointer-events-none absolute -left-[160px] top-[60px] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(109,75,246,.15),transparent_66%)]" />

        <div className="relative mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-9 px-5 pb-12 pt-10 sm:px-8 md:grid-cols-[minmax(0,1fr)_minmax(330px,1fr)] lg:gap-16 lg:px-10 lg:pb-[84px] lg:pt-[76px]">
          <div>
            <div className="animate-rise mb-[26px] inline-flex items-center gap-2 rounded-full border border-[#E1E8F7] bg-white px-3.5 py-2 text-[13px] font-semibold text-[#28324A] shadow-[0_3px_12px_rgba(11,21,38,.05)]">
              <span className="h-[7px] w-[7px] rounded-full bg-[#10B981] shadow-[0_0_0_6px_rgba(16,185,129,.12)]" />
              Plateforme de gestion scolaire
            </div>

            <h1 className="animate-rise mb-[22px] text-[38px] font-bold leading-[1.02] tracking-[-0.03em] sm:text-[54px] lg:text-[66px]">
              Toute votre ecole,
              <br />
              <span className="relative inline-block bg-[linear-gradient(120deg,#1B62F0,#6D4BF6)] bg-clip-text text-transparent">
                reunie ici
                <svg viewBox="0 0 300 22" preserveAspectRatio="none" className="absolute -bottom-[9px] left-0 h-4 w-full fill-none">
                  <path d="M4 14 C 70 4, 150 4, 296 12" stroke="#22CCEE" strokeWidth="6" strokeLinecap="round" strokeDasharray="280" style={{ animation: 'draw 1.1s .5s ease forwards', strokeDashoffset: 280 }} />
                </svg>
              </span>
              .
            </h1>

            <p className="animate-rise mb-[34px] max-w-[500px] text-base leading-[1.6] text-[#56617A] sm:text-xl">
              Inscriptions, notes, presences, communication avec les familles et facturation. MEDAARIS rassemble la gestion de votre etablissement sur une plateforme claire, fiable et securisee.
            </p>

            <div className="animate-rise mb-8 flex flex-wrap gap-[13px]">
              <a href="#contact" className="rounded-[14px] bg-[linear-gradient(135deg,#1B62F0,#6D4BF6)] px-7 py-4 text-[17px] font-semibold text-white shadow-[0_12px_26px_rgba(27,98,240,.34)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(27,98,240,.46)]">
                Demander une demo
              </a>
              <a href="#fonctionnalites" className="inline-flex items-center gap-2.5 rounded-[14px] border border-[#E1E8F7] bg-white px-6 py-4 text-[17px] font-semibold text-[#0B1526] transition hover:-translate-y-0.5 hover:border-[#1B62F0] hover:text-[#1B62F0]">
                <span className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-full bg-[#EEF2FE] text-[#1B62F0]">
                  <Play size={12} fill="currentColor" />
                </span>
                Voir les fonctionnalites
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-[22px] text-sm font-medium text-[#6E7A93]">
              <TrustItem>Sans engagement</TrustItem>
              <TrustItem>Hebergement securise</TrustItem>
            </div>
          </div>

          <DashboardMockup reporting={reporting} />
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-10 sm:px-8 lg:px-10">
        {reportingError && (
          <div className="mb-6 rounded-2xl border border-[#F8C7C7] bg-white px-4 py-3 text-center text-sm font-semibold text-[#9F1239] shadow-[0_10px_28px_rgba(11,21,38,.05)]">
            Donnees statistiques indisponibles depuis le backend.
          </div>
        )}
      </section>

      <StatsSection stats={stats} />

      <section id="fonctionnalites" className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-[88px]">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6 lg:mb-12">
          <div className="max-w-[560px]">
            <Eyebrow number="01">Fonctionnalites</Eyebrow>
            <h2 className="text-[30px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">
              Ce qu'il faut pour piloter l'ecole, sans le superflu
            </h2>
          </div>
          <a href="#contact" className="mb-1.5 inline-flex items-center gap-2 text-[15px] font-semibold text-[#1B62F0] transition hover:gap-3">
            Tout explorer <span aria-hidden>→</span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[20px] border border-[#E6EBF5] bg-white p-7 transition hover:-translate-y-1 hover:border-[#C9D9FF] hover:shadow-[0_22px_48px_rgba(11,21,38,.1)]">
              <span className="mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[15px]" style={{ backgroundColor: feature.bg, color: feature.color }}>
                <feature.icon size={24} />
              </span>
              <h3 className="mb-2.5 text-xl font-bold tracking-[-0.01em]">{feature.title}</h3>
              <p className="text-[15px] leading-[1.6] text-[#56617A]">{feature.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-[88px]">
        <div className="mx-auto mb-10 max-w-[600px] text-center lg:mb-14">
          <Eyebrow number="02" centered>Prise en main</Eyebrow>
          <h2 className="mb-3.5 text-[30px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">Operationnel en trois etapes</h2>
          <p className="text-[17px] leading-[1.6] text-[#56617A]">Notre equipe vous accompagne du parametrage a la premiere rentree.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {steps.map((step) => (
            <article key={step.n} className="relative overflow-hidden rounded-[20px] border border-[#E6EBF5] bg-white px-6 py-7">
              <div className="heading-font absolute right-6 top-5 text-5xl font-extrabold leading-none text-[#EEF2FB]">{step.n}</div>
              <div className="relative mb-5 flex h-[46px] w-[46px] items-center justify-center rounded-[13px]" style={{ backgroundColor: step.bg, color: step.color }}>
                <step.icon size={22} />
              </div>
              <h3 className="relative mb-2.5 text-xl font-bold tracking-[-0.01em]">{step.title}</h3>
              <p className="relative text-[15px] leading-[1.6] text-[#56617A]">{step.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="tarifs" className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8 lg:px-10 lg:py-[88px]">
        <div className="mx-auto mb-10 max-w-[620px] text-center">
          <Eyebrow number="03" centered>Tarifs</Eyebrow>
          <h2 className="mb-3.5 text-[30px] font-bold leading-[1.1] tracking-[-0.025em] sm:text-[44px]">Un tarif clair, par eleve</h2>
          <p className="text-[17px] leading-[1.6] text-[#56617A]">Sans frais caches. Vous ne payez que pour vos effectifs reels.</p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-[18px] lg:grid-cols-3">
          {plans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-[88px]">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(135deg,#1B62F0,#5A34E6)] px-7 py-10 text-white sm:px-12 lg:px-[72px] lg:py-[72px]">
          <div className="absolute -right-8 -top-16 h-80 w-80 rounded-full bg-[#22CCEE]/20" />
          <div className="relative max-w-[820px]">
            <div className="heading-font mb-2 text-[80px] font-bold leading-[.6] text-white/25">“</div>
            <blockquote className="mb-7 text-[21px] font-semibold leading-[1.35] tracking-[-0.015em] sm:text-[32px]">
              Depuis MEDAARIS, l'equipe administrative a divise par deux le temps passe sur les inscriptions et les bulletins. Les familles apprecient enfin d'avoir une information claire.
            </blockquote>
            <div className="flex items-center gap-3.5">
              <span className="heading-font flex h-[50px] w-[50px] items-center justify-center rounded-[14px] bg-white/20 text-[17px] font-bold">SL</span>
              <div>
                <div className="font-bold">Sophia L.</div>
                <div className="text-sm text-white/80">Directrice - Groupe scolaire</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-[1180px] px-5 pb-14 sm:px-8 lg:px-10 lg:pb-24">
        <div className="relative overflow-hidden rounded-[28px] bg-[#0B1120] px-6 py-11 text-center sm:px-12 lg:px-16 lg:py-[76px]">
          <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(27,98,240,.35),rgba(109,75,246,.28),rgba(34,204,238,.22),rgba(27,98,240,.35))] opacity-60" />
          <h2 className="relative mx-auto mb-4 max-w-[640px] text-[28px] font-bold leading-[1.14] tracking-[-0.025em] text-white sm:text-[44px]">
            Pret a simplifier la gestion de votre ecole ?
          </h2>
          <p className="relative mx-auto mb-7 max-w-[520px] text-base leading-[1.6] text-[#B7C0D6] sm:text-[19px]">
            Reservez une demonstration personnalisee. Nous vous montrons MEDAARIS avec vos propres cas d'usage.
          </p>
          <div className="relative flex flex-wrap justify-center gap-[13px]">
            <a href="mailto:contact@medaaris.app" className="rounded-[14px] bg-white px-7 py-4 text-[17px] font-semibold text-[#1B62F0] shadow-[0_12px_26px_rgba(0,0,0,.24)] transition hover:-translate-y-0.5">
              Demander une demo
            </a>
            <a href="mailto:contact@medaaris.app" className="rounded-[14px] border border-white/30 bg-white/10 px-7 py-4 text-[17px] font-semibold text-white transition hover:bg-white/20">
              Nous contacter
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Navbar({ menuOpen, onToggleMenu, onCloseMenu }: { menuOpen: boolean; onToggleMenu: () => void; onCloseMenu: () => void }) {
  return (
    <div className="sticky top-0 z-[60] px-3.5 pt-4 sm:px-9">
      <header className="mx-auto max-w-[1180px] rounded-[18px] border border-[rgba(11,21,38,.07)] bg-white/70 shadow-[0_8px_28px_rgba(11,21,38,.07)] backdrop-blur-[18px]">
        <nav className="flex items-center justify-between gap-[18px] py-[11px] pl-[18px] pr-3">
          <a href="#top" className="flex items-center gap-2.5" aria-label="MEDAARIS">
            <Image src="/medaaris-logo.jpeg" alt="MEDAARIS" width={140} height={32} className="h-8 w-auto rounded-lg" priority />
          </a>
          <div className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="rounded-[11px] px-[15px] py-[9px] text-[15px] font-medium text-[#45506A] transition hover:bg-[#EEF2FE] hover:text-[#1B62F0]">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="inline-flex items-center gap-1 rounded-[11px] px-[11px] py-2 text-[13px] font-semibold text-[#56617A]">FR</span>
            <a href="#top" className="rounded-[11px] px-[13px] py-[9px] text-[15px] font-semibold text-[#0B1526] transition hover:bg-[#EEF2FE] hover:text-[#1B62F0]">
              Connexion
            </a>
            <a href="#contact" className="rounded-xl bg-[linear-gradient(135deg,#1B62F0,#6D4BF6)] px-5 py-[11px] text-[15px] font-semibold text-white shadow-[0_8px_20px_rgba(27,98,240,.32)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(27,98,240,.44)]">
              Demander une demo
            </a>
          </div>
          <button type="button" onClick={onToggleMenu} className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(11,21,38,.1)] bg-white text-[#0B1526] lg:hidden" aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
        {menuOpen && (
          <div className="animate-nav-slide-down border-t border-[rgba(11,21,38,.06)] px-3 pb-3.5 pt-1.5 lg:hidden">
            <div className="flex flex-col gap-0.5">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={onCloseMenu} className="rounded-xl px-3.5 py-3 text-base font-semibold text-[#28324A]">
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={onCloseMenu} className="mt-2 rounded-[13px] bg-[linear-gradient(135deg,#1B62F0,#6D4BF6)] px-3.5 py-3.5 text-center text-base font-semibold text-white">
                Demander une demo
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}

function TrustItem({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <Check size={17} color="#10B981" strokeWidth={2.8} />
      {children}
    </span>
  );
}

function DashboardMockup({ reporting }: { reporting: PublicReporting | null }) {
  const bars = useMemo(() => {
    const values = [
      reporting?.dashboard.pendingAbsences,
      reporting?.dashboard.pendingPayments,
      reporting?.dashboard.pendingConvocations,
      reporting?.dashboard.pendingReclamations,
      reporting?.dashboard.bulletinsReady,
    ].map((value) => value ?? 0);
    const max = Math.max(...values, 1);
    return values.map((value) => Math.max(8, Math.round((value / max) * 100)));
  }, [reporting]);

  return (
    <div className="animate-rise relative">
      <div className="absolute inset-[16px_-12px_-16px_16px] rounded-[26px] bg-[linear-gradient(135deg,#1B62F0,#6D4BF6)] opacity-15" />
      <div className="animate-float-a relative overflow-hidden rounded-3xl border border-[#E6EBF5] bg-white shadow-[0_40px_90px_rgba(11,21,38,.16)]">
        <div className="flex items-center gap-[7px] border-b border-[#EEF1F8] px-[18px] py-[15px]">
          <span className="h-[11px] w-[11px] rounded-full bg-[#C9D3E8]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#E2E8F3]" />
          <span className="h-[11px] w-[11px] rounded-full bg-[#E2E8F3]" />
          <span className="ml-2.5 text-xs font-medium text-[#98A2B8]">medaaris.app · tableau de bord</span>
        </div>
        <div className="p-[22px]">
          <div className="mb-[18px] flex items-center justify-between">
            <div>
              <div className="heading-font text-lg font-bold tracking-[-0.01em]">Bonjour, Direction</div>
              <div className="text-xs text-[#98A2B8]">Donnees du backend</div>
            </div>
            <div className="flex h-[38px] w-[38px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,#1B62F0,#6D4BF6)] text-sm font-bold text-white">MD</div>
          </div>

          <div className="mb-4 grid grid-cols-3 gap-2.5">
            <MiniStat value={formatOptionalNumber(reporting?.dashboard.students)} label="Eleves" color="#1B62F0" bg="#EEF3FF" border="#DCE7FF" />
            <MiniStat value={formatOptionalNumber(reporting?.dashboard.attendanceRate, ' %')} label="Presence" color="#0E9F70" bg="#E9FBF4" border="#C7F0E1" />
            <MiniStat value={formatOptionalNumber(reporting?.dashboard.pendingTasks)} label="A traiter" color="#6D4BF6" bg="#F0ECFF" border="#DED4FB" />
          </div>

          <div className="mb-3 rounded-[14px] border border-[#EAEFF9] bg-[#F7F9FE] px-4 py-[15px]">
            <div className="mb-3.5 flex items-center justify-between">
              <div className="text-xs font-semibold text-[#56617A]">Activite backend</div>
              <div className="text-[11px] font-semibold text-[#0E9F70]">live</div>
            </div>
            <div className="flex h-[66px] items-end gap-2.5">
              {bars.map((height, index) => (
                <div key={`bar-${index}`} className={index === 2 ? 'flex-1 rounded-t-md bg-[linear-gradient(#1B62F0,#6D4BF6)]' : 'flex-1 rounded-t-md bg-[#DCE7FF]'} style={{ height: `${height}%` }} />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-[11px] rounded-[13px] border border-[#EEF1F8] bg-white px-[13px] py-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-[#EEF3FF] text-[#1B62F0]">
              <FileCheck2 size={16} />
            </span>
            <div className="flex-1">
              <div className="text-xs font-semibold">Bulletins valides</div>
              <div className="text-[11px] text-[#98A2B8]">{formatOptionalNumber(reporting?.dashboard.bulletinsReady)} disponibles</div>
            </div>
            <span className="rounded-full bg-[#E9FBF4] px-2.5 py-1 text-[11px] font-semibold text-[#0E9F70]">Backend</span>
          </div>
        </div>
      </div>

      <div className="animate-float-b absolute -bottom-6 -left-2 flex items-center gap-3 rounded-2xl border border-[#E6EBF5] bg-white/90 px-4 py-[13px] shadow-[0_22px_46px_rgba(11,21,38,.16)] backdrop-blur sm:-left-6">
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-[#E9FBF4] text-[#0E9F70]">
          <CheckCircle2 size={20} />
        </span>
        <div>
          <div className="heading-font text-sm font-bold">Paiements valides</div>
          <div className="text-xs text-[#98A2B8]">{formatOptionalNumber(reporting?.dashboard.paymentsValidated)} transactions</div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ value, label, color, bg, border }: { value: string; label: string; color: string; bg: string; border: string }) {
  return (
    <div className="rounded-[14px] border p-[13px]" style={{ backgroundColor: bg, borderColor: border }}>
      <div className="heading-font text-[22px] font-bold" style={{ color }}>{value}</div>
      <div className="text-[11px] font-medium text-[#56617A]">{label}</div>
    </div>
  );
}

function StatsSection({ stats }: { stats: Array<{ value: string; label: string }> }) {
  return (
    <section className="relative overflow-hidden bg-[#0B1120] text-white">
      <div className="absolute -top-[100px] right-[12%] h-[360px] w-[360px] rounded-full bg-[radial-gradient(circle,rgba(27,98,240,.42),transparent_70%)]" />
      <div className="absolute -bottom-[120px] left-[6%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(109,75,246,.3),transparent_70%)]" />
      <div className="relative mx-auto grid max-w-[1180px] grid-cols-2 gap-8 px-5 py-11 sm:px-8 lg:grid-cols-4 lg:px-10 lg:py-[68px]">
        {stats.map((stat, index) => (
          <div key={stat.label}>
            <div className={index === 3 ? 'heading-font bg-[linear-gradient(120deg,#C6B4FF,#fff)] bg-clip-text text-[34px] font-bold tracking-[-0.02em] text-transparent lg:text-[52px]' : 'heading-font bg-[linear-gradient(120deg,#7FB0FF,#fff)] bg-clip-text text-[34px] font-bold tracking-[-0.02em] text-transparent lg:text-[52px]'}>
              {stat.value}
            </div>
            <div className="mt-1.5 text-[15px] font-medium text-[#9BA6BE]">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Eyebrow({ number, centered, children }: { number: string; centered?: boolean; children: React.ReactNode }) {
  return (
    <div className={centered ? 'mb-3.5 inline-flex items-center justify-center gap-2 text-[13px] font-semibold tracking-[.04em] text-[#6D4BF6]' : 'mb-3.5 inline-flex items-center gap-2 text-[13px] font-semibold tracking-[.04em] text-[#6D4BF6]'}>
      <span className="heading-font font-bold">{number}</span>
      <span className="h-[1.5px] w-[22px] bg-[#C9BEF9]" />
      {children}
    </div>
  );
}

function PlanCard({ plan }: { plan: (typeof plans)[number] }) {
  const featured = plan.featured;
  return (
    <article className={featured ? 'relative flex flex-col rounded-[22px] border border-transparent bg-[#0B1120] px-7 py-8 text-white shadow-[0_24px_54px_rgba(11,17,32,.34)]' : 'relative flex flex-col rounded-[22px] border border-[#E6EBF5] bg-white px-7 py-8 text-[#0B1526] shadow-[0_1px_3px_rgba(11,21,38,.05)]'}>
      {featured && (
        <span className="absolute left-7 top-[-13px] rounded-full bg-[linear-gradient(135deg,#22CCEE,#1B62F0)] px-[15px] py-1.5 text-xs font-bold text-white shadow-[0_6px_16px_rgba(27,98,240,.4)]">
          Le plus choisi
        </span>
      )}
      <div className="mb-4 text-[15px] font-semibold opacity-80">{plan.name}</div>
      <div className="mb-1.5 flex items-baseline gap-1.5">
        <span className="heading-font text-[44px] font-bold tracking-[-0.02em]">{plan.price}</span>
        <span className="text-sm opacity-70">{plan.unit}</span>
      </div>
      <div className="mb-6 min-h-5 text-sm opacity-75">{plan.note}</div>
      <a href="#contact" className={featured ? 'mb-6 block w-full rounded-[13px] bg-[linear-gradient(135deg,#1B62F0,#6D4BF6)] px-3 py-3.5 text-center text-[15px] font-semibold text-white transition hover:-translate-y-0.5' : 'mb-6 block w-full rounded-[13px] bg-[#EEF2FE] px-3 py-3.5 text-center text-[15px] font-semibold text-[#1B62F0] transition hover:-translate-y-0.5'}>
        {plan.cta}
      </a>
      <div className="flex flex-col gap-[13px]">
        {plan.features.map((feature) => (
          <div key={feature} className="flex items-start gap-[11px] text-sm leading-[1.4]">
            <Check className="mt-0.5 flex-none" size={16} color={featured ? '#5EEAD4' : '#1B62F0'} strokeWidth={2.6} />
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </article>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1120] text-white">
      <div className="absolute -top-[120px] left-[8%] h-[340px] w-[340px] rounded-full bg-[radial-gradient(circle,rgba(27,98,240,.4),transparent_70%)]" />
      <div className="absolute -bottom-[140px] right-[6%] h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(109,75,246,.32),transparent_70%)]" />
      <div className="relative mx-auto max-w-[1180px] px-5 pb-8 pt-12 sm:px-8 lg:px-10 lg:pt-[72px]">
        <div className="mb-11 grid grid-cols-1 gap-9 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Image src="/medaaris-logo.jpeg" alt="MEDAARIS" width={148} height={38} className="mb-[18px] h-[38px] w-auto rounded-[9px]" />
            <p className="mb-5 max-w-[270px] text-sm leading-[1.65] text-[#9BA6BE]">La plateforme qui simplifie la gestion des etablissements scolaires - de l'inscription au bulletin.</p>
            <div className="flex gap-2">
              {[Mail, Globe2, BarChart3].map((Icon, index) => (
                <a key={index} href="#contact" className="flex h-[38px] w-[38px] items-center justify-center rounded-[11px] bg-white/10 text-[#C4CDE1] transition hover:-translate-y-0.5 hover:bg-[#1B62F0] hover:text-white">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          <FooterColumn title="Produit" items={['Fonctionnalites', 'Tarifs', 'Demonstration']} />
          <FooterColumn title="Ressources" items={['Blog', 'FAQ', 'Contact']} />
          <FooterColumn title="Legal" items={['Mentions legales', 'Confidentialite', 'CGU']} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3.5 border-t border-white/10 pt-6">
          <span className="text-[13px] text-[#6E7A93]">© 2026 MEDAARIS. Tous droits reserves.</span>
          <div className="flex gap-1.5">
            <span className="rounded-[9px] bg-white px-3 py-1.5 text-xs font-semibold text-[#0B1120]">FR</span>
            <span className="rounded-[9px] px-3 py-1.5 text-xs font-semibold text-[#9BA6BE]">EN</span>
            <span className="rounded-[9px] px-3 py-1.5 text-xs font-semibold text-[#9BA6BE]">ع</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <div className="mb-4 text-[13px] font-bold text-white">{title}</div>
      <div className="flex flex-col gap-3 text-sm text-[#9BA6BE]">
        {items.map((item) => (
          <a key={item} href="#top" className="transition hover:text-white">{item}</a>
        ))}
      </div>
    </div>
  );
}
