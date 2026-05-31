/* ===== Top sections: Nav, Hero, Logos, Services, How It Works, Chips ===== */

function Nav(){
  const [scrolled,setScrolled]=React.useState(false);
  React.useEffect(()=>{
    const f=()=>setScrolled(window.scrollY>20);
    f();window.addEventListener("scroll",f);return()=>window.removeEventListener("scroll",f);
  },[]);
  const links=[["SEO","#services"],["GEO / AIO","#services"],["SEM","#services"],["Email","#services"],["Industries","#industries"],["Case Studies","#cases"],["About","#founder"]];
  return (
    <nav className={"nav"+(scrolled?" scrolled":"")}>
      <div className="wrap nav-inner">
        <a className="brand" href="#top"><img src={RES("logo","assets/logo.svg")} alt="Integrated" style={{height:30,width:"auto"}}/></a>
        <div className="nav-links">
          {links.map(([t,h],i)=><a key={i} href={h}>{t}</a>)}
        </div>
        <div className="nav-cta">
          <a className="btn btn-white btn-sm" href="#cta">Book Call</a>
        </div>
      </div>
    </nav>
  );
}

function Hero({variant, showReel}){
  const v=HERO_VARIANTS[variant]||HERO_VARIANTS["Growth (default)"];
  return (
    <header className="hero" id="top">
      <div className="hero-banner">
        <div className="hero-banner-glow"></div>
        <div className="wrap center hero-content">
          <div className="eyebrow on-grad" style={{justifyContent:"center",marginBottom:24}}>
            <span className="dot"></span>{v.attn}
          </div>
          <h1 className="h-display" style={{maxWidth:880,margin:"0 auto 26px"}}>
            <b>{v.pre} {v.mid}</b> {v.post}
          </h1>
          <p className="lead on-grad" style={{maxWidth:600,margin:"0 auto 32px"}}>{v.sub}</p>
          <div style={{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"}}>
            <a className="btn btn-white" href="#cta">Apply To Work With Us</a>
            {showReel&&<a className="btn btn-glass" href="#cta"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:2}}><path d="M8 5v14l11-7z"/></svg>Watch Reel</a>}
          </div>
          <div className="roi-row">
            {ROI_CALLOUTS.map((r,i)=>(
              <div key={i} className="roi-item">
                <span className="roi-big">{r.big}</span>
                <span className="roi-small">{r.small}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}

function Logos(){
  const marks=[
    {t:"LuckyCigar",shape:"circle",w:600},
    {t:"BRICKELL",w:700,ls:".22em"},
    {t:"Rokform",w:600,italic:true},
    {t:"SkinSociety",shape:"diamond",w:500},
    {t:"PROLON",w:700,ls:".18em"},
    {t:"Shade&Shack",w:600},
    {t:"HEMPONIX",shape:"square",w:700,ls:".14em"},
    {t:"Staple\u2009&\u2009Co",w:500},
    {t:"LuxHomebar",w:600,italic:true},
    {t:"Shaplaboo",shape:"circle",w:600},
    {t:"NORTHPRINT",w:700,ls:".16em"},
    {t:"LuxSquare",shape:"square",w:500},
  ];
  return (
    <section className="section tight">
      <div className="wrap">
        <p className="kicker">Trusted by over 70+ brands</p>
        <div className="logos">
          {marks.map((m,i)=>(
            <div className="logo-ph" key={i} style={{fontWeight:m.w,letterSpacing:m.ls||"0",fontStyle:m.italic?"italic":"normal"}}>
              {m.shape&&<span className={"lmark "+m.shape}></span>}
              {m.t}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services({layout}){
  const colClass = layout==="List"?"list":(layout==="2-up"?"cols-2":"cols-3");
  const isList = layout==="List";
  return (
    <section className="section" id="services">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Services</p>
          <h2 className="h2"><b>One Agency.</b> Every Growth Channel.</h2>
          <p className="lead">We run the full funnel under one roof, so you stop stitching together five vendors and let one team own your growth across every channel.</p>
        </div>
        <div className={"svc-grid "+colClass}>
          {SERVICES.map((s,i)=>(
            <div className={"card hov svc-card"+(isList?" list":"")} key={i}>
              <div className="svc-icon">{Icon[s.ic]}</div>
              <div className="svc-body">
                <h3>{s.name}</h3>
                <p className="body" style={{margin:"8px 0 0"}}>{s.blurb}</p>
                <div className="tags">{s.tags.map((t,j)=><span className="tag" key={j}>{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks(){
  const wrapRef=React.useRef(null);
  const railRef=React.useRef(null);
  const [active,setActive]=React.useState(0);
  const [fill,setFill]=React.useState(0);

  React.useEffect(()=>{
    const onScroll=()=>{
      const rail=railRef.current; if(!rail) return;
      const nodes=rail.querySelectorAll('.hiw-step');
      const anchor=window.innerHeight*0.5;
      const railBox=rail.getBoundingClientRect();
      let act=0;
      nodes.forEach((n,i)=>{
        const dot=n.querySelector('.hiw-node').getBoundingClientRect();
        if(dot.top+dot.height/2<=anchor) act=i;
      });
      setActive(act);
      const railH=rail.scrollHeight;
      const f=Math.max(0,Math.min(1,(anchor-railBox.top)/railH));
      setFill(f*100);
    };
    onScroll();
    window.addEventListener('scroll',onScroll,{passive:true});
    window.addEventListener('resize',onScroll);
    return()=>{window.removeEventListener('scroll',onScroll);window.removeEventListener('resize',onScroll);};
  },[]);

  return (
    <section className="section hiw" id="how">
      <div className="wrap hiw-layout" ref={wrapRef}>
        <div className="hiw-head">
          <p className="kicker" style={{textAlign:"left",marginBottom:14}}>Process</p>
          <h2 className="h2"><b>How</b> It Works</h2>
          <p className="body" style={{marginTop:16,maxWidth:340}}>One growth model, run for every client, no matter the channel mix. Five steps from first audit to compounding revenue.</p>
          <div className="hiw-counter">
            <span className="hiw-counter-now">{String(active+1).padStart(2,"0")}</span>
            <span className="hiw-counter-sep">/</span>
            <span className="hiw-counter-tot">{String(STEPS.length).padStart(2,"0")}</span>
          </div>
          <a className="btn btn-grad" href="#cta" style={{marginTop:28}}>Book a Free Demo</a>
        </div>
        <div className="hiw-timeline" ref={railRef}>
          <div className="hiw-rail"><div className="hiw-rail-fill" style={{height:fill+"%"}}></div></div>
          {STEPS.map((s,i)=>(
            <div className={"hiw-step"+(i<=active?" active":"")+(i===active?" current":"")} key={i}>
              <div className="hiw-node">{String(i+1).padStart(2,"0")}</div>
              <div className="hiw-step-body">
                <span className="step-tag">Step {String(i+1).padStart(2,"0")}</span>
                <h3 className="h3"><b>{s.pre}</b> {s.post}</h3>
                <p className="body" style={{marginTop:8}}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window,{Nav,Hero,Logos,Services,HowItWorks});
