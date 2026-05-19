// FAQ — accordion
const { useState: useStateFAQ } = React;

const FAQS = [
  { q: 'Vocês atendem qualquer tipo de delivery?', a: 'Atendemos deliveries que já têm operação rodando e buscam crescimento. Se você já tem movimento de pedidos mas está estagnado, é exatamente pra você que a Nova Era foi criada.' },
  { q: 'Em quanto tempo vou ver resultado?', a: 'Os primeiros sinais aparecem nas primeiras semanas. Resultados expressivos — como triplicar os pedidos — acontecem em até 90 dias com o método completo em execução.' },
  { q: 'Preciso entender de marketing pra trabalhar com vocês?', a: 'Não. Você foca em operar, a gente foca em crescer. As reuniões são objetivas e os relatórios mostram número, não jargão técnico.' },
  { q: 'Como funciona depois que eu preencho o formulário?', a: 'Um especialista entra em contato em até 5 minutos (em horário comercial). Ele entende a situação do seu delivery e apresenta a solução ideal pra você — sem compromisso.' },
  { q: 'Posso cancelar quando quiser?', a: 'Sim. Não trabalhamos com contrato de longo prazo forçado. Ficamos porque entregamos resultado, não porque você está preso.' },
  { q: 'E se eu não gostar do serviço?', a: 'Temos garantia de 30 dias. Se sentir que não estamos cumprindo o prometido, devolvemos seu investimento. Sem questionamento.' },
  { q: 'Quais formas de pagamento?', a: 'Definidas na conversa com o especialista, conforme o plano escolhido. Trabalhamos com as principais formas do mercado.' },
  { q: 'A Nova Era cuida do meu Instagram e iFood ao mesmo tempo?', a: 'Sim. Dependendo do plano, o time cuida de tráfego pago, iFood, redes sociais e conteúdo — tudo integrado na mesma estratégia.' },
];

const FAQ = () => {
  const [open, setOpen] = useStateFAQ(0);
  return (
    <section className="section section--white" data-screen-label="09 FAQ">
      <div className="container">
        <div className="section-header">
          <div className="section-header__intro">
            <span className="eyebrow">[09 — perguntas]</span>
            <h2 className="h-section">Tudo que <span className="underline-orange">você</span><br/>quer saber.</h2>
          </div>
          <p className="lead">
            As perguntas que mais aparecem na conversa com o especialista — respondidas aqui, sem rodeio.
          </p>
        </div>

        <div className="faq">
          {FAQS.map((f, i) => (
            <div key={i} className={`faq-item ${open === i ? 'faq-item--open' : ''}`}>
              <button
                type="button"
                className="faq-item__btn"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                <span>{f.q}</span>
                <span className="faq-item__icon"><Icon.Plus/></span>
              </button>
              <div className="faq-item__body">
                <p className="faq-item__answer">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

Object.assign(window, { FAQ });
