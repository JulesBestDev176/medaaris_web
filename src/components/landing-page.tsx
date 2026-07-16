'use client';

import Image from 'next/image';
import {
  Baby,
  BookOpenCheck,
  Check,
  ChevronDown,
  Clock,
  FileCheck2,
  Globe2,
  GraduationCap,
  LayoutDashboard,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Monitor,
  Phone,
  RefreshCw,
  Server,
  Settings,
  ShieldCheck,
  School,
  Smartphone,
  Tablet,
  Target,
  TrendingUp,
  Users,
  UsersRound,
  X,
  Zap,
} from 'lucide-react';
import { useEffect, useState } from 'react';

/* ─── Data ──────────────────────────────────────────────────────────── */

const navItems = [
  { href: '#accueil',    label: 'Accueil' },
  { href: '#apropos',    label: 'À propos' },
  { href: '#benefices',  label: 'Avantages' },
  { href: '#communaute', label: 'Communauté' },
  { href: '#faq',        label: 'FAQ' },
  { href: '#contact',    label: 'Contact' },
];

const benefits = [
  {
    icon: LayoutDashboard,
    title: 'Une gestion simplifiée',
    desc: "Centralisez les principales activités de votre établissement au sein d'une seule plateforme et gagnez en efficacité au quotidien.",
  },
  {
    icon: Users,
    title: 'Une meilleure organisation',
    desc: "Accédez rapidement aux informations importantes et améliorez la coordination entre la direction, l'administration, les enseignants, les élèves et les parents.",
  },
  {
    icon: Clock,
    title: 'Un gain de temps considérable',
    desc: "Réduisez les tâches administratives répétitives afin que votre équipe puisse consacrer davantage de temps à l'accompagnement des élèves et au développement de votre établissement.",
  },
  {
    icon: TrendingUp,
    title: 'Des décisions mieux éclairées',
    desc: "Suivez l'évolution de votre établissement grâce à des tableaux de bord modernes et des indicateurs clairs qui facilitent la prise de décision.",
  },
  {
    icon: MessageCircle,
    title: 'Une communication plus fluide',
    desc: "Renforcez les échanges entre tous les acteurs de la communauté éducative grâce à une plateforme conçue pour favoriser la collaboration.",
  },
  {
    icon: ShieldCheck,
    title: 'Une sécurité à la hauteur de vos exigences',
    desc: "Nous accordons une importance particulière à la confidentialité et à la protection de vos données afin de garantir un environnement numérique fiable et sécurisé.",
  },
];

const audiences = [
  {
    title: 'Direction',
    desc: "Pilotez votre établissement avec une vision globale et prenez vos décisions en toute confiance grâce à une plateforme conçue pour vous accompagner au quotidien.",
    icon: Target,
  },
  {
    title: 'Administration',
    desc: "Optimisez l'organisation administrative de votre établissement et simplifiez les opérations quotidiennes.",
    icon: Settings,
  },
  {
    title: 'Enseignants',
    desc: "Disposez d'un environnement numérique moderne facilitant le suivi pédagogique et les échanges avec l'établissement.",
    icon: BookOpenCheck,
  },
  {
    title: 'Parents',
    desc: "Restez informés de la vie scolaire de vos enfants et suivez leur parcours en toute simplicité.",
    icon: UsersRound,
  },
  {
    title: 'Élèves',
    desc: "Accédez facilement à vos informations scolaires depuis un espace personnel sécurisé.",
    icon: GraduationCap,
  },
];

const advantages = [
  'Gain de temps dans les tâches quotidiennes',
  'Amélioration de la productivité des équipes',
  'Organisation simplifiée',
  'Communication renforcée',
  'Interface moderne et intuitive',
  'Accessible sur ordinateur, tablette et smartphone',
  'Données protégées et sécurisées',
  'Sauvegardes automatiques',
  'Disponibilité 24h/24 et 7j/7',
  'Accompagnement personnalisé',
  'Plateforme évolutive',
  'Expérience utilisateur fluide et professionnelle',
];

const whyChoose = [
  'Moderniser leur établissement',
  'Réduire les tâches administratives',
  'Améliorer la collaboration entre les équipes',
  'Centraliser leurs informations',
  'Faciliter le suivi scolaire',
  'Renforcer la communication avec les familles',
  'Optimiser leur organisation quotidienne',
  'Offrir une meilleure expérience aux élèves et aux parents',
];

const levels = [
  { label: "Jardin d'enfants", icon: Baby, desc: 'Premiers pas scolaires' },
  { label: 'Primaire', icon: BookOpenCheck, desc: 'Bases et apprentissages' },
  { label: 'Collège', icon: School, desc: 'Suivi et organisation' },
  { label: 'Lycée', icon: GraduationCap, desc: 'Orientation et examens' },
];

const devices = [
  { label: 'Ordinateur', icon: Monitor, desc: 'Pilotage complet depuis les bureaux.' },
  { label: 'Tablette',   icon: Tablet, desc: 'Consultation fluide en salle ou en réunion.' },
  { label: 'Smartphone', icon: Smartphone, desc: 'Informations utiles toujours sous la main.' },
];

const securityPoints = [
  { icon: Server,     title: 'Hébergement sécurisé',   desc: "Vos données sont stockées sur des serveurs protégés et fiables." },
  { icon: RefreshCw,  title: 'Sauvegardes régulières', desc: "Vos informations sont sauvegardées automatiquement et régulièrement." },
  { icon: Lock,       title: 'Confidentialité',        desc: "Accès strictement contrôlé par rôle pour chaque membre de l'équipe." },
  { icon: ShieldCheck, title: 'Accès sécurisé',        desc: "Authentification robuste pour tous les utilisateurs de la plateforme." },
  { icon: Zap,        title: 'Haute disponibilité',    desc: "La plateforme reste accessible en permanence, 24h/24 et 7j/7." },
];

const testimonials = [
  {
    quote: "MEDAARIS nous a permis de gagner un temps précieux dans notre organisation quotidienne.",
    author: "Directeur d'établissement",
    role: "Direction",
    initials: 'DE',
  },
  {
    quote: "Une plateforme simple, moderne et agréable à utiliser par toute notre équipe.",
    author: 'Responsable administratif',
    role: "Administration",
    initials: 'RA',
  },
  {
    quote: "Nos échanges avec les parents sont devenus beaucoup plus fluides depuis l'utilisation de MEDAARIS.",
    author: 'Enseignant',
    role: "Équipe pédagogique",
    initials: 'EN',
  },
];

