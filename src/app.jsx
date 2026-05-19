// Main App + Nav + Tweaks
const { useState: useStateApp, useEffect: useEffectApp } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "headline": "A",
  "accent": "#FF4800",
  "showUrgency": true,
  "navStyle": "pill"
}/*EDITMODE-END*/;

const Nav = () => (
  <nav className="nav">
    <div className="nav__inner">
      <a href="#"><img src="assets/logo-horizontal-dark.png" alt="Nova Era" className="nav__logo"/></a>
      <div className="nav__links">
        <a href="#method">Método</a>
        <a href="#results">Resultados</a>
        <a href="#offer">Oferta</a>
        <a href="#faq">FAQ</a>
      </div>
      <a href="#form" className="btn btn--primary nav__cta">
        Fale com especialista
      </a>
    </div>
  </nav>
);

const NovaTweaks = ({ tweaks, setTweak }) => {
  return (
    <TweaksPanel title="Tweaks">
      <TweakSection title="Headline" subtitle="3 ângulos da copy">
        <TweakRadio
          value={tweaks.headline}
          options={[
            {value:'A', label:'Resultado'},
            {value:'B', label:'Dor'},
            {value:'C', label:'Mecanismo'},
          ]}
          onChange={v => setTweak('headline', v)}
        />
        <div style={{
          fontSize:11, lineHeight:1.4, color:'rgba(255,255,255,0.6)',
          fontFamily:'var(--font-mono)', marginTop:10, padding:'8px 10px',
          background:'rgba(255,255,255,0.04)', borderRadius:8
        }}>
          {tweaks.headline === 'A' && 'A · "Triplicar pedidos em 90 dias" — ângulo de resultado específico'}
          {tweaks.headline === 'B' && 'B · "Parou de crescer? A culpa não é..." — ângulo de dor + virada'}
          {tweaks.headline === 'C' && 'C · "Um time dedicado ao seu delivery" — ângulo de mecanismo'}
        </div>
      </TweakSection>

      <TweakSection title="Cor de acento">
        <TweakColor
          value={tweaks.accent}
          options={['#FF4800','#E11D48','#F59E0B','#16A34A','#2563EB']}
          onChange={v => setTweak('accent', v)}
        />
      </TweakSection>

      <TweakSection title="Bloco de urgência" subtitle="Mostrar vagas limitadas?">
        <TweakToggle
          value={tweaks.showUrgency}
          onChange={v => setTweak('showUrgency', v)}
          label="Visível"
        />
      </TweakSection>
    </TweaksPanel>
  );
};

const StickyCTA = () => {
  const [show, setShow] = useStateApp(false);
  useEffectApp(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, {passive:true});
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <a href="#form" className="btn btn--primary" style={{
      position:'fixed', bottom:24, right:24,
      zIndex:40,
      padding:'16px 22px',
      fontSize:14,
      boxShadow:'0 20px 40px -10px rgba(255,72,0,0.45), 0 8px 16px -4px rgba(0,0,0,0.2)',
      opacity: show ? 1 : 0,
      pointerEvents: show ? 'auto' : 'none',
      transform: show ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.3s, transform 0.3s'
    }}>
      <Icon.Whatsapp size={16}/>
      Fale agora
    </a>
  );
};

const App = () => {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply accent color live
  useEffectApp(() => {
    document.documentElement.style.setProperty('--orange', tweaks.accent);
    const hex = tweaks.accent.replace('#', '');
    const r = parseInt(hex.slice(0,2),16), g = parseInt(hex.slice(2,4),16), b = parseInt(hex.slice(4,6),16);
    const dk = (c) => Math.max(0, Math.round(c * 0.85));
    document.documentElement.style.setProperty('--orange-dark', `rgb(${dk(r)},${dk(g)},${dk(b)})`);
  }, [tweaks.accent]);

  // Scroll-reveal observer
  useEffectApp(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.section-header, .benefit, .testimonial, .objection, .faq-item, .pain-item').forEach(el => {
      el.classList.add('reveal');
      obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <React.Fragment>
      <Nav/>
      <Hero headline={tweaks.headline}/>
      <Pain/>
      <Method/>
      <Benefits/>
      <SocialProof/>
      <Offer/>
      {tweaks.showUrgency && <Guarantee/>}
      <FAQ/>
      <FinalCTA/>
      <Footer/>
      <StickyCTA/>
      <NovaTweaks tweaks={tweaks} setTweak={setTweak}/>
    </React.Fragment>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);
