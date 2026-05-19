// Final CTA — orange section, big closer + form + PS
const FinalCTA = () => (
  <section className="section section--orange" data-screen-label="10 CTA final" id="form-final">
    <div className="container">
      <div className="final-cta">
        <span className="eyebrow" style={{color:'#fff'}}>[10 — última chamada]</span>
        <h2 className="h-display" style={{color:'#fff', fontSize:'clamp(48px, 7vw, 110px)'}}>
          A questão não é <em style={{fontStyle:'normal', background:'#111', padding:'0 16px', borderRadius:8}}>se</em> você vai escalar.
          <br/>É <span style={{textDecoration:'underline', textDecorationThickness:6, textUnderlineOffset:8}}>quando</span>.
        </h2>
        <p className="lead" style={{color:'rgba(255,255,255,0.92)', textAlign:'center', maxWidth:'60ch', fontSize:'clamp(18px, 1.5vw, 22px)'}}>
          Deliveries com produto bom, equipe montada e operação rodando não deveriam estar estagnados. O que falta é o sistema de marketing certo, executado por quem entende do seu mercado.
        </p>

        <div id="form" style={{
          marginTop:32,
          padding:0,
          width:'100%',
          maxWidth:520,
        }}>
          <LeadForm
            variant="inverse"
            title="Preencha agora. Especialista em 5 minutos."
            subtitle="Sem compromisso. Só uma conversa que pode mudar o seu delivery."
            ctaLabel="Quero triplicar meus pedidos em 90 dias"
          />
        </div>

        <div className="ps" style={{marginTop:48, background:'#111', color:'#fff', borderLeftColor:'#fff'}}>
          <strong style={{color:'#fff', fontFamily:'var(--font-mono)', fontSize:13, letterSpacing:'0.08em', textTransform:'uppercase', display:'block', marginBottom:8}}>P.S.</strong>
          Se você leu até aqui, já sabe que o problema não é o seu delivery — é a falta do sistema certo pra fazê-lo crescer. A Nova Era já gerou <strong style={{color:'#FF4800', background:'none', padding:0}}>mais de R$ 10 milhões em vendas</strong> pra deliveries como o seu. E o próximo pode ser o seu.
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { FinalCTA });
