// Offer + Objections + Guarantee — agrupadas numa seção white com 3 blocos
const OFFER_ITEMS = [
  'Diagnóstico completo do seu delivery',
  'Gestão de tráfego pago (Meta Ads e/ou Google)',
  'Gestão completa do seu iFood',
  'Gestão de 1 ou 2 redes sociais',
  'Consultoria de conteúdo estratégico',
  'Relatórios semanais de resultado',
  'Time dedicado exclusivamente ao seu delivery',
];

const OBJECTIONS = [
  {
    quote: 'Já tentei agência antes e não funcionou.',
    answer: <>Essa é a objeção que mais ouvimos — e faz todo sentido ter. A maioria vende marketing genérico pra qualquer negócio. Delivery tem lógica completamente diferente: ticket médio baixo, decisão por impulso, dependência de app, sazonalidade por horário. <strong>A Nova Era só atende delivery.</strong> Nosso time não atende restaurante, e-commerce ou loja física. Isso muda tudo na estratégia e no resultado.</>
  },
  {
    quote: 'Não sei se tenho budget pra isso.',
    answer: <>A pergunta certa não é "quanto custa". É <strong>quanto você está deixando de faturar</strong> sem marketing. Se seu delivery está estagnado, o custo de não fazer nada cresce todo mês. A conversa com nosso especialista é gratuita — você sai dela sabendo exatamente o que faz sentido pro seu momento.</>
  },
  {
    quote: 'Não tenho tempo pra acompanhar isso.',
    answer: <>Você não precisa. É exatamente pra isso que a gente existe. O time executa de forma independente. Você recebe os resultados, participa de reuniões objetivas e <strong>foca no que é seu: operar o delivery</strong>. O marketing roda sem depender da sua disponibilidade.</>
  },
];

const Offer = () => (
  <section className="section section--white" data-screen-label="06 Oferta">
    <div className="container">
      <div className="section-header">
        <div className="section-header__intro">
          <span className="eyebrow">[06 — oferta]</span>
          <h2 className="h-section">A gente não vende<br/>pacote fechado.</h2>
        </div>
        <p className="lead">
          Avaliamos o momento do seu delivery e montamos a solução certa pra você — sem cobrar por serviço que não vai usar, sem deixar lacuna no que importa.
        </p>
      </div>

      <div className="offer-card">
        <div>
          <span className="eyebrow" style={{marginBottom:18, display:'inline-flex'}}>O que pode estar incluso</span>
          <ul className="offer-list" style={{marginTop:18}}>
            {OFFER_ITEMS.map((it,i) => (
              <li key={i} className="offer-item">
                <span className="offer-item__check"><Icon.Check size={12}/></span>
                {it}
              </li>
            ))}
          </ul>
        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'space-between', gap:24}}>
          <div>
            <h3 className="h-sub" style={{marginBottom:16}}>
              Sem contrato longo de fidelidade. Sem letra miúda. <span className="orange">Só resultado.</span>
            </h3>
            <p style={{color:'var(--muted-light)', fontSize:15, lineHeight:1.6}}>
              O primeiro passo é uma conversa de 15 minutos. Um especialista entende a situação real do seu delivery e apresenta o plano ideal pra você.
            </p>
          </div>
          <div style={{
            background:'var(--paper)',
            borderRadius:16,
            padding:'20px 24px',
            display:'flex',
            alignItems:'center',
            gap:16,
            border:'1px solid var(--line-light)'
          }}>
            <Icon.Clock size={24}/>
            <div>
              <div style={{fontFamily:'var(--font-display)', fontWeight:700, fontSize:16, letterSpacing:'-0.01em'}}>Resposta em 5 minutos</div>
              <div style={{fontSize:13, color:'var(--muted-light)'}}>Em horário comercial (seg–sex, 9h–19h)</div>
            </div>
          </div>
          <a href="#form" className="btn btn--primary btn--lg" style={{justifyContent:'center'}}>
            Quero meu plano personalizado <Icon.ArrowRight/>
          </a>
        </div>
      </div>

      {/* Objections */}
      <div style={{marginTop:120}}>
        <div className="section-header">
          <div className="section-header__intro">
            <span className="eyebrow">[07 — vamos falar a verdade]</span>
            <h2 className="h-section">As três objeções<br/>que você está pensando agora.</h2>
          </div>
          <p className="lead">
            Já ouvimos as três centenas de vezes. Aqui está a resposta direta — sem rodeio comercial.
          </p>
        </div>

        <div className="objections">
          {OBJECTIONS.map((o, i) => (
            <div key={i} className="objection">
              <p className="objection__quote">{o.quote}</p>
              <p className="objection__answer">{o.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

Object.assign(window, { Offer });
