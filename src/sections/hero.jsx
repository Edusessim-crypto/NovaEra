// Hero — headline + subhead + lead form + floating phone mockups
const HEADLINES = {
  A: {
    title: <>Seu Delivery Pode <span className="orange">Triplicar</span> os Pedidos em 90 Dias.</>,
    sub: 'A Nova Era é a assessoria especializada em deliveries que coloca um time completo pra trabalhar pelo seu negócio — enquanto você foca em operar. Sem achismo. Sem enrolação. Só resultado.'
  },
  B: {
    title: <>Parou de Crescer?<br/>A Culpa <span className="orange">Não é</span> do Seu Delivery.</>,
    sub: 'É problema de marketing — e marketing de delivery tem uma lógica própria que agência genérica não domina. A Nova Era nasceu pra resolver exatamente isso.'
  },
  C: {
    title: <>Um <span className="orange">Time de Marketing</span> Dedicado ao Seu Delivery. Resultado em 90 Dias.</>,
    sub: 'Tráfego pago, iFood, redes sociais e conteúdo estratégico executados todos os dias por quem só atende delivery. Você foca em operar — a gente cuida do resto.'
  }
};

const Hero = ({ headline }) => {
  const h = HEADLINES[headline] || HEADLINES.A;
  return (
    <section className="hero" data-screen-label="01 Hero">
      {/* Decorative orange block */}
      <div aria-hidden="true" style={{
        position:'absolute', right:'-12%', top:'-8%', width:580, height:580,
        background:'var(--orange)', borderRadius:'50%', opacity:0.12, filter:'blur(2px)'
      }}></div>
      <div aria-hidden="true" style={{
        position:'absolute', left:'-10%', bottom:'-20%', width:400, height:400,
        background:'#111', borderRadius:'50%', opacity:0.04
      }}></div>

      <div className="container">
        <div className="hero__grid">
          <div className="hero__copy">
            <div className="hero__chips">
              <span className="chip"><span className="chip__dot chip__dot--pulse"></span>+100 deliveries atendidos</span>
              <span className="chip">+R$10M em vendas geradas</span>
            </div>

            <h1 className="h-display">{h.title}</h1>
            <p className="lead">{h.sub}</p>

            <LeadForm
              title="Fale com um especialista agora"
              subtitle="Preencha e a gente te liga no WhatsApp em até 5 minutos."
              ctaLabel="Quero triplicar meus pedidos"
            />
          </div>

          <div className="hero__visual">
            {/* Background orange shape */}
            <div aria-hidden="true" className="hero-blob" style={{
              position:'absolute', right:'5%', top:'8%', width:'70%', aspectRatio:'1',
              background:'var(--orange)', borderRadius:'18%', transform:'rotate(-4deg)', maxWidth:380
            }}></div>

            <IFoodPhone style={{top:'2%', right:'24%', transform:'rotate(-6deg)', zIndex:2}}/>
            <InstagramPhone style={{top:'22%', right:'-8%', transform:'rotate(8deg)', zIndex:3}}/>

            {/* Hand-drawn arrow */}
            <svg className="hand-arrow hero-arrow" style={{bottom:'8%', left:'2%', width:140, height:100, color:'var(--ink)'}} viewBox="0 0 160 120" fill="none">
              <path d="M10 30 C 30 10, 80 5, 120 35 C 140 50, 130 75, 90 85 C 60 92, 40 88, 30 95" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M28 88 L30 95 L38 92" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            <div className="hero-arrow-label" style={{
              position:'absolute', bottom:'12%', left:'-2%', transform:'rotate(-6deg)',
              fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, color:'var(--ink)',
              maxWidth:130, lineHeight:1.1, zIndex:4
            }}>
              seu delivery,<br/>finalmente <span className="orange">crescendo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Hero });
