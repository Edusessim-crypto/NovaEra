// Guarantee + Urgency — combined section on light bg
const { useState: useStateGU, useEffect: useEffectGU } = React;

const Guarantee = () => {
  // animated slot counter (urgency)
  const [slots] = useStateGU(() => Math.floor(Math.random() * 3) + 3); // 3-5

  return (
    <section className="section section--light" data-screen-label="08 Garantia">
      <div className="container">
        <div className="section-header">
          <div className="section-header__intro">
            <span className="eyebrow">[08 — garantia]</span>
            <h2 className="h-section">O risco<br/>fica com a gente.</h2>
          </div>
          <p className="lead">
            Mais de 100 deliveries já passaram pela Nova Era. Sabemos o que funciona — e assumimos o risco junto com você.
          </p>
        </div>

        <div className="guarantee">
          {/* Seal */}
          <div className="guarantee__seal">
            <svg viewBox="0 0 220 220" style={{width:'100%', height:'100%'}}>
              <defs>
                <path id="circlePath" d="M 110,110 m -88,0 a 88,88 0 1,1 176,0 a 88,88 0 1,1 -176,0"/>
              </defs>
              <g className="guarantee__seal-rotate" style={{transformOrigin:'110px 110px'}}>
                <circle cx="110" cy="110" r="100" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
                <text fill="rgba(255,255,255,0.6)" style={{fontFamily:'var(--font-mono)', fontSize:11, letterSpacing:'0.3em'}}>
                  <textPath href="#circlePath">GARANTIA · 30 DIAS · DEVOLUÇÃO TOTAL · GARANTIA · 30 DIAS · DEVOLUÇÃO TOTAL · </textPath>
                </text>
              </g>
              <circle cx="110" cy="110" r="68" fill="var(--orange)"/>
              <text x="110" y="98" textAnchor="middle" fill="#fff" style={{fontFamily:'var(--font-display)', fontSize:18, fontWeight:700, letterSpacing:'-0.01em'}}>GARANTIA</text>
              <text x="110" y="138" textAnchor="middle" fill="#fff" style={{fontFamily:'var(--font-display)', fontSize:42, fontWeight:800, letterSpacing:'-0.03em'}}>30</text>
              <text x="110" y="158" textAnchor="middle" fill="#fff" style={{fontFamily:'var(--font-mono)', fontSize:10, letterSpacing:'0.15em'}}>DIAS</text>
            </svg>
          </div>

          <div>
            <h3 className="h-sub" style={{fontSize:'clamp(28px, 3vw, 40px)', marginBottom:20}}>
              Se nos primeiros 30 dias você sentir que não estamos entregando o que prometemos, <span className="orange">a gente devolve seu investimento</span>.
            </h3>
            <p style={{color:'var(--muted-dark)', fontSize:16, lineHeight:1.6, marginBottom:24, maxWidth:'56ch'}}>
              Sem burocracia, sem questionamento. Falamos isso com confiança porque acreditamos no método — e porque nosso interesse é seu delivery crescendo, não te prender em contrato.
            </p>
            <div style={{display:'flex', gap:24, flexWrap:'wrap'}}>
              <div style={{display:'flex', gap:10, alignItems:'center', fontSize:13, color:'var(--muted-dark)'}}>
                <span className="offer-item__check"><Icon.Check size={11}/></span>
                Sem fidelidade
              </div>
              <div style={{display:'flex', gap:10, alignItems:'center', fontSize:13, color:'var(--muted-dark)'}}>
                <span className="offer-item__check"><Icon.Check size={11}/></span>
                Cancela quando quiser
              </div>
              <div style={{display:'flex', gap:10, alignItems:'center', fontSize:13, color:'var(--muted-dark)'}}>
                <span className="offer-item__check"><Icon.Check size={11}/></span>
                Reembolso sem questionar
              </div>
            </div>
          </div>
        </div>

        {/* Urgency */}
        <div className="urgency" style={{marginTop:64}}>
          <div className="urgency__icon"><Icon.Warn size={32}/></div>
          <div>
            <h3 className="urgency__title">Cada delivery recebe atenção dedicada.</h3>
            <p className="urgency__body">
              Por isso a Nova Era trabalha com limite de vagas por time. Garanta sua conversa enquanto ainda há espaço neste mês.
            </p>
          </div>
          <div className="urgency__slots">
            <span className="urgency__slots-num">{slots}</span>
            <span>vagas restantes<br/>em maio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Guarantee });