const faqs: [string, string][] = [
  ['MEDAARIS convient-elle aux petites écoles ?', "Oui. Notre plateforme s'adapte aussi bien aux petits établissements qu'aux structures de grande taille."],
  ["Faut-il installer un logiciel ?", "Non. MEDAARIS est accessible directement via votre navigateur Internet, sans installation complexe."],
  ['Peut-on utiliser MEDAARIS sur téléphone ?', "Oui. La plateforme est compatible avec les smartphones, les tablettes et les ordinateurs."],
  ['Les données sont-elles sécurisées ?', "Oui. Nous mettons en œuvre des mesures de sécurité adaptées afin de protéger les informations de votre établissement."],
  ['MEDAARIS est-elle adaptée à tous les niveaux scolaires ?', "Oui. Elle accompagne les jardins d'enfants, les écoles primaires, les collèges et les lycées."],
  ["Une formation est-elle proposée ?", "Oui. Notre équipe accompagne votre établissement lors de la prise en main de la plateforme."],
  ['Le support technique est-il disponible ?', "Oui. Notre équipe reste disponible pour répondre à vos questions et vous accompagner."],
  ["Puis-je demander une démonstration avant de m'abonner ?", "Oui. Nous proposons une démonstration gratuite afin de vous présenter MEDAARIS et répondre à toutes vos questions."],
  ["Combien de temps faut-il pour commencer ?", "Après la création de votre espace, notre équipe vous accompagne pour une mise en service rapide."],
  ['Comment contacter MEDAARIS ?', "Par téléphone, WhatsApp, e-mail ou via le formulaire de contact disponible sur notre site."],
];


/* ─── Main ──────────────────────────────────────────────────────────── */

