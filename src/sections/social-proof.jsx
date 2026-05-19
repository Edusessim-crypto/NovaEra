// Social proof — animated counters + testimonials
const { useState: useStateSP, useEffect: useEffectSP, useRef: useRefSP } = React;

const useCountUp = (target, duration = 1800, enabled = true) => {
  const [n, setN] = useStateSP(0);
  useEffectSP(() => {
    if (!enabled) return;
    let raf, start;
    const animate = (t) => {
      if (!start) start = t;
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [target, duration, enabled]);
  return n;
};

const Stat = ({ value, label, format, suffix }) => {
  const ref = useRefSP(null);
  const [vis, setVis] = useStateSP(false);
  useEffectSP(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect(); }
    }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const n = useCountUp(value, 1800, vis);
  return (
    <div className="stat" ref={ref}>
      <div className="stat__value counter">
        +{format ? format(n) : n}{suffix || ''}
      </div>
      <div className="stat__label">{label}</div>
    </div>
  );
};

const TESTIMONIALS = [
  {
    quote: 'Em 60 dias com a Nova Era, triplicamos nossos pedidos no iFood. O time sabe exatamente o que o mercado de delivery precisa. Resultado real, sem enrolação.',
    name: 'Rafael Oliveira',
    biz: 'Burguer House',
    metric: '+218% pedidos',
    avatar: 'R',
  },
  {
    quote: 'Profissionais sérios e comprometidos. Me ajudaram a estruturar todo o marketing do zero. Hoje meu delivery tem presença forte nas redes e vendas todo dia.',
    name: 'Ana Souza',
    biz: 'Açaí da Ana',
    metric: 'R$18k → R$52k/mês',
    avatar: 'A',
  },
  {
    quote: 'Investi no plano Premium e foi a melhor decisão do ano. Em 3 meses recuperei o valor investido e meu faturamento aumentou mais de 80%.',
    name: 'Marcos Costa',
    biz: 'Pizza do Marcos',
    metric: '+82% faturamento',
    avatar: 'M',
  },
];

const SocialProof = () => (
  <section className="section section--dark" data-screen-label="05 Prova social">
    <div className="container">
      <div className="section-header section-header--center">
        <div className="section-header__intro">
          <span className="eyebrow">[05 — prova social]</span>
          <h2 className="h-section">Números que <span className="orange">não dão</span> margem pra dúvida.</h2>
        </div>
      </div>

      <div className="stats">
        <Stat value={100} label="clientes ativos" suffix=""/>
        <Stat value={10} label="em vendas geradas" format={(n)=>`R$${n}M`}/>
        <Stat value={2} label="anos focados em delivery"/>
      </div>

      <div className="testimonials">
        {TESTIMONIALS.map((t, i) => (
          <article key={i} className="testimonial">
            <div className="testimonial__stars">★★★★★</div>
            <p className="testimonial__quote">"{t.quote}"</p>
            <span className="testimonial__metric">↗ {t.metric}</span>
            <div className="testimonial__author">
              <div className="testimonial__avatar">{t.avatar}</div>
              <div>
                <p className="testimonial__name">{t.name}</p>
                <p className="testimonial__biz">{t.biz}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

Object.assign(window, { SocialProof });
