// Phone mockup components — iFood-style listing + Instagram-style profile

const IFoodPhone = ({ style, className }) => (
  <div className={`phone ${className || ''}`} style={style}>
    <div className="phone__notch"></div>
    <div className="phone__screen" style={{background:'#FFFFFF', display:'flex', flexDirection:'column'}}>
      {/* Status bar */}
      <div style={{padding:'14px 22px 4px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:11, fontWeight:600, color:'#111'}}>
        <span>9:41</span>
        <span style={{display:'flex', gap:4, alignItems:'center'}}>
          <svg width="14" height="9" viewBox="0 0 18 11" fill="none"><rect x="0" y="3" width="2" height="5" rx="1" fill="#111"/><rect x="4" y="2" width="2" height="6" rx="1" fill="#111"/><rect x="8" y="1" width="2" height="7" rx="1" fill="#111"/><rect x="12" y="0" width="2" height="8" rx="1" fill="#111"/></svg>
          <svg width="14" height="9" viewBox="0 0 18 11" fill="none"><rect x="1" y="1" width="13" height="9" rx="2" stroke="#111" strokeWidth="1"/></svg>
        </span>
      </div>
      {/* iFood-style header */}
      <div style={{padding:'24px 18px 12px', background:'#fff'}}>
        <div style={{display:'flex', alignItems:'center', gap:8, marginBottom:14}}>
          <div style={{width:28, height:28, background:'#EA1D2C', borderRadius:'50%', display:'grid', placeItems:'center', color:'#fff', fontWeight:800, fontSize:13, fontFamily:'var(--font-display)'}}>i</div>
          <span style={{fontWeight:700, fontSize:14, color:'#111'}}>Delivery</span>
          <span style={{marginLeft:'auto', fontSize:11, color:'#666'}}>Buscar</span>
        </div>
        {/* Search */}
        <div style={{background:'#F5F5F5', borderRadius:10, padding:'10px 12px', display:'flex', alignItems:'center', gap:8, fontSize:12, color:'#888'}}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
          Burguer artesanal
        </div>
      </div>
      {/* Banner */}
      <div style={{margin:'8px 18px', borderRadius:14, background:'linear-gradient(135deg,#FF4800,#E63E00)', padding:'18px 16px', color:'#fff'}}>
        <div style={{fontFamily:'var(--font-mono)', fontSize:9, opacity:0.85, letterSpacing:'0.08em', textTransform:'uppercase'}}>Patrocinado</div>
        <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:17, lineHeight:1.1, marginTop:4, letterSpacing:'-0.01em'}}>40% OFF<br/>na primeira compra</div>
        <div style={{fontSize:10, marginTop:6, opacity:0.92}}>Burguer House · Pedir agora</div>
      </div>
      {/* Restaurant card 1 - your delivery */}
      <div style={{margin:'12px 18px 6px', display:'flex', gap:12, padding:'10px', borderRadius:12, border:'1.5px solid #FF4800', background:'rgba(255,72,0,0.04)', alignItems:'center'}}>
        <div style={{width:44, height:44, borderRadius:10, background:'#FF4800', display:'grid', placeItems:'center', color:'#fff', fontWeight:800, fontFamily:'var(--font-display)', fontSize:16}}>B</div>
        <div style={{flex:1, minWidth:0}}>
          <div style={{fontSize:12, fontWeight:700, color:'#111', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <span>Burguer House <span style={{background:'#FF4800', color:'#fff', fontSize:8, padding:'1px 5px', borderRadius:4, marginLeft:4, verticalAlign:'middle'}}>TOP</span></span>
          </div>
          <div style={{fontSize:10, color:'#666', marginTop:2, display:'flex', gap:6}}>
            <span style={{color:'#FF4800', fontWeight:600}}>★ 4.9</span>
            <span>·</span>
            <span>20–30min</span>
            <span>·</span>
            <span>Grátis</span>
          </div>
        </div>
      </div>
      <div style={{margin:'0 18px 6px', display:'flex', gap:12, padding:'10px', alignItems:'center'}}>
        <div style={{width:44, height:44, borderRadius:10, background:'#E5E5E5'}}></div>
        <div style={{flex:1}}>
          <div style={{fontSize:12, fontWeight:600, color:'#111'}}>Pizza Tradicional</div>
          <div style={{fontSize:10, color:'#666', marginTop:2}}>★ 4.6 · 40–50min · R$ 6,99</div>
        </div>
      </div>
      <div style={{margin:'0 18px 6px', display:'flex', gap:12, padding:'10px', alignItems:'center'}}>
        <div style={{width:44, height:44, borderRadius:10, background:'#E5E5E5'}}></div>
        <div style={{flex:1}}>
          <div style={{fontSize:12, fontWeight:600, color:'#111'}}>Sushi Express</div>
          <div style={{fontSize:10, color:'#666', marginTop:2}}>★ 4.4 · 35–45min · R$ 8,99</div>
        </div>
      </div>
    </div>
  </div>
);

const InstagramPhone = ({ style, className }) => (
  <div className={`phone ${className || ''}`} style={style}>
    <div className="phone__notch"></div>
    <div className="phone__screen" style={{background:'#FFFFFF', display:'flex', flexDirection:'column'}}>
      <div style={{padding:'14px 22px 4px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:11, fontWeight:600, color:'#111'}}>
        <span>9:41</span>
        <span style={{display:'flex', gap:4}}>
          <svg width="14" height="9" viewBox="0 0 18 11" fill="none"><rect x="0" y="3" width="2" height="5" rx="1" fill="#111"/><rect x="4" y="2" width="2" height="6" rx="1" fill="#111"/><rect x="8" y="1" width="2" height="7" rx="1" fill="#111"/><rect x="12" y="0" width="2" height="8" rx="1" fill="#111"/></svg>
        </span>
      </div>
      {/* Instagram header */}
      <div style={{padding:'18px 16px 12px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #eee'}}>
        <div style={{fontFamily:'cursive, "Brush Script MT"', fontSize:18, fontWeight:600, color:'#111'}}>delivery</div>
        <div style={{display:'flex', gap:14, color:'#111'}}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        </div>
      </div>
      {/* Profile */}
      <div style={{padding:'16px', display:'flex', gap:18, alignItems:'center'}}>
        <div style={{width:64, height:64, borderRadius:'50%', padding:2.5, background:'linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)'}}>
          <div style={{width:'100%', height:'100%', borderRadius:'50%', background:'#FF4800', display:'grid', placeItems:'center', color:'#fff', fontWeight:800, fontFamily:'var(--font-display)', fontSize:24, border:'2px solid #fff'}}>B</div>
        </div>
        <div style={{display:'flex', gap:18, flex:1, justifyContent:'space-around'}}>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:14, fontWeight:700, color:'#111'}}>248</div>
            <div style={{fontSize:9, color:'#666'}}>posts</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:14, fontWeight:700, color:'#111'}}>14,2K</div>
            <div style={{fontSize:9, color:'#666'}}>seguidores</div>
          </div>
          <div style={{textAlign:'center'}}>
            <div style={{fontSize:14, fontWeight:700, color:'#111'}}>318</div>
            <div style={{fontSize:9, color:'#666'}}>seguindo</div>
          </div>
        </div>
      </div>
      <div style={{padding:'0 16px 12px'}}>
        <div style={{fontSize:12, fontWeight:700, color:'#111'}}>Burguer House</div>
        <div style={{fontSize:11, color:'#444', marginTop:2}}>Hambúrguer artesanal · Centro</div>
        <div style={{fontSize:11, color:'#0095f6', marginTop:2}}>📍 Peça pelo iFood</div>
      </div>
      {/* CTA buttons */}
      <div style={{padding:'0 16px 12px', display:'flex', gap:8}}>
        <button style={{flex:1, background:'#FF4800', color:'#fff', border:'none', padding:'7px 0', borderRadius:8, fontSize:11, fontWeight:600, fontFamily:'inherit'}}>Pedir agora</button>
        <button style={{flex:1, background:'#F0F0F0', color:'#111', border:'none', padding:'7px 0', borderRadius:8, fontSize:11, fontWeight:600, fontFamily:'inherit'}}>Contato</button>
      </div>
      {/* Grid */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:2, padding:'0 1px'}}>
        {[
          {bg:'linear-gradient(135deg,#FF4800,#B82F00)', label:'+87%'},
          {bg:'#1a1a1a', label:''},
          {bg:'linear-gradient(135deg,#F5F5F5,#E0E0E0)', label:''},
          {bg:'linear-gradient(135deg,#111,#2a2a2a)', label:'PROMO'},
          {bg:'#FF4800', label:''},
          {bg:'linear-gradient(135deg,#2a2a2a,#0a0a0a)', label:''},
        ].map((it, i) => (
          <div key={i} style={{aspectRatio:'1', background:it.bg, display:'grid', placeItems:'center'}}>
            {it.label && <span style={{color:'#fff', fontFamily:'var(--font-display)', fontWeight:800, fontSize:14, letterSpacing:'-0.02em'}}>{it.label}</span>}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ResultsPhone = ({ style, className }) => (
  <div className={`phone ${className || ''}`} style={style}>
    <div className="phone__notch"></div>
    <div className="phone__screen" style={{background:'#0F0F0F', color:'#fff', display:'flex', flexDirection:'column'}}>
      <div style={{padding:'14px 22px 4px', display:'flex', justifyContent:'space-between', alignItems:'center', fontSize:11, fontWeight:600, color:'#fff'}}>
        <span>9:41</span>
      </div>
      <div style={{padding:'24px 20px 12px'}}>
        <div style={{fontFamily:'var(--font-mono)', fontSize:10, color:'#888', letterSpacing:'0.08em', textTransform:'uppercase'}}>Pedidos · 30 dias</div>
        <div style={{display:'flex', alignItems:'baseline', gap:8, marginTop:4}}>
          <div style={{fontFamily:'var(--font-display)', fontWeight:800, fontSize:34, letterSpacing:'-0.02em', color:'#fff'}}>R$ 52.840</div>
        </div>
        <div style={{display:'inline-flex', alignItems:'center', gap:6, marginTop:6, background:'rgba(255,72,0,0.15)', color:'#FF4800', padding:'4px 10px', borderRadius:999, fontSize:11, fontWeight:600}}>
          ↑ +186% vs mês anterior
        </div>
      </div>
      {/* Chart */}
      <div style={{padding:'12px 20px', height:140, position:'relative'}}>
        <svg viewBox="0 0 240 120" style={{width:'100%', height:'100%'}} preserveAspectRatio="none">
          <defs>
            <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#FF4800" stopOpacity="0.4"/>
              <stop offset="100%" stopColor="#FF4800" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <path d="M0,95 L20,90 L40,92 L60,80 L80,82 L100,70 L120,68 L140,55 L160,48 L180,38 L200,28 L220,18 L240,10 L240,120 L0,120 Z" fill="url(#g1)"/>
          <path d="M0,95 L20,90 L40,92 L60,80 L80,82 L100,70 L120,68 L140,55 L160,48 L180,38 L200,28 L220,18 L240,10" fill="none" stroke="#FF4800" strokeWidth="2"/>
          <circle cx="240" cy="10" r="3.5" fill="#FF4800"/>
          <circle cx="240" cy="10" r="6" fill="#FF4800" opacity="0.3"/>
        </svg>
      </div>
      <div style={{padding:'8px 20px', display:'flex', justifyContent:'space-between', fontSize:9, fontFamily:'var(--font-mono)', color:'#666'}}>
        <span>D1</span><span>D7</span><span>D14</span><span>D21</span><span>D30</span>
      </div>
      {/* Cards */}
      <div style={{padding:'14px 20px 0', display:'flex', flexDirection:'column', gap:8}}>
        <div style={{background:'#1a1a1a', borderRadius:10, padding:'10px 12px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <div style={{fontSize:10, color:'#888'}}>iFood</div>
            <div style={{fontSize:13, fontWeight:600, color:'#fff'}}>1.284 pedidos</div>
          </div>
          <div style={{color:'#FF4800', fontSize:11, fontWeight:600}}>+212%</div>
        </div>
        <div style={{background:'#1a1a1a', borderRadius:10, padding:'10px 12px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
          <div>
            <div style={{fontSize:10, color:'#888'}}>Meta Ads</div>
            <div style={{fontSize:13, fontWeight:600, color:'#fff'}}>R$ 4.20 CPL</div>
          </div>
          <div style={{color:'#FF4800', fontSize:11, fontWeight:600}}>−38%</div>
        </div>
      </div>
    </div>
  </div>
);

Object.assign(window, { IFoodPhone, InstagramPhone, ResultsPhone });
