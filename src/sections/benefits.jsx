// Benefits — bento grid
const Benefits = () => (
  <section className="section section--light" data-screen-label="04 Benefícios">
    <div className="container">
      <div className="section-header">
        <div className="section-header__intro">
          <span className="eyebrow">[04 — benefícios]</span>
          <h2 className="h-section">O que muda<br/>no seu delivery.</h2>
        </div>
        <p className="lead">
          Sete trocas concretas que acontecem assim que a Nova Era assume seu marketing.
          Nada de promessa vaga.
        </p>
      </div>

      <div className="benefits-grid">
        <div className="benefit benefit--orange benefit--span-2">
          <span className="benefit__num">01</span>
          <h3 className="benefit__title">Você para de depender de sorte.</h3>
          <p className="benefit__desc">Seu delivery passa a ter um sistema previsível de aquisição de clientes — todos os dias, não em ondas.</p>
          {/* Decorative chart */}
          <svg viewBox="0 0 200 60" style={{width:'100%', height:60, marginTop:'auto'}} preserveAspectRatio="none">
            <path d="M0 50 L20 48 L40 52 L60 40 L80 42 L100 30 L120 32 L140 22 L160 18 L180 8 L200 4" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
        </div>

        <div className="benefit benefit--span-1">
          <span className="benefit__num">02</span>
          <h3 className="benefit__title">Seu iFood volta a aparecer.</h3>
          <p className="benefit__desc">Otimização completa do perfil, campanhas e posicionamento no app.</p>
        </div>

        <div className="benefit benefit--dark benefit--span-1">
          <span className="benefit__num">03</span>
          <h3 className="benefit__title">Anúncios trabalham<br/>enquanto você dorme.</h3>
          <p className="benefit__desc">Tráfego pago no Meta e Google atraindo clientes com fome, 24/7.</p>
        </div>

        <div className="benefit benefit--span-2">
          <span className="benefit__num">04</span>
          <h3 className="benefit__title">Você não precisa virar especialista em marketing.</h3>
          <p className="benefit__desc">O time cuida de tudo. Você foca em operar, atender e entregar bem.</p>
          <div style={{display:'flex', gap:8, marginTop:'auto', flexWrap:'wrap'}}>
            <span style={{background:'var(--paper-2)', padding:'6px 12px', borderRadius:999, fontSize:12, fontFamily:'var(--font-mono)'}}>tráfego pago</span>
            <span style={{background:'var(--paper-2)', padding:'6px 12px', borderRadius:999, fontSize:12, fontFamily:'var(--font-mono)'}}>iFood</span>
            <span style={{background:'var(--paper-2)', padding:'6px 12px', borderRadius:999, fontSize:12, fontFamily:'var(--font-mono)'}}>redes</span>
            <span style={{background:'var(--paper-2)', padding:'6px 12px', borderRadius:999, fontSize:12, fontFamily:'var(--font-mono)'}}>conteúdo</span>
          </div>
        </div>

        <div className="benefit benefit--span-md">
          <span className="benefit__num">05</span>
          <h3 className="benefit__title">Redes deixam de ser enfeite.</h3>
          <p className="benefit__desc">Presença constante que gera engajamento e pedido real.</p>
        </div>

        <div className="benefit benefit--span-md">
          <span className="benefit__num">06</span>
          <h3 className="benefit__title">Clareza do que funciona.</h3>
          <p className="benefit__desc">Relatórios que mostram número, não desculpa.</p>
        </div>

        <div className="benefit benefit--span-md">
          <span className="benefit__num">07</span>
          <h3 className="benefit__title">Escala sem mais horas suas.</h3>
          <p className="benefit__desc">A operação de marketing roda sozinha, com time dedicado.</p>
        </div>

        <div className="benefit benefit--dark benefit--span-md">
          <span className="benefit__num">+</span>
          <h3 className="benefit__title">Veja na prática.</h3>
          <p className="benefit__desc" style={{marginBottom:12}}>Agende uma conversa com um especialista — gratuito.</p>
          <a href="#form" className="btn btn--primary" style={{padding:'12px 18px', fontSize:14}}>
            Agendar <Icon.ArrowRight size={14}/>
          </a>
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Benefits });
