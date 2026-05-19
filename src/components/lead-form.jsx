// Lead form — name, WhatsApp, current revenue, with validation
const { useState } = React;

const REVENUE_OPTIONS = [
  { v: '', label: 'Selecione…' },
  { v: '0-15', label: 'Até R$ 15 mil/mês' },
  { v: '15-30', label: 'R$ 15 a 30 mil/mês' },
  { v: '30-60', label: 'R$ 30 a 60 mil/mês' },
  { v: '60-100', label: 'R$ 60 a 100 mil/mês' },
  { v: '100+', label: 'Acima de R$ 100 mil/mês' },
];

function formatPhone(v) {
  const digits = v.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return digits;
  if (digits.length <= 7) return `(${digits.slice(0,2)}) ${digits.slice(2)}`;
  if (digits.length <= 10) return `(${digits.slice(0,2)}) ${digits.slice(2,6)}-${digits.slice(6)}`;
  return `(${digits.slice(0,2)}) ${digits.slice(2,7)}-${digits.slice(7)}`;
}

const LeadForm = ({ variant, title, subtitle, ctaLabel }) => {
  const [form, setForm] = useState({ name: '', phone: '', revenue: '', consent: true });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const update = (k, v) => {
    setForm(f => ({ ...f, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: null }));
  };

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Conta seu nome aí';
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 10) e.phone = 'WhatsApp com DDD, por favor';
    if (!form.revenue) e.revenue = 'Escolhe uma faixa';
    if (!form.consent) e.consent = 'Precisa aceitar pra continuar';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitting(true);
      setTimeout(() => {
        setSubmitting(false);
        setSubmitted(true);
      }, 900);
    }
  };

  if (submitted) {
    return (
      <div className={`lead-form ${variant === 'inverse' ? 'lead-form--inverse' : ''}`}>
        <div className="lead-form__success">
          <div className="lead-form__success-icon">
            <Icon.Check size={28}/>
          </div>
          <div>
            <h3 className="lead-form__title" style={{textAlign:'center'}}>Recebido. Falamos em até 5 minutos.</h3>
            <p className="lead-form__sub" style={{textAlign:'center', marginTop:8}}>
              Um especialista da Nova Era vai te ligar no WhatsApp <strong style={{color: variant === 'inverse' ? '#fff' : '#111'}}>{form.phone}</strong> agora.
            </p>
          </div>
          <div style={{display:'flex', alignItems:'center', gap:8, fontSize:12, fontFamily:'var(--font-mono)', opacity:0.7}}>
            <span style={{width:6, height:6, background:'#FF4800', borderRadius:'50%', animation:'pulse 1.6s infinite'}}></span>
            ESPECIALISTA CONECTANDO
          </div>
        </div>
      </div>
    );
  }

  return (
    <form className={`lead-form ${variant === 'inverse' ? 'lead-form--inverse' : ''}`} onSubmit={handleSubmit} noValidate>
      <div className="lead-form__header">
        <h3 className="lead-form__title">{title || 'Fale com um especialista'}</h3>
        <p className="lead-form__sub">{subtitle || 'Resposta em até 5 minutos. Sem compromisso.'}</p>
      </div>

      <div className={`field ${errors.name ? 'field--error' : ''}`}>
        <label className="field__label">Seu nome</label>
        <input
          className="field__input"
          type="text"
          placeholder="João Silva"
          value={form.name}
          onChange={e => update('name', e.target.value)}
          autoComplete="name"
        />
        {errors.name && <p className="field__error">{errors.name}</p>}
      </div>

      <div className={`field ${errors.phone ? 'field--error' : ''}`}>
        <label className="field__label">WhatsApp</label>
        <input
          className="field__input"
          type="tel"
          placeholder="(11) 99999-9999"
          value={form.phone}
          onChange={e => update('phone', formatPhone(e.target.value))}
          autoComplete="tel"
        />
        {errors.phone && <p className="field__error">{errors.phone}</p>}
      </div>

      <div className={`field ${errors.revenue ? 'field--error' : ''}`}>
        <label className="field__label">Faturamento mensal do delivery</label>
        <select className="field__select" value={form.revenue} onChange={e => update('revenue', e.target.value)}>
          {REVENUE_OPTIONS.map(o => <option key={o.v} value={o.v}>{o.label}</option>)}
        </select>
        {errors.revenue && <p className="field__error">{errors.revenue}</p>}
      </div>

      <button type="submit" className="btn btn--primary lead-form__submit btn--lg" disabled={submitting}>
        {submitting ? 'Enviando…' : (ctaLabel || 'Quero triplicar meus pedidos')}
        {!submitting && <Icon.ArrowRight/>}
      </button>

      <label className="lead-form__consent">
        <input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)} />
        <span>
          Ao preencher, você concorda com nossa <a href="#privacy">Política de Privacidade</a> e com o tratamento dos seus dados conforme a LGPD.
        </span>
      </label>
      {errors.consent && <p className="field__error" style={{marginTop:6}}>{errors.consent}</p>}
    </form>
  );
};

Object.assign(window, { LeadForm });
