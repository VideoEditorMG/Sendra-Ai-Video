import React from "react";
import { motion } from "motion/react";
import { 
  ArrowRight, 
  Play,
  Mail,
  Linkedin,
  Facebook,
  Phone,
  Monitor,
  Zap,
  Target,
  ExternalLink,
  Video,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-brand-primary/30">
      {/* 1. BARRE DE NAVIGATION (Fidele à la référence) */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#030303]/90 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-[60px] h-[90px] flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <img 
              src="https://i.imgur.com/Lh5uyYR.png" 
              alt="Sendra Digital" 
              className="h-[50px] w-auto object-contain" 
              referrerPolicy="no-referrer" 
            />
            <div className="flex flex-col">
              <span className="font-display font-black text-[16px] tracking-[0.3em] leading-tight">SENDRA</span>
              <span className="font-display font-bold text-[10px] tracking-[0.4em] text-brand-primary uppercase leading-tight">Digital</span>
            </div>
          </div>

          {/* Links & CTA */}
          <div className="flex items-center gap-[42px]">
            <div className="hidden lg:flex items-center gap-[42px] text-[16px] font-semibold uppercase tracking-widest text-white">
              <button onClick={() => scrollTo('portfolio')} className="hover:text-brand-primary transition-colors cursor-pointer">Portfolio</button>
              <button onClick={() => scrollTo('methode')} className="hover:text-brand-primary transition-colors cursor-pointer">Méthode</button>
              <button onClick={() => scrollTo('contact')} className="hover:text-brand-primary transition-colors cursor-pointer">Contact</button>
            </div>
            <button 
              onClick={() => scrollTo('contact')}
              className="hidden md:block w-[170px] h-[54px] border-[1.5px] border-brand-primary rounded-[10px] text-[15px] font-bold uppercase tracking-widest hover:bg-brand-primary transition-all text-white"
            >
              Prendre contact
            </button>
          </div>
        </div>
      </nav>

      {/* 2. HERO SECTION COMPLÈTE (Exactement selon la référence) */}
      <section className="relative h-screen min-h-[850px] w-full flex flex-col items-center overflow-hidden bg-black">
        {/* Background Portrait - Lien direct vérifié */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <img 
            src="https://i.imgur.com/tQyN4Sq.png" 
            alt="Sendra Digital Portrait" 
            className="w-full h-full object-contain grayscale contrast-[1.05] scale-[1.35]"
            style={{ objectPosition: 'center 10%' }}
            referrerPolicy="no-referrer"
          />
          {/* Overlays pour la lisibilité (plus subtils pour ne pas cacher l'image) */}
          <div className="absolute inset-0 bg-black/10" />
          {/* Dégradé bas prononcé pour fondre le buste */}
          <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-[#000000] via-[#000000]/40 to-transparent" />
          {/* Vignettage latéral */}
          <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-black/60 to-transparent" />
          <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-black/60 to-transparent" />
        </div>

        {/* Bloc Texte Hero - Centré précisément au niveau de la poitrine (Image 1) */}
        <div className="relative z-10 w-full max-w-[1000px] mx-auto px-6 h-full flex flex-col items-center justify-start pt-[62vh]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center w-full"
          >
            {/* Titre Principal Compact - 3 Lignes (Rétabli) */}
            <h1 className="font-impact leading-[0.88] text-center uppercase mb-8 select-none w-full tracking-[-1px]">
              <span className="block text-[42px] md:text-[62px] text-white">JE SUIS</span>
              <span className="block text-[46px] md:text-[68px] tracking-tight">
                <span className="text-white">UN</span> <span className="text-brand-primary">CRÉATEUR</span>
              </span>
              <span className="block text-[44px] md:text-[64px] text-white">VIDÉO IA</span>
            </h1>

            {/* Sous-titre descriptif (Rétabli) */}
            <div className="max-w-[650px] mb-10 text-center">
              <p className="text-[#D0D0D0] text-[16px] md:text-[18px] leading-[1.6] font-light">
                Spécialisé dans la <span className="text-brand-primary font-medium">création de vidéos courtes</span> à fort impact (15-30s).<br className="hidden md:block" />
                Production structurée, orientée résultats et prête pour le volume.
              </p>
            </div>

            {/* Boutons Hero (Portfolio réduit et aéré spécifiquement) */}
            <div className="flex flex-col sm:flex-row gap-[28px]">
              <button 
                onClick={() => scrollTo('portfolio')}
                className="flex items-center justify-center gap-2 w-[220px] h-[56px] bg-brand-primary rounded-[8px] hover:brightness-110 transition-all group"
              >
                <span className="text-[11px] font-bold uppercase tracking-[0.3em]">Portfolio</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('contact')}
                className="flex items-center justify-center w-[220px] h-[56px] border-[1.5px] border-white/20 rounded-[8px] text-[16px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-white"
              >
                Me contacter
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. CE QUE JE CRÉE */}
      <section className="py-[100px] bg-black">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-[64px]">
            <h2 className="text-[42px] font-sans font-bold text-white tracking-tight">Ce que je crée</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Monitor className="w-8 h-8" />}
              title="Vidéos courtes IA"
              desc="Vidéos générées par intelligence artificielle, prêtes pour les réseaux sociaux et la publicité."
            />
            <ServiceCard 
              icon={<Zap className="w-8 h-8" />}
              title="Contenus à fort impact"
              desc="Des vidéos qui captent l'attention en quelques secondes et incitent à l'action."
            />
            <ServiceCard 
              icon={<Target className="w-8 h-8" />}
              title="Production orientée résultats"
              desc="Une approche data-driven pour maximiser la performance de chaque vidéo."
            />
          </div>
        </div>
      </section>

      {/* 4. PROJETS RÉCENTS */}
      <section id="portfolio" className="py-[100px] bg-[#050505]">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="text-center mb-[56px]">
            <h2 className="text-[42px] font-sans font-bold text-white tracking-tight">Projets récents</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <ProjectCard 
              videoId="YDYziJcfkBM"
              youtubeUrl="https://youtube.com/shorts/YDYziJcfkBM"
              title="IA & Créativité"
              subtitle="Production courte impactante"
            />
            <ProjectCard 
              videoId="h_MEZC16PuE"
              youtubeUrl="https://youtube.com/shorts/h_MEZC16PuE"
              title="Storytelling Visuel"
              subtitle="Contenu viral IA"
            />
            <ProjectCard 
              videoId="Kk2SkmEU1R4"
              youtubeUrl="https://youtube.com/shorts/Kk2SkmEU1R4"
              title="Innovation Vidéo"
              subtitle="Format vertical optimisé"
            />
          </div>
        </div>
      </section>

      {/* 5. MA MÉTHODE */}
      <section id="methode" className="py-[100px] bg-black relative">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="text-center mb-[80px]">
            <h2 className="text-[42px] font-sans font-bold text-white tracking-tight">Ma méthode</h2>
          </div>

          <div className="relative">
            {/* Connection Line Blue - Thin and professional */}
            <div className="absolute top-[24px] left-[10%] right-[10%] h-[1px] bg-brand-primary/30 hidden md:block" />
            
            <div className="grid md:grid-cols-4 gap-12 relative z-10">
              <MethodStep 
                num="1" 
                title="Analyse du besoin" 
                desc="Compréhension de vos objectifs et de votre audience." 
              />
              <MethodStep 
                num="2" 
                title="Conception du concept" 
                desc="Idées créatives et scripts pensés pour l'impact." 
              />
              <MethodStep 
                num="3" 
                title="Production vidéo" 
                desc="Génération IA et montage professionnel." 
              />
              <MethodStep 
                num="4" 
                title="Livraison optimisée" 
                desc="Formats adaptés et prêts à performer." 
              />
            </div>
          </div>
        </div>
      </section>

      {/* 6. PARLONS DE VOTRE PROJET */}
      <section className="py-[100px] bg-black">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="bg-gradient-to-br from-[#003d80] to-[#001a33] border border-white/10 rounded-[24px] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-center md:text-left">
              <h2 className="text-[36px] md:text-[44px] font-sans font-bold mb-4 tracking-tight">Parlons de votre projet</h2>
              <p className="text-white/80 max-w-[500px] text-lg leading-relaxed font-light">
                Vous avez un projet de vidéo courte à fort impact ? Discutons ensemble pour créer du contenu qui obtient des résultats.
              </p>
            </div>
            <button 
              onClick={() => scrollTo('contact')}
              className="w-full md:w-auto px-12 h-[64px] bg-brand-primary hover:brightness-110 text-white font-bold rounded-[8px] transition-all flex items-center justify-center gap-3 group text-[18px]"
            >
              Me contacter <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 7. FOOTER */}
      <footer id="contact" className="py-[40px] bg-[#020202] border-t border-white/5">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-[80px] mb-12">
            {/* Brand Column */}
            <div className="col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <img 
                  src="https://i.imgur.com/Lh5uyYR.png" 
                  alt="Sendra Digital" 
                  className="h-[40px] w-auto object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="font-display font-black text-[12px] tracking-[0.2em] leading-tight text-white">SENDRA</span>
                  <span className="font-display font-bold text-[7px] tracking-[0.3em] text-brand-primary uppercase leading-tight">Digital</span>
                </div>
              </div>
              <p className="text-[#B8B8B8] text-[14px] leading-relaxed w-[260px] mb-8">
                Création de vidéos courtes IA à fort impact pour des marques qui veulent performer.
              </p>
              <div className="flex items-center gap-4">
                <SocialLink icon={<Linkedin className="w-4 h-4" />} href="https://www.linkedin.com/in/sendra-randrianasolo" />
                <SocialLink icon={<Facebook className="w-4 h-4" />} href="https://www.facebook.com/SendraDigital" />
                <SocialLink icon={<Phone className="w-4 h-4" />} href="https://wa.me/261343116654" />
                <SocialLink icon={<Mail className="w-4 h-4" />} href="mailto:sendramalalarandrianasolo@gmail.com" />
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-[16px] font-bold text-white mb-[18px]">Navigation</h3>
              <ul className="space-y-2 text-[14px] text-[#B8B8B8] font-medium leading-loose">
                <li><button onClick={() => scrollTo('portfolio')} className="hover:text-brand-primary transition-colors">Portfolio</button></li>
                <li><button onClick={() => scrollTo('methode')} className="hover:text-brand-primary transition-colors">Méthode</button></li>
                <li><button onClick={() => scrollTo('contact')} className="hover:text-brand-primary transition-colors">Contact</button></li>
              </ul>
            </div>

            {/* Legal Column */}
            <div>
              <h3 className="text-[16px] font-bold text-white mb-[18px]">Légal</h3>
              <ul className="space-y-2 text-[14px] text-[#B8B8B8] font-medium leading-loose">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Mentions légales</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Politique de confidentialité</a></li>
              </ul>
            </div>

            {/* Contact Column */}
            <div>
              <h3 className="text-[16px] font-bold text-white mb-[18px]">Contact</h3>
              <ul className="space-y-2 text-[14px] text-[#B8B8B8] font-medium font-sans leading-loose">
                <li className="hover:text-brand-primary transition-colors">sendramalalarandrianasolo@gmail.com</li>
                <li className="italic">Réponse sous 24h</li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 text-center">
            <span className="text-[13px] text-[#555555] uppercase tracking-[0.2em]">© 2024 Sendra Digital. Tous droits réservés.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="bg-[#0D0D0D] border border-white/10 rounded-[18px] p-[32px] w-full min-h-[165px] group hover:border-brand-primary/50 transition-all duration-500">
      <div className="w-[64px] h-[64px] rounded-full border border-brand-primary/50 flex items-center justify-center mb-6 bg-brand-primary/5 group-hover:scale-110 transition-transform duration-500">
        <div className="text-brand-primary">{icon}</div>
      </div>
      <h3 className="text-[18px] font-bold mb-3 font-sans text-white uppercase tracking-tight">{title}</h3>
      <p className="text-[#B8B8B8] text-[14px] leading-[1.55] font-sans">
        {desc}
      </p>
    </div>
  );
}

