// Pain identification section (light bg, big quotes-like list)
const PAINS = [
  'Seu delivery vende todo dia, mas o faturamento não cresce há meses',
  'Você posta nas redes, mas não sabe se aquilo está gerando pedido de verdade',
  'Já tentou agência antes — e jogou dinheiro fora sem ver resultado',
  'Seu iFood está parado, com nota baixa ou sumido nas buscas',
  'Você sabe que precisa de marketing, mas não tem tempo nem cabeça pra isso',
  'No fim do dia, você continua sendo o único responsável por tudo',
];

const Pain = () => (
  <section className="section section--light" data-screen-label="02 Dor">
    <div className="container">
      <div className="section-header">
        <div className="section-header__intro">
          <span className="eyebrow">[02 — diagnóstico]</span>
          <h2 className="h-section">Você reconhece alguma <span className="underline-orange">dessas situações</span>?</h2>
        </div>
        <p className="lead">
          Seis sinais que repetem em todo delivery estagnado que chega até a gente.
          Marque mentalmente os que se aplicam.
        </p>
      </div>

      <div className="pain-list">
        {PAINS.map((p, i) => (
          <div key={i} className="pain-item">
            <span className="pain-item__num">0{i+1}</span>
            <p className="pain-item__text">{p}</p>
          </div>
        ))}
      </div>

      <div style={{
        marginTop: 56,
        background: 'var(--ink)',
        color: 'var(--white)',
        padding: '32px 40px',
        borderRadius: 24,
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        <div style={{maxWidth: '60ch'}}>
          <div className="h-sub">
            Se você se viu em pelo menos uma dessas, o problema <span className="orange">não é o seu produto</span>.
          </div>
          <p style={{margin:'10px 0 0', fontSize:15, color:'var(--muted-dark)'}}>
            É que você ainda não tem o sistema certo pra crescer.
          </p>
        </div>
        <a href="#form" className="btn btn--primary btn--lg">
          Quero o sistema certo <Icon.ArrowRight/>
        </a>
      </div>
    </div>
  </section>
);

Object.assign(window, { Pain });
