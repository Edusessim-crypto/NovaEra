// Método: 4 etapas com accordion interativo
const { useState: useStateMethod } = React;

const METHOD_STEPS = [
  { num: '01', icon: 'Diagnose', title: 'Diagnóstico', desc: 'Analisamos tudo: concorrência, posicionamento, iFood, redes, operação. A gente mapeia onde está o gargalo antes de gastar um centavo em anúncio.' },
  { num: '02', icon: 'Strategy', title: 'Estratégia', desc: 'Montamos um plano feito pra sua realidade — não pra um delivery genérico. Com metas claras e ações que fazem sentido pro seu momento.' },
  { num: '03', icon: 'Execute', title: 'Execução', desc: 'O time coloca o plano em prática todos os dias. Tráfego pago, iFood, conteúdo, redes sociais. Você não precisa acompanhar cada detalhe — é pra isso que a gente existe.' },
  { num: '04', icon: 'Growth', title: 'Crescimento', desc: 'Acompanhamos os números de perto, escalamos o que funciona e cortamos o que não gera pedido. Sem achismo.' },
];

const Method = () => {
  const [active, setActive] = useStateMethod(0);
  return (
    <section className="section section--dark" data-screen-label="03 Método">
      <div className="container">
        <div className="section-header">
          <div className="section-header__intro">
            <span className="eyebrow">[03 — método]</span>
            <h2 className="h-section">A Nova Era não é uma agência<br/>que manda <span style={{textDecoration:'line-through', opacity:0.5}}>relatório bonito</span><br/>no fim do mês.</h2>
          </div>
          <p className="lead">
            É um time que entra no seu delivery como sócio de marketing — e executa todo dia.
            Nosso método tem 4 etapas claras.
          </p>
        </div>

        <div className="method-steps">
          {METHOD_STEPS.map((s, i) => {
            const Ico = Icon[s.icon];
            return (
              <div
                key={s.num}
                className={`method-step ${active === i ? 'method-step--active' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="method-step__num">{s.num} / 04</div>
                <div className="method-step__body">
                  <h3 className="method-step__title">{s.title}</h3>
                  <p className="method-step__desc">{s.desc}</p>
                </div>
                <div className="method-step__icon"><Ico/></div>
              </div>
            );
          })}
        </div>

        <div style={{marginTop:48, textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-display)', fontSize:'clamp(20px,2vw,28px)', fontWeight:600, letterSpacing:'-0.015em', maxWidth:'42ch', margin:'0 auto', lineHeight:1.25}}>
            É assim que deliveries estagnados voltam a crescer — e chegam a <span className="orange">triplicar os pedidos em 90 dias</span>.
          </p>
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { Method });