function ProjectCard({ videoId, title, subtitle, youtubeUrl }: { videoId: string, title: string, subtitle: string, youtubeUrl: string }) {
  return (
    <div className="group w-full max-w-[340px] mx-auto">
      <div className="relative w-full aspect-[9/16] rounded-[20px] overflow-hidden mb-6 border border-white/10 bg-black shadow-2xl">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
          className="w-full h-full"
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="text-center md:text-left px-2">
        <h3 className="text-[20px] font-bold mb-1 font-sans text-white tracking-tight">{title}</h3>
        <p className="text-[#B8B8B8] text-[15px] font-sans font-light mb-4">{subtitle}</p>
        
        <a 
          href={youtubeUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[11px] font-bold text-brand-primary/60 uppercase tracking-widest hover:text-brand-primary transition-all group/link"
        >
          Voir sur YouTube <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function MethodStep({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="text-center relative group">
      <div className="w-[48px] h-[48px] rounded-full bg-black border-2 border-brand-primary flex items-center justify-center font-sans font-bold text-brand-primary text-[20px] mx-auto mb-6 relative z-10 group-hover:scale-110 transition-all duration-300">
        {num}
      </div>
      <h3 className="text-[16px] font-bold mb-3 font-sans text-white">{title}</h3>
      <p className="text-[#B8B8B8] text-[14px] leading-[1.5] max-w-[190px] mx-auto font-sans">
        {desc}
      </p>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/40 hover:text-brand-primary hover:bg-white/10 transition-all font-sans">
      {icon}
    </a>
  );
}
