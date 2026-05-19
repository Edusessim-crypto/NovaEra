// Footer
const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__grid">
        <div>
          <img src="assets/logo-horizontal-light.png" alt="Nova Era — Marketing para Deliveries" className="footer__logo"/>
          <p className="footer__tag">A assessoria de marketing especializada em deliveries que crescem.</p>
          <div style={{display:'flex', gap:10}}>
            <a href="#" style={{width:36, height:36, borderRadius:'50%', border:'1px solid var(--line-dark)', display:'grid', placeItems:'center', color:'var(--muted-dark)'}}>
              <Icon.Instagram size={16}/>
            </a>
            <a href="#" style={{width:36, height:36, borderRadius:'50%', border:'1px solid var(--line-dark)', display:'grid', placeItems:'center', color:'var(--muted-dark)'}}>
              <Icon.Whatsapp size={16}/>
            </a>
          </div>
        </div>
        <div>
          <h4 className="footer__heading">Nova Era</h4>
          <ul className="footer__list">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Método</a></li>
            <li><a href="#">Resultados</a></li>
            <li><a href="#">Vagas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer__heading">Serviços</h4>
          <ul className="footer__list">
            <li><a href="#">Tráfego pago</a></li>
            <li><a href="#">Gestão de iFood</a></li>
            <li><a href="#">Redes sociais</a></li>
            <li><a href="#">Conteúdo estratégico</a></li>
          </ul>
        </div>
        <div>
          <h4 className="footer__heading">Contato</h4>
          <ul className="footer__list">
            <li>contato@novaera.com.br</li>
            <li>WhatsApp (11) 99999-9999</li>
            <li>seg–sex · 9h–19h</li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <span>© 2026 Nova Era · Marketing para Deliveries</span>
        <span><a href="#">Política de privacidade</a> · <a href="#">LGPD</a></span>
      </div>
    </div>
  </footer>
);

Object.assign(window, { Footer });