export function LandingPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('accueil');

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.href.replace('#', ''));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: '-24% 0px -62% 0px', threshold: [0.12, 0.2, 0.35] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F4F7FE] pt-[74px] text-[#0B1526]" style={{ zoom: 0.8 }}>

      {/* ── Navbar ── */}
      <Navbar activeId={activeId} menuOpen={menuOpen} onToggle={() => setMenuOpen((v) => !v)} onClose={() => setMenuOpen(false)} onNav={(id) => setActiveId(id)} />

      {/* ── Hero ── */}
      <section id="accueil" className="min-h-[calc(100vh-74px)]">
        <div className="mx-auto grid min-h-[calc(100vh-74px)] max-w-[1240px] grid-cols-1 items-center gap-8 px-2 py-8 sm:px-3 md:py-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(420px,.98fr)] lg:gap-10 lg:px-4">
          <div className="max-w-[760px]">
            <div className="animate-rise mb-5 inline-flex items-center gap-2 border border-[#E6EBF5] bg-white px-3.5 py-2 text-sm font-semibold text-[#28324A] shadow-sm">
              <span className="pulse-dot h-2 w-2 rounded-full bg-[#10B981]" />
              Plateforme de gestion scolaire
            </div>

            <h1 className="animate-rise mb-5 max-w-[860px] text-[clamp(32px,3.65vw,50px)] font-bold leading-[1.12] tracking-[-0.026em] text-[#0B1526]">
              <span className="block whitespace-nowrap">
                Toute votre{' '}
                <span className="inline-flex -skew-x-12 items-center justify-center bg-[#1B62F0] px-4 py-1.5 text-white shadow-[6px_6px_0_#22CCEE]">
                  <span className="inline-block skew-x-12 leading-none">Ecole</span>
                </span>{' '}
                dans
              </span>
              <span className="block whitespace-nowrap">une seule plateforme.</span>
            </h1>

            <p className="animate-rise mb-3 max-w-[600px] text-[clamp(16px,1.55vw,18px)] font-medium leading-8 text-[#0B1526]">
              Simplifiez la gestion de votre établissement avec MEDAARIS.
            </p>
            <p className="animate-rise mb-7 max-w-[600px] text-[clamp(15px,1.4vw,17px)] leading-8 text-[#4D5B78]">
              MEDAARIS est une plateforme de gestion scolaire qui accompagne les établissements dans leur transformation numérique. Elle simplifie l'administration, améliore la communication et offre aux équipes éducatives un environnement moderne, sécurisé et accessible à tout moment.
            </p>

            <div className="animate-rise mb-6 flex flex-wrap gap-3">
              <a href="#contact" className="bg-[#1B62F0] px-6 py-3.5 font-semibold !text-white transition hover:bg-[#0A46A8] hover:!text-white">
                Demander une démonstration
              </a>
              <a href="#apropos" className="border border-[#C9D5EA] bg-white px-6 py-3.5 font-semibold text-[#0B1526] transition hover:border-[#1B62F0] hover:text-[#1B62F0]">
                Commencer maintenant
              </a>
            </div>

            <div className="animate-rise flex flex-wrap gap-5 text-sm font-medium text-[#6E7A93]">
              {['Sans engagement', 'Hébergement sécurisé', 'Accompagnement inclus'].map((t) => (
                <span key={t} className="inline-flex items-center gap-1.5">
                  <Check size={14} className="text-[#10B981]" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          <DashboardPreview />
        </div>
      </section>


      {/* ── Qui sommes-nous ── */}
      <section id="apropos" className="bg-white">
        <div className="mx-auto max-w-[1180px] px-5 py-16 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionEyebrow n="01" label="Qui sommes-nous ?" />
              <h2 className="mb-6 text-[clamp(26px,3.5vw,42px)] font-bold leading-[1.1] tracking-tight">
                Une solution pensée pour les établissements d&apos;enseignement modernes.
              </h2>
              <p className="mb-5 text-[17px] leading-relaxed text-[#56617A]">
                MEDAARIS est une plateforme de gestion scolaire développée pour
                répondre aux défis quotidiens des établissements d&apos;enseignement.
              </p>
              <p className="mb-5 text-[17px] leading-relaxed text-[#56617A]">
                Notre solution réunit au sein d&apos;une seule plateforme les principaux outils
                nécessaires au bon fonctionnement d&apos;une école. Elle accompagne les équipes
                administratives, pédagogiques et financières dans leurs missions quotidiennes
                tout en améliorant l&apos;expérience des élèves et des parents.
              </p>
              <p className="text-[17px] leading-relaxed text-[#56617A]">
                Notre ambition est simple&nbsp;: permettre aux établissements de gagner du temps,
                d&apos;améliorer leur organisation et de prendre des décisions plus éclairées grâce
                à une solution moderne, fiable et sécurisée.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <MissionCard
                label="Notre mission"
                color="#1B62F0"
                bg="#EEF3FF"
              >
                Accompagner les établissements scolaires dans leur transformation numérique grâce à une plateforme performante, intuitive et fiable qui simplifie leur gestion quotidienne et contribue à offrir un environnement éducatif plus efficace.
              </MissionCard>
              <MissionCard
                label="Notre vision"
                color="#10B981"
                bg="#ECFDF5"
              >
                Construire l&apos;avenir de la gestion scolaire en proposant une plateforme innovante, évolutive et accessible, capable d&apos;accompagner durablement les établissements dans leur développement.
              </MissionCard>
              <div className="col-span-2 border border-[#E6EBF5] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <div className="mb-4 flex items-center justify-between border-b border-[#E6EBF5] pb-3">
                  <span className="text-xs font-bold uppercase tracking-[.14em] text-[#1B62F0]">La plateforme en chiffres</span>
                </div>
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { val: '24h/24', label: 'Disponible' },
                    { val: '100 %', label: 'Cloud & sécurisé' },
                    { val: 'Multi', label: 'Rôles & profils' },
                  ].map((s) => (
                    <div key={s.label} className="bg-[#F7F9FE] px-3 py-4">
                      <div className="text-2xl font-bold text-[#1B62F0]">{s.val}</div>
                      <div className="mt-1 text-xs font-bold uppercase tracking-[.06em] text-[#56617A]">{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pourquoi MEDAARIS ── */}
      <section id="fonctionnalites" className="mx-auto max-w-[1240px] px-2 py-12 sm:px-3 lg:min-h-screen lg:px-4 lg:py-16">
        <div className="mb-8 max-w-[980px]">
          <SectionEyebrow n="02" label="Pourquoi MEDAARIS ?" />
          <h2 className="mb-4 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-tight">
            Pourquoi choisir MEDAARIS&nbsp;?
          </h2>
          <p className="text-[17px] leading-relaxed text-[#56617A]">
            Moins de tâches manuelles, plus de visibilite et une communication plus fluide entre les équipes, les parents et les élèves.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.55fr]">
          <article className="flex min-h-[280px] flex-col justify-between self-start bg-[#1B62F0] p-7 text-white shadow-[12px_12px_0_#22CCEE]">
            <div>
              <span className="mb-5 flex h-13 w-13 items-center justify-center bg-white/15 text-white">
                <LayoutDashboard size={26} />
              </span>
              <h3 className="mb-3 max-w-[440px] text-[clamp(23px,2.3vw,30px)] font-bold leading-tight">
                Une gestion plus simple, des équipes mieux coordonnées.
              </h3>
              <p className="max-w-[460px] text-[15px] leading-7 text-white/85">
                MEDAARIS rassemble les opérations importantes de l'établissement dans une expérience claire pour la direction, l'administration et les familles.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-2">
              {['Gain de temps', 'Organisation', 'Communication'].map((item) => (
                <span key={item} className="bg-white px-2 py-2 text-center text-[11px] font-bold uppercase tracking-[.06em] text-[#1B62F0]">{item}</span>
              ))}
            </div>
          </article>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.slice(1).map((b, index) => (
              <article key={b.title} className={index === 4 ? 'group grid gap-5 border border-[#E6EBF5] bg-white p-5 transition hover:border-[#C9D9FF] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)] sm:col-span-2 sm:grid-cols-[auto_0.55fr_1fr_auto] sm:items-center' : 'group border border-[#E6EBF5] bg-white p-5 transition hover:border-[#C9D9FF] hover:shadow-[0_16px_34px_rgba(15,23,42,0.08)]'}>
                <div className={index === 4 ? 'flex items-center justify-between sm:contents' : 'mb-5 flex items-center justify-between'}>
                  <span className={index % 3 === 0 ? 'flex h-11 w-11 flex-none items-center justify-center bg-[#EEF3FF] text-[#1B62F0]' : index % 3 === 1 ? 'flex h-11 w-11 flex-none items-center justify-center bg-[#F0ECFF] text-[#6D4BF6]' : 'flex h-11 w-11 flex-none items-center justify-center bg-[#E9FBF4] text-[#0E9F70]'}>
                    <b.icon size={21} />
                  </span>
                </div>
                <h3 className={index === 4 ? 'text-lg font-bold text-[#0B1526]' : 'mb-3 text-lg font-bold text-[#0B1526]'}>{b.title}</h3>
                <p className={index === 4 ? 'text-[15px] leading-7 text-[#56617A]' : 'text-[15px] leading-7 text-[#56617A]'}>{b.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Communauté scolaire ── */}
      <section id="communaute" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="mb-10 max-w-[900px]">
            <SectionEyebrow n="03" label="Pour qui ?" />
            <h2 className="mb-4 text-[clamp(26px,3.2vw,40px)] font-bold leading-[1.1] tracking-tight">
              Une plateforme pensée pour toute la communauté scolaire
            </h2>
            <p className="max-w-[540px] text-[16px] leading-7 text-[#56617A]">
              Chaque profil accède à une expérience simple, adaptée à son rôle et à ses priorités.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {audiences.map((a, index) => (
              <article key={a.title} className="group border border-[#E6EBF5] bg-[#F7F9FE] p-5 text-center transition hover:border-[#C9D9FF] hover:bg-white hover:shadow-[0_14px_30px_rgba(15,23,42,0.07)]">
                <div className={index === 0 ? 'mx-auto mb-5 h-1 w-12 bg-[#1B62F0]' : index === 1 ? 'mx-auto mb-5 h-1 w-12 bg-[#6D4BF6]' : index === 2 ? 'mx-auto mb-5 h-1 w-12 bg-[#22CCEE]' : 'mx-auto mb-5 h-1 w-12 bg-[#0E9F70]'} />
                <div className="mb-7 flex items-center justify-center">
                  <span className={index === 1 ? 'flex h-11 w-11 items-center justify-center bg-[#F0ECFF] text-[#6D4BF6]' : index === 3 ? 'flex h-11 w-11 items-center justify-center bg-[#E9FBF4] text-[#0E9F70]' : 'flex h-11 w-11 items-center justify-center bg-[#EEF3FF] text-[#1B62F0]'}>
                  <a.icon size={20} />
                </span>
                </div>
                <h3 className="mb-3 text-[17px] font-bold text-[#0B1526]">{a.title}</h3>
                <p className="text-sm leading-6 text-[#56617A]">{a.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Avantages ── */}
      <section id="benefices" className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-stretch">
          <div className="bg-[#0B1526] p-8 text-white">
            <SectionEyebrow n="04" label="Les avantages" />
            <h2 className="mb-5 text-[clamp(28px,3.1vw,42px)] font-bold leading-[1.08] tracking-tight">
              Les avantages de MEDAARIS
            </h2>
            <p className="mb-8 max-w-[420px] text-[16px] leading-8 text-[#B7C0D6]">
              Avec MEDAARIS, votre établissement bénéficie de nombreux avantages.
            </p>
            <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-6">
              {[
                ['24h/24', 'Disponible'],
                ['100%', 'Web'],
                ['1', 'Plateforme'],
              ].map(([value, label]) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-white">{value}</div>
                  <div className="mt-1 text-xs font-semibold uppercase tracking-[.08em] text-[#8FA0C3]">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {advantages.map((item) => (
              <div key={item} className="group flex items-center gap-4 border border-[#E6EBF5] bg-white px-5 py-4 transition hover:border-[#C9D9FF] hover:shadow-[0_12px_26px_rgba(15,23,42,0.06)]">
                <span className="flex h-8 w-8 flex-none items-center justify-center bg-[#EEF3FF] text-[#1B62F0] transition group-hover:bg-[#1B62F0] group-hover:text-white">
                  <Check size={15} />
                </span>
                <span className="text-[15px] font-semibold text-[#0B1526]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pourquoi nous choisissent ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="mb-10 max-w-[780px]">
            <SectionEyebrow n="05" label="Pourquoi nous choisir ?" />
            <h2 className="mb-4 text-[clamp(28px,3.4vw,44px)] font-bold leading-[1.08] tracking-tight">
              Pourquoi les établissements nous font confiance
            </h2>
            <p className="text-[16px] leading-8 text-[#56617A]">
              MEDAARIS accompagne les établissements qui souhaitent moderniser leur gestion et offrir un meilleur service à leur communauté éducative.
            </p>
          </div>

          <div className="grid gap-4 lg:grid-cols-4">
            <article className="bg-[#1B62F0] p-7 text-white shadow-[10px_10px_0_#22CCEE] lg:row-span-2">
              <div className="mb-7 flex h-13 w-13 items-center justify-center bg-white/15">
                <Target size={25} />
              </div>
              <h3 className="mb-4 text-2xl font-bold leading-tight">Notre plateforme leur permet de</h3>
              <p className="text-[15px] leading-7 text-white/85">
                Moderniser leur gestion et offrir un meilleur service à leur communauté éducative.
              </p>
            </article>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-3">
              {whyChoose.map((item, index) => {
                const palette = [
                  ['#EEF3FF', '#1B62F0', LayoutDashboard],
                  ['#F0ECFF', '#6D4BF6', Settings],
                  ['#E9FBF4', '#0E9F70', UsersRound],
                  ['#EAFBFF', '#0891B2', FileCheck2],
                  ['#EEF3FF', '#1B62F0', TrendingUp],
                  ['#F0ECFF', '#6D4BF6', MessageCircle],
                  ['#E9FBF4', '#0E9F70', Clock],
                  ['#EAFBFF', '#0891B2', ShieldCheck],
                ] as const;
                const [bg, color, Icon] = palette[index % palette.length];
                return (
                  <div key={item} className="border border-[#E6EBF5] bg-white p-5 transition hover:border-[#C9D9FF] hover:shadow-[0_12px_28px_rgba(15,23,42,0.07)]">
                    <span className="mb-5 flex h-10 w-10 items-center justify-center" style={{ backgroundColor: bg, color }}>
                      <Icon size={19} />
                    </span>
                    <p className="text-[15px] font-bold leading-6 text-[#0B1526]">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Niveaux scolaires ── */}
      <section className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <SectionEyebrow n="06" label="Niveaux compatibles" />
            <h2 className="mb-4 text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.1] tracking-tight">
              Une solution adaptée à tous les niveaux
            </h2>
            <p className="max-w-[500px] text-[17px] leading-relaxed text-[#56617A]">
              Quelle que soit la taille de votre établissement, MEDAARIS s&apos;adapte à votre
              organisation et évolue avec vos besoins.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {levels.map((l, index) => (
              <div key={l.label} className="group flex min-h-[128px] items-center gap-5 border border-[#E2E8F4] bg-white p-5 transition hover:-translate-y-1 hover:border-[#C9D9FF] hover:shadow-[0_14px_30px_rgba(15,23,42,0.07)]">
                <span className={index === 0 ? 'flex h-14 w-14 flex-none items-center justify-center bg-[#E9FBF4] text-[#0E9F70]' : index === 1 ? 'flex h-14 w-14 flex-none items-center justify-center bg-[#EEF3FF] text-[#1B62F0]' : index === 2 ? 'flex h-14 w-14 flex-none items-center justify-center bg-[#F0ECFF] text-[#6D4BF6]' : 'flex h-14 w-14 flex-none items-center justify-center bg-[#EAFBFF] text-[#0891B2]'}>
                  <l.icon size={23} />
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#0B1526]">{l.label}</h3>
                  <p className="text-sm leading-6 text-[#56617A]">{l.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Accessible partout ── */}
      <section className="bg-[#0B1526] text-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <SectionEyebrow n="07" label="Accèssibilite" />
              <h2 className="mb-4 text-[clamp(26px,3.5vw,40px)] font-bold leading-[1.1] tracking-tight">
                Accessible partout
              </h2>
              <p className="mb-6 text-[17px] leading-relaxed text-[#9BA6BE]">
                Travaillez où que vous soyez. Vos informations restent synchronisées
                en temps réel depuis n'importe quel appareil.
              </p>
              <div className="inline-flex items-center gap-2 border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold">
                <span className="h-2 w-2 bg-[#10B981]" />
                Synchronisation en temps réel
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {devices.map((d, index) => (
                <div key={d.label} className="group border border-white/10 bg-white/[0.04] p-6 text-center transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className={index === 0 ? 'mx-auto mb-5 flex h-14 w-14 items-center justify-center text-[#1B62F0]' : index === 1 ? 'mx-auto mb-5 flex h-14 w-14 items-center justify-center text-[#22CCEE]' : 'mx-auto mb-5 flex h-14 w-14 items-center justify-center text-[#10B981]'}>
                    <d.icon size={index === 1 ? 36 : 32} className={index === 1 ? 'rotate-90' : ''} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-white">{d.label}</h3>
                  <p className="text-sm leading-6 text-[#9BA6BE]">{d.desc}</p>
                  <div className={index === 0 ? 'mx-auto mt-6 h-1 w-10 bg-[#1B62F0]' : index === 1 ? 'mx-auto mt-6 h-1 w-10 bg-[#22CCEE]' : 'mx-auto mt-6 h-1 w-10 bg-[#10B981]'} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Sécurité ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="mb-10 max-w-[820px]">
            <SectionEyebrow n="08" label="Sécurité" />
            <h2 className="mb-4 text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-tight">
              La protection de vos données est notre priorité
            </h2>
            <p className="max-w-[640px] text-[17px] leading-relaxed text-[#56617A]">
              MEDAARIS protège les informations sensibles de votre établissement
              avec des accès contrôlés, des sauvegardes et une disponibilité continue.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.35fr]">
            <div className="relative overflow-hidden bg-[#1B62F0] p-8 text-white shadow-[8px_8px_0_#22CCEE]">
              <div className="mb-10 flex h-16 w-16 items-center justify-center bg-white/15">
                <ShieldCheck size={34} />
              </div>
              <h3 className="mb-4 max-w-[420px] text-[clamp(24px,2.6vw,34px)] font-bold leading-tight">
                Une plateforme fiable pour les données scolaires sensibles.
              </h3>
              <p className="mb-8 max-w-[460px] text-[15px] leading-7 text-white/80">
                Comptes utilisateurs, notes, paiements, absences et communications restent
                organisés dans un environnement sécurisé et maîtrisé.
              </p>
              <div className="grid grid-cols-2 gap-3 border-t border-white/20 pt-6">
                <div>
                  <div className="text-2xl font-bold">24h/24</div>
                  <div className="text-xs font-semibold uppercase tracking-[.08em] text-white/65">Disponible</div>
                </div>
                <div>
                  <div className="text-2xl font-bold">Rôles</div>
                  <div className="text-xs font-semibold uppercase tracking-[.08em] text-white/65">Accès contrôlés</div>
                </div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {securityPoints.slice(0, 4).map((s, index) => (
                <div key={s.title} className="border border-[#E2E8F4] bg-[#F7F9FE] p-6 transition hover:border-[#C9D9FF] hover:bg-white hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                  <div className={index === 0 ? 'mb-5 flex h-12 w-12 items-center justify-center bg-[#EEF3FF] text-[#1B62F0]' : index === 1 ? 'mb-5 flex h-12 w-12 items-center justify-center bg-[#E9FBF4] text-[#0E9F70]' : index === 2 ? 'mb-5 flex h-12 w-12 items-center justify-center bg-[#F0ECFF] text-[#6D4BF6]' : 'mb-5 flex h-12 w-12 items-center justify-center bg-[#EAFBFF] text-[#0891B2]'}>
                    <s.icon size={22} />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#0B1526]">{s.title}</h3>
                  <p className="text-sm leading-7 text-[#56617A]">{s.desc}</p>
                </div>
              ))}
              <div className="border border-[#DCE7FF] bg-white p-6 sm:col-span-2">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-[#0B1526]">Haute disponibilité</h3>
                    <p className="text-sm leading-7 text-[#56617A]">
                      La plateforme reste accessible en permanence, avec une continuité de service pensée pour les usages quotidiens.
                    </p>
                  </div>
                  <div className="flex h-14 w-14 flex-none items-center justify-center bg-[#EEF3FF] text-[#1B62F0]">
                    <Zap size={26} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Offre sur devis ── */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="mb-10 text-center">
            <SectionEyebrow n="09" label="Nos offres" center />
            <h2 className="mb-4 text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-tight">
              Une offre adapt&eacute;e &agrave; votre &eacute;tablissement
            </h2>
            <p className="mx-auto max-w-[560px] text-[17px] leading-relaxed text-[#56617A]">
              Nos tarifs sont communiqu&eacute;s lors d&apos;un &eacute;change personnalis&eacute;.
              Contactez-nous pour obtenir une proposition adapt&eacute;e &agrave; vos besoins.
            </p>
          </div>

          <div className="mb-8 grid gap-5 sm:grid-cols-3">
            {[
              { icon: ShieldCheck, color: '#1B62F0', bg: '#EEF3FF', title: 'H&eacute;bergement s&eacute;curis&eacute;', desc: 'Vos donn&eacute;es sont h&eacute;berg&eacute;es dans un environnement fiable, avec sauvegardes automatiques.' },
              { icon: Zap,         color: '#10B981', bg: '#ECFDF5', title: 'Mise en service rapide',    desc: 'Notre &eacute;quipe vous accompagne de la configuration au d&eacute;marrage, sans complexit&eacute; technique.' },
              { icon: MessageCircle, color: '#6D4BF6', bg: '#F0ECFF', title: 'Support d&eacute;di&eacute;', desc: 'Un interlocuteur disponible pour r&eacute;pondre &agrave; vos questions et vous accompagner au quotidien.' },
            ].map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className="border border-[#E6EBF5] bg-white p-6 shadow-[0_4px_16px_rgba(15,23,42,0.04)]">
                <span className="mb-4 flex h-10 w-10 items-center justify-center" style={{ backgroundColor: bg }}>
                  <Icon size={20} style={{ color }} />
                </span>
                <h3 className="mb-2 text-base font-bold text-[#0B1526]" dangerouslySetInnerHTML={{ __html: title }} />
                <p className="text-sm leading-6 text-[#56617A]" dangerouslySetInnerHTML={{ __html: desc }} />
              </div>
            ))}
          </div>

          <div className="border border-[#1B62F0] bg-[#0B1526] p-8 text-center lg:p-12">
            <div className="mb-2 inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#22CCEE]">
              Obtenir un devis
            </div>
            <h3 className="mb-3 text-2xl font-bold text-white">
              Contactez-nous pour conna&icirc;tre nos tarifs
            </h3>
            <p className="mx-auto mb-8 max-w-[520px] text-[15px] leading-7 text-[#9BA6BE]">
              Nos offres sont con&ccedil;ues pour s&apos;adapter &agrave; chaque &eacute;tablissement — petite &eacute;cole, lyc&eacute;e ou
              r&eacute;seau multi-sites. &Eacute;changeons ensemble pour vous proposer la meilleure solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="bg-[#1B62F0] px-7 py-3.5 text-sm font-bold !text-white transition hover:bg-[#0A46A8] hover:!text-white">
                Demander un devis gratuit
              </a>
              <a href="#contact" className="border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold !text-white transition hover:bg-white/10 hover:!text-white">
                Demander une d&eacute;mo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Témoignages ── */}
      <section className="bg-[#F4F7FE]">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <SectionEyebrow n="10" label="Témoignages" />
              <h2 className="max-w-[620px] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-tight">
                Des retours concrets d'établissements accompagnés
              </h2>
            </div>
            <p className="max-w-[430px] text-[16px] leading-7 text-[#56617A]">
              Les équipes gagnent en clarté, les familles reçoivent mieux
              l'information et la gestion quotidienne devient plus fluide.
            </p>
          </div>

          <div className="overflow-hidden">
            <div className="testimonial-marquee flex w-max gap-4 pr-4">
              {[...testimonials, ...testimonials].map((t, i) => (
                <article key={`${t.author}-${i}`} className="flex min-h-[300px] w-[82vw] flex-col justify-between border border-[#E2E8F4] bg-white p-7 transition hover:border-[#C9D9FF] hover:shadow-[0_12px_28px_rgba(15,23,42,0.06)] sm:w-[360px] lg:w-[calc((1240px-32px)/3)]">
                  <div>
                    <div className={i % 3 === 0 ? 'mb-6 h-1 w-12 bg-[#1B62F0]' : i % 3 === 1 ? 'mb-6 h-1 w-12 bg-[#10B981]' : 'mb-6 h-1 w-12 bg-[#22CCEE]'} />
                    <blockquote className="text-[15px] leading-7 text-[#34405A]">
                      {t.quote}
                    </blockquote>
                  </div>
                  <div className="mt-8 flex items-center gap-3 border-t border-[#EEF2F8] pt-5">
                    <span className={i % 3 === 0 ? 'flex h-11 w-11 flex-none items-center justify-center bg-[#EEF3FF] text-sm font-bold text-[#1B62F0]' : i % 3 === 1 ? 'flex h-11 w-11 flex-none items-center justify-center bg-[#E9FBF4] text-sm font-bold text-[#0E9F70]' : 'flex h-11 w-11 flex-none items-center justify-center bg-[#EAFBFF] text-sm font-bold text-[#0891B2]'}>
                      {t.initials}
                    </span>
                    <div>
                      <div className="font-bold text-[#0B1526]">{t.author}</div>
                      <div className="text-xs text-[#98A2B8]">{t.role}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="bg-white">
        <div className="mx-auto grid max-w-[1240px] gap-8 px-2 py-14 sm:px-3 lg:grid-cols-[0.8fr_1.2fr] lg:px-4 lg:py-20">
          <div>
            <SectionEyebrow n="10" label="Questions fréquentes" />
          
            <p className="mb-8 max-w-[420px] text-[16px] leading-7 text-[#56617A]">
              Une FAQ courte pour clarifier les points importants avant de demander
              une démonstration.
            </p>
            <div className="border border-[#DCE7FF] bg-[#EEF3FF] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-white text-[#1B62F0]">
                <MessageCircle size={23} />
              </div>
              <h3 className="mb-2 text-lg font-bold text-[#0B1526]">Une autre question ?</h3>
              <p className="mb-5 text-sm leading-7 text-[#56617A]">
                Notre équipe peut vous répondre directement et vous orienter selon votre établissement.
              </p>
              <a href="#contact" className="inline-flex bg-[#1B62F0] px-5 py-3 text-sm font-semibold !text-white hover:bg-[#0A46A8] hover:!text-white">
                Nous contacter
              </a>
            </div>
          </div>
          <FAQList />
        </div>
      </section>

      {/* ── CTA block ── */}
      <section className="bg-[#0B1526] text-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[.14em] text-[#22CCEE]">Passer à l’action</p>
              <h2 className="mb-4 max-w-[700px] text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.08] tracking-tight">
                Prêt à moderniser votre établissement ?
              </h2>
              <p className="max-w-[610px] text-[17px] leading-8 text-[#B7C0D6]">
                Découvrez comment MEDAARIS peut transformer durablement la gestion de votre école et accompagner votre établissement dans sa transformation numérique.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="#contact" className="bg-[#1B62F0] px-7 py-4 text-center font-semibold !text-white transition hover:bg-[#0A46A8] hover:!text-white">
                Demander une démonstration
              </a>
              <a href="#contact" className="border border-white/20 bg-white/10 px-7 py-4 text-center font-semibold text-white transition hover:bg-white/15">
                Créer un compte
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="bg-white">
        <div className="mx-auto max-w-[1240px] px-2 py-14 sm:px-3 lg:px-4 lg:py-20">
          <div className="grid border border-[#E2E8F4] lg:grid-cols-[0.9fr_1.1fr]">

            {/* Panneau gauche — infos */}
            <div className="flex flex-col justify-between bg-[#F4F7FE] p-8 lg:p-12">
              <div>
                <SectionEyebrow n="11" label="Contact" />
                <h2 className="mb-4 text-[clamp(26px,3vw,40px)] font-bold leading-[1.08] tracking-tight text-[#0B1526]">
                  Obtenez un devis personnalis&eacute;
                </h2>
                <p className="mb-8 max-w-[420px] text-[16px] leading-7 text-[#56617A]">
                  Remplissez le formulaire et notre &eacute;quipe vous recontacte rapidement
                  pour vous pr&eacute;senter MEDAARIS et &eacute;tablir une offre adapt&eacute;e
                  &agrave; votre &eacute;tablissement.
                </p>
                <div className="mb-8 space-y-1 border-l-2 border-[#1B62F0] pl-4">
                  {[
                    'D&eacute;monstration gratuite et sans engagement',
                    'Offre adapt&eacute;e &agrave; la taille de votre &eacute;tablissement',
                    'R&eacute;ponse sous 24&nbsp;h',
                  ].map((t) => (
                    <p key={t} className="text-[14px] font-medium text-[#56617A]" dangerouslySetInnerHTML={{ __html: t }} />
                  ))}
                </div>
              </div>
              <div className="space-y-2">
                <ContactRow icon={Smartphone} label="WhatsApp"  value="+221 785984396"              href="https://wa.me/221785984396" highlight />
                <ContactRow icon={Mail}       label="E-mail"    value="medaaris.education@gmail.com" href="mailto:medaaris.education@gmail.com" />
                <ContactRow icon={Clock}      label="Horaires"  value="Lun – Sam : 08h – 18h"       href="#contact" />
              </div>
            </div>

            {/* Panneau droit — formulaire */}
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── MissionCard ─────────────────────────────────────────────────────── */

function MissionCard({ label, children, color, bg }: { label: string; children: React.ReactNode; color: string; bg: string }) {
  return (
    <div className="relative overflow-hidden border border-[#E6EBF5] p-6" style={{ background: bg }}>
      <div className="mb-5 h-1 w-12" style={{ backgroundColor: color }} />
      <div className="mb-3 text-xs font-bold uppercase tracking-[.12em]" style={{ color }}>{label}</div>
      <p className="text-[15px] leading-7 text-[#34405A]">{children}</p>
    </div>
  );
}

/* ─── Navbar ─────────────────────────────────────────────────────────── */

function Navbar({ activeId, menuOpen, onToggle, onClose, onNav }: { activeId: string; menuOpen: boolean; onToggle: () => void; onClose: () => void; onNav: (id: string) => void }) {
  const handleClick = (href: string) => {
    onNav(href.replace('#', ''));
    onClose();
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-[#DDE5F2] bg-white shadow-[0_1px_8px_rgba(15,23,42,0.05)]" style={{ zoom: 0.8 }}>
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between gap-5 px-2 py-3 sm:px-3 lg:px-4">
        <a href="#accueil" onClick={() => handleClick('#accueil')} aria-label="MEDAARIS" className="flex-none">
          <Image src="/medaaris-logo.jpeg" alt="MEDAARIS" width={172} height={42} className="h-11 w-auto" priority />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => handleClick(item.href)}
              className={activeId === item.href.slice(1)
                ? 'border-b-2 border-[#1B62F0] pb-1 text-[15px] font-semibold text-[#1B62F0] transition'
                : 'border-b-2 border-transparent pb-1 text-[15px] font-semibold text-[#111827] transition hover:text-[#1B62F0]'}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a href="#contact" onClick={() => handleClick('#contact')} className="bg-[#1B62F0] px-6 py-3 text-[15px] font-semibold !text-white transition hover:bg-[#0A46A8] hover:!text-white">
            Demander une démo
          </a>
        </div>

        <button
          type="button"
          onClick={onToggle}
          className="flex h-11 w-11 items-center justify-center border border-[#DDE5F2] text-[#0B1526] lg:hidden"
          aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="animate-nav-slide-down border-t border-[#E6EBF5] bg-white px-3 pb-5 sm:px-4 lg:hidden">
          <div className="mx-auto flex max-w-[1220px] flex-col gap-1 pt-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleClick(item.href)}
                className={activeId === item.href.slice(1)
                  ? 'border-l-2 border-[#1B62F0] px-3 py-3 font-semibold text-[#1B62F0]'
                  : 'border-l-2 border-transparent px-3 py-3 font-semibold text-[#0B1526] hover:text-[#1B62F0]'}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => handleClick('#contact')} className="mt-3 bg-[#1B62F0] px-4 py-3 text-center font-semibold !text-white hover:!text-white">
              Demander une démo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── DashboardPreview ───────────────────────────────────────────────── */

function DashboardPreview() {
  return (
    <div className="animate-float-a w-full border border-[#DDE5F2] bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.12)] lg:justify-self-end">
      <div className="mb-4 flex items-center gap-2 border-b border-[#F1F5F9] pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#E2E8F0]" />
        <span className="ml-2 text-xs font-medium text-[#98A2B8]">medaaris.app · tableau de bord</span>
      </div>

      <div className="mb-4 flex items-center justify-between">
        <div>
          <div className="font-bold text-[#0B1526]">Bonjour, Direction</div>
          <div className="text-xs text-[#98A2B8]">Année 2025 – 2026</div>
        </div>
        <span className="flex h-9 w-9 items-center justify-center bg-[#1B62F0] text-xs font-bold text-white">MD</span>
      </div>

      <div className="mb-4 border border-[#EAEFF9] bg-[#F7F9FE] p-4">
        <div className="mb-3 text-xs font-semibold text-[#56617A]">Activité · cette semaine</div>
        <div className="flex h-14 items-end gap-2">
          {[58, 78, 96, 68, 84].map((h, i) => (
            <div key={i} className={`flex-1 ${i === 2 ? 'bg-[#1B62F0]' : 'bg-[#DCE7FF]'}`} style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <DashLine label="Paiements validés"  value="✓" />
        <DashLine label="Bulletins prêts"    value="✓" />
        <DashLine label="Absences traitées"  value="✓" />
      </div>
    </div>
  );
}

function DashLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between bg-[#F4F7FE] px-4 py-2.5">
      <span className="text-xs font-medium text-[#56617A]">{label}</span>
      <span className="text-sm font-bold text-[#0B1526]">{value}</span>
    </div>
  );
}

/* ─── FAQList ────────────────────────────────────────────────────────── */

function FAQList() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <div className="border border-[#E2E8F4] bg-white">
      {faqs.map(([q, a], i) => (
        <div key={q} className={open === i ? 'border-b border-[#E2E8F4] bg-[#F7F9FE] last:border-b-0' : 'border-b border-[#F1F5F9] bg-white last:border-b-0'}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-[#0B1526] transition hover:bg-[#F8FAFC]"
          >
            <span>{q}</span>
            <span className={`flex h-8 w-8 flex-none items-center justify-center bg-[#EEF3FF] text-[#1B62F0] transition-transform ${open === i ? 'rotate-180 bg-[#1B62F0] text-white' : ''}`}>
              <ChevronDown size={15} />
            </span>
          </button>
          {open === i && (
            <div className="max-w-[760px] px-6 pb-6 text-[15px] leading-7 text-[#56617A]">{a}</div>
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── ContactForm ────────────────────────────────────────────────────── */

function ContactForm() {
  const [form, setForm] = useState({ nom: '', etablissement: '', contact: '', objet: 'devis', message: '' });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const objetLabel: Record<string, string> = {
      devis: 'Demande de devis',
      demo: 'Demande de démonstration',
      info: "Demande d'informations",
      autre: 'Autre demande',
    };
    const text = encodeURIComponent(
      `Bonjour MEDAARIS,\n\nJe suis *${form.nom}* de l'établissement *${form.etablissement}*.\n\nObjet : ${objetLabel[form.objet] ?? form.objet}${form.message ? `\n\nMessage : ${form.message}` : ''}\n\nContact : ${form.contact}`,
    );
    window.open(`https://wa.me/221785984396?text=${text}`, '_blank');
    setSent(true);
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center gap-5 p-12 text-center">
        <span className="flex h-14 w-14 items-center justify-center bg-[#ECFDF5]">
          <Check size={28} className="text-[#10B981]" />
        </span>
        <h3 className="text-xl font-bold text-[#0B1526]">Demande envoyée&nbsp;!</h3>
        <p className="max-w-[320px] text-[15px] leading-6 text-[#56617A]">
          Notre équipe vous contactera très prochainement pour répondre à votre demande.
        </p>
        <button
          type="button"
          onClick={() => { setSent(false); setForm({ nom: '', etablissement: '', contact: '', objet: 'devis', message: '' }); }}
          className="text-sm font-semibold text-[#1B62F0] hover:underline"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  const inputCls = 'w-full border border-[#DDE5F2] bg-[#F7F9FE] px-4 py-3 text-sm text-[#0B1526] outline-none transition focus:border-[#1B62F0] focus:bg-white';
  const labelCls = 'mb-1.5 block text-sm font-semibold text-[#0B1526]';

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-8 lg:p-12">
      <div>
        <label className={labelCls}>Nom complet <span className="text-[#E53E3E]">*</span></label>
        <input required name="nom" value={form.nom} onChange={handleChange} placeholder="Ex : Mamadou Diallo" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Établissement <span className="text-[#E53E3E]">*</span></label>
        <input required name="etablissement" value={form.etablissement} onChange={handleChange} placeholder="Ex : Lycée Averroès" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Téléphone ou e-mail <span className="text-[#E53E3E]">*</span></label>
        <input required name="contact" value={form.contact} onChange={handleChange} placeholder="Ex : +221 77 000 00 00" className={inputCls} />
      </div>
      <div>
        <label className={labelCls}>Objet de la demande</label>
        <select name="objet" value={form.objet} onChange={handleChange} className={inputCls}>
          <option value="devis">Demander un devis</option>
          <option value="demo">Demander une démonstration</option>
          <option value="info">Obtenir plus d&apos;informations</option>
          <option value="autre">Autre</option>
        </select>
      </div>
      <div>
        <label className={labelCls}>Message <span className="text-xs font-normal text-[#98A2B8]">(optionnel)</span></label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Décrivez brièvement votre besoin…" className={`${inputCls} resize-none`} />
      </div>
      <button type="submit" className="mt-1 bg-[#1B62F0] px-6 py-3.5 text-sm font-bold !text-white transition hover:bg-[#0A46A8] hover:!text-white">
        Envoyer ma demande
      </button>
      <p className="text-xs text-[#98A2B8]">
        En soumettant ce formulaire, vous serez redirigé vers WhatsApp pour finaliser l&apos;envoi.
      </p>
    </form>
  );
}

/* ─── ContactRow ─────────────────────────────────────────────────────── */

function ContactRow({ icon: Icon, label, value, href, highlight }: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  highlight?: boolean;
}) {
  return (
    <a
      href={href}
      className={`flex items-center gap-5 px-8 py-7 transition-colors hover:bg-[#F4F7FE] ${highlight ? 'bg-[#F8FAFF]' : ''}`}
    >
      <span className={`flex h-12 w-12 flex-none items-center justify-center ${highlight ? 'bg-[#1B62F0] text-white' : 'bg-[#EEF3FF] text-[#1B62F0]'}`}>
        <Icon size={22} />
      </span>
      <div className="flex-1 min-w-0">
        <div className="mb-0.5 text-xs font-bold uppercase tracking-widest text-[#98A2B8]">{label}</div>
        <div className="truncate text-lg font-bold text-[#0B1526]">{value}</div>
      </div>
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C4CFDE" strokeWidth="2" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
    </a>
  );
}

/* ─── SectionEyebrow ─────────────────────────────────────────────────── */

function SectionEyebrow({ n, label, center }: { n: string; label: string; center?: boolean }) {
  return (
    <p className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[.1em] text-[#1B62F0] ${center ? 'justify-center' : ''}`}>
      <span className="font-mono">{n}</span>
      <span className="inline-block h-px w-6 bg-[#1B62F0]" />
      {label}
    </p>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="bg-[#0B1526] text-white">
      <div className="mx-auto max-w-[1240px] px-2 pb-8 pt-14 sm:px-3 lg:px-4">
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Image src="/medaaris-logo.jpeg" alt="MEDAARIS" width={150} height={36} className="mb-5 h-10 w-auto" />
            <p className="max-w-[300px] text-sm leading-7 text-[#9BA6BE]">
              La plateforme qui simplifie la gestion des établissements scolaires —
              de l'inscription au bulletin.
            </p>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold">Produit</div>
            <div className="flex flex-col gap-3 text-sm text-[#9BA6BE]">
              <a href="#apropos"   className="transition hover:text-white">À propos</a>
              <a href="#benefices" className="transition hover:text-white">Avantages</a>
              <a href="#faq"       className="transition hover:text-white">FAQ</a>
              <a href="#contact"   className="transition hover:text-white">Démonstration</a>
            </div>
          </div>

          <div>
            <div className="mb-4 text-sm font-bold">Contact</div>
            <div className="flex flex-col gap-3 text-sm text-[#9BA6BE]">
              <a href="tel:22113543"                className="transition hover:text-white">22113543</a>
              <a href="https://wa.me/221785984396" className="transition hover:text-white">+221 785984396</a>
              <a href="mailto:medaaris.education@gmail.com" className="transition hover:text-white">medaaris.education@gmail.com</a>
              <a href="http://www.medaaris.com/"   className="transition hover:text-white">www.medaaris.com</a>
            </div>
            
          </div>

          <div>
            <div className="mb-4 text-sm font-bold">Légal</div>
            <div className="flex flex-col gap-3 text-sm text-[#9BA6BE]">
              <a href="#" className="transition hover:text-white">Mentions légales</a>
              <a href="#" className="transition hover:text-white">Politique de confidentialité</a>
              <a href="#" className="transition hover:text-white">Conditions d'utilisation</a>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
          <span className="text-sm text-[#6E7A93]">© 2026 MEDAARIS. Tous droits réservés.</span>
          <a href="#contact" className="bg-[#1B62F0] px-5 py-2.5 text-sm font-semibold !text-white transition hover:bg-[#0A46A8] hover:!text-white">
            Demander une démo
          </a>
        </div>
      </div>
    </footer>
  );
}


