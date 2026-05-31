/* ===== Bottom sections ===== */

function ResultsGallery(){
  const tiles = [
    "screenshot: organic traffic growth chart",
    "screenshot: keyword rankings, page one",
    "screenshot: AI Overview citation",
    "screenshot: ChatGPT brand recommendation",
    "screenshot: revenue dashboard, MoM",
    "screenshot: backlink & authority gain",
  ];
  return (
    <section className="section" id="proof">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Proof</p>
          <h2 className="h2">What <b>Sets Us Apart</b></h2>
          <p className="lead">We don't ask you to take our word for it. These are the kinds of ranking and AI-visibility wins our growth model produces, pulled straight from client accounts.</p>
        </div>
        <div className="proof-grid">
          {tiles.map((t,i)=>(
            <div className="mesh proof-tile" key={i}>
              <span className="ph-label">{t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats(){
  return (
    <section className="section stats-sec">
      <div className="wrap">
        <div className="stats-head">
          <div>
            <p className="kicker" style={{textAlign:"left",marginBottom:14}}>By the numbers</p>
            <h2 className="h2">We're a <b>Revenue-Driven</b> Agency</h2>
          </div>
          <a className="stats-link" href="#cases">
            See the results
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
          </a>
        </div>
        <div className="stat-band">
          {STATS.map((s,i)=>(
            <div className="stat-cell" key={i}>
              <span className="stat-tag">{s.tag}</span>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why2026(){
  return (
    <section className="section">
      <div className="wrap two-col">
        <div>
          <p className="eyebrow" style={{marginBottom:18}}><span className="dot"></span>Why now</p>
          <h2 className="h2"><b>Why Search & AI</b> in 2026?</h2>
          <p className="body" style={{marginTop:18,maxWidth:480,fontSize:16.5}}>
            63% of online journeys still start with a search, and a fast-growing share now start inside ChatGPT, Gemini and AI Overviews. Paid ads keep getting more expensive and easier to ignore. The brands that win own organic <i>and</i> AI visibility, then convert it with paid, email and web.
          </p>
        </div>
        <div>
          {WHY_FEATURES.map((f,i)=>(
            <div className="feat-row" key={i}>
              <div className="feat-ic"><img src={f.img} alt=""/></div>
              <span>{f.t}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Industries({shown}){
  const list = INDUSTRIES.filter(x=>shown.includes(x.key));
  return (
    <section className="section" id="industries">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Industries</p>
          <h2 className="h2"><b>Industries</b> We Scale</h2>
          <p className="lead">Deep expertise across every market we serve. We adapt the growth model to the buyers you're chasing, whatever you sell.</p>
        </div>
        <div className="ind-grid">
          {list.map((x,i)=>(
            <div className="card hov ind-card" key={i}>
              <div className="ind-top">
                <span className="ind-ic">{x.code}</span>
                <span className="ind-glyph">{Icon[x.ic]}</span>
              </div>
              <h3>{x.name}</h3>
              <p className="body">{x.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing(){
  return (
    <section className="section" id="pricing">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">A few ways we can help</p>
          <h2 className="h2"><b>Engagement</b> Options</h2>
        </div>
        <div className="price-grid">
          {PRICING.map((p,i)=>(
            <div className={"card price-card"+(p.featured?" featured":"")} key={i}>
              {p.featured&&<span className="pill" style={{position:"absolute",top:-12,left:28}}>Most Popular</span>}
              <h3 className="h3" style={{fontSize:21}}>{p.name}</h3>
              <div className="price">{p.price}<small>{p.unit||""}</small></div>
              <div className="sub">{p.sub}</div>
              <ul className="price-list">{p.feat.map((f,j)=><li key={j}>{f}</li>)}</ul>
              <a className={"btn "+(p.featured?"btn-grad":"btn-ghost")} href="#cta" style={{marginTop:"auto"}}>Get Started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyLove({layout}){
  const groups=[
    {label:"Our Team", items:LOVE.team},
    {label:"Our Guarantee", items:LOVE.guarantee},
  ];
  const Check=()=>(
    <span className="love-check">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
    </span>
  );

  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Why choose us</p>
          <h2 className="h2">Why <b>Founders Love</b> Working With Us</h2>
        </div>

        {layout==="Checklist" && (
          <div className="love-checklist">
            {groups.map((g,gi)=>(
              <div className="love-col" key={gi}>
                <div className="love-colhead"><span className="love-label">{g.label}</span><span className="love-line"></span></div>
                <ul className="love-ul">
                  {g.items.map((it,i)=>(
                    <li key={i}><Check/><span><b>{it[0]}</b></span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {layout==="Cards" && groups.map((g,gi)=>(
          <div className="love-group" key={gi}>
            <div className="love-grouphead"><span className="love-line"></span><span className="love-label">{g.label}</span><span className="love-line"></span></div>
            <div className="love-cardgrid">
              {g.items.map((it,i)=>(
                <div className="card love-card" key={i}>
                  <Check/>
                  <div><b>{it[0]}</b><p className="body">{it[1]}</p></div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {layout==="Detailed" && groups.map((g,gi)=>(
          <div className="love-group" key={gi}>
            <div className="love-grouphead"><span className="love-line"></span><span className="love-label">{g.label}</span><span className="love-line"></span></div>
            <div className="love-cards">
              {g.items.map((it,i)=>(
                <div className="love-mini" key={i}>
                  <Check/>
                  <b>{it[0]}</b>
                  <p className="body">{it[1]}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="center" style={{marginTop:48}}>
          <a className="btn btn-white" href="#cta">Apply To Work With Us</a>
        </div>
      </div>
    </section>
  );
}

function Playbook(){
  return (
    <section className="section">
      <div className="wrap">
        <div className="card playbook-card" style={{padding:0,overflow:"hidden",display:"grid",gridTemplateColumns:"1fr 1fr",gap:0}}>
          <div style={{padding:"54px 48px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
            <p className="eyebrow" style={{marginBottom:16}}><span className="dot"></span>Free Playbook</p>
            <h2 className="h2" style={{fontSize:"clamp(26px,3vw,40px)"}}>The Exact <b>Growth Playbook</b> We Run for Every Client</h2>
            <p className="body" style={{margin:"18px 0 28px",fontSize:16,maxWidth:440}}>Steal the full blueprint behind $13M in tracked revenue: the channels, sequencing and systems we use to scale brands. No fluff, no email gate.</p>
            <a className="btn btn-grad" href="#cta" style={{alignSelf:"flex-start"}}>Get the Free Playbook</a>
          </div>
          <div className="mesh" style={{minHeight:320}}>
            <span className="ph-label">screenshot: growth model playbook</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials(){
  const [i,setI]=React.useState(0);
  const per=2; const pages=Math.ceil(TESTIMONIALS.length/per);
  const slice=TESTIMONIALS.slice(i*per,i*per+per);
  return (
    <section className="section">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Testimonials</p>
          <h2 className="h2">Customer <b>Testimonials</b></h2>
          <p className="lead">What current and past clients have to say about working with us.</p>
        </div>
        <div className="svc-grid cols-2">
          {slice.map((t,k)=>(
            <div className="card tcard" key={k}>
              <q>"{t.q}"</q>
              <div className="tperson">
                <div className="tavatar" style={{backgroundImage:`url('${t.img}')`,backgroundSize:"cover",backgroundPosition:"center"}}></div>
                <div><div className="nm">{t.nm}</div><div className="rl">{t.rl}</div></div>
              </div>
            </div>
          ))}
        </div>
        <div style={{display:"flex",gap:10,justifyContent:"center",marginTop:30}}>
          {Array.from({length:pages}).map((_,p)=>(
            <button key={p} onClick={()=>setI(p)} aria-label={"page "+(p+1)}
              style={{width:p===i?28:10,height:10,borderRadius:999,border:"none",cursor:"pointer",
                background:p===i?"linear-gradient(120deg,#5468ff,#e993f1)":"rgba(255,255,255,.18)",transition:".25s"}}/>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cases(){
  return (
    <section className="section" id="cases">
      <div className="wrap">
        <div className="sec-head">
          <p className="kicker">Case Studies</p>
          <h2 className="h2"><b>Case</b> Studies</h2>
          <p className="lead">Notable campaign results we've accumulated.</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:22}}>
          {CASES.map((c,i)=>(
            <div className="card cs-card" key={i}>
              <div className="mesh cs-media"><span className="ph-label">video: {c.title.toLowerCase()} case study</span></div>
              <div className="cs-body">
                <span className="pill ghost">{c.tag}</span>
                <h3 className="h3" style={{margin:"14px 0 8px"}}><b>{c.title}:</b> {c.win}</h3>
                <p className="body">{c.desc}</p>
                <div className="cs-compare">
                  <div className="cs-col"><h5>Before Integrated</h5>{c.before.map((b,j)=>(<div className="cs-stat" key={j}><span className="muted">{b[0]}</span><b>{b[1]}</b></div>))}</div>
                  <div className="cs-col after"><h5>After Implementation</h5>{c.after.map((b,j)=>(<div className="cs-stat" key={j}><span className="muted">{b[0]}</span><b>{b[1]}</b></div>))}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigCTA(){
  return (
    <section className="section" id="cta">
      <div className="wrap">
        <div className="bigcta grad">
          <div className="hero-banner-glow"></div>
          <div style={{position:"relative",zIndex:2}}>
            <h2 className="h2" style={{maxWidth:760,margin:"0 auto 16px"}}><b>Scale Your Revenue</b> With Our Growth Model</h2>
            <p className="lead on-grad" style={{maxWidth:520,margin:"0 auto 30px"}}>Book a free demo call and we'll map the fastest path to growth for your brand.</p>
            <a className="btn btn-white" href="#" onClick={e=>e.preventDefault()}>Schedule a Free Demo Call</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Founder(){
  return (
    <section className="section" id="founder">
      <div className="wrap founder">
        <div className="founder-img" style={{background:"#fff url('"+RES("founder","assets/founder.jpg")+"') center 35%/cover"}}></div>
        <div>
          <p className="eyebrow" style={{marginBottom:18}}><span className="dot"></span>Founder's note</p>
          <h2 className="h2" style={{fontSize:"clamp(24px,2.6vw,34px)",marginBottom:18}}><b>Founder's</b> Note</h2>
          <p className="body" style={{fontSize:17,lineHeight:1.7,maxWidth:620}}>
            Organic and AI-driven visibility matter more every year. Our blueprint covers the entire growth funnel across search, AI search, paid, email and web, all under one roof. We've spent years in the trenches helping brands grow, and when owners choose to work with us, they can trust we'll take care of them and deliver clear, measurable, tangible results.
          </p>
          <div style={{marginTop:24}}>
            <div style={{fontWeight:600,fontSize:16}}>Elie Akl</div>
            <div className="muted" style={{fontSize:14}}>CEO · Growth Strategist</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQ(){
  const [open,setOpen]=React.useState(0);
  return (
    <section className="section">
      <div className="wrap two-col" style={{alignItems:"start"}}>
        <div style={{position:"sticky",top:100}}>
          <p className="kicker" style={{textAlign:"left"}}>FAQ</p>
          <h2 className="h2">Frequently Asked <b>Questions</b></h2>
          <a className="btn btn-grad" href="#cta" style={{marginTop:24}}>Book a Free Demo</a>
        </div>
        <div>
          {FAQS.map((f,i)=>(
            <div className={"faq-item"+(open===i?" open":"")} key={i}>
              <div className="faq-q" onClick={()=>setOpen(open===i?-1:i)}>
                <span>{f[0]}</span>
                <span className="ico">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </div>
              <div className="faq-a"><p>{f[1]}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SmallCTA(){
  return (
    <section className="section" style={{paddingTop:0}}>
      <div className="wrap">
        <div className="smallcta">
          <div>
            <h3 className="h3" style={{margin:0}}>Still weighing your options?</h3>
            <p className="body" style={{margin:"6px 0 0"}}>Grab a free 30-minute growth call. No pitch, just a clear read on your fastest path to revenue.</p>
          </div>
          <a className="btn btn-grad" href="#cta" style={{flexShrink:0}}>Book a Free Call</a>
        </div>
      </div>
    </section>
  );
}

function Footer(){
  const cols=[
    ["Services",["SEO","GEO / AIO","SEM","Email"]],
    ["Company",["About","Case Studies","Resources","Affiliate Program","Contact"]],
    ["Legal",["Privacy Policy","Terms of Service","Manage Subscription"]],
  ];
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div style={{maxWidth:280}}>
            <a className="brand" href="#top"><img src={RES("logo","assets/logo.svg")} alt="Integrated" style={{height:28,width:"auto"}}/></a>
            <p className="body" style={{marginTop:16,fontSize:14}}>The full-funnel growth partner behind 70+ ambitious brands. Search, AI, paid, email & web, all under one roof.</p>
          </div>
          <div className="foot-links">
            {cols.map((c,i)=>(
              <div className="foot-col" key={i}>
                <h5>{c[0]}</h5>
                {c[1].map((l,j)=><a href="#" key={j} onClick={e=>e.preventDefault()}>{l}</a>)}
              </div>
            ))}
          </div>
        </div>
        <div style={{borderTop:"1px solid var(--line)",marginTop:40,paddingTop:24,display:"flex",justifyContent:"space-between",flexWrap:"wrap",gap:12}}>
          <span className="muted" style={{fontSize:13}}>© 2026 IntegratedX. All rights reserved.</span>
          <span className="muted" style={{fontSize:13}}>Built for brands ready to scale.</span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window,{ResultsGallery,Stats,Why2026,Industries,Pricing,WhyLove,Playbook,Testimonials,Cases,BigCTA,Founder,FAQ,SmallCTA,Footer});
