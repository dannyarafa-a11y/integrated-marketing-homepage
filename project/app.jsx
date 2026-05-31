/* ===== App + Tweaks ===== */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "Growth (default)",
  "heroReel": false,
  "serviceLayout": "2-up",
  "loveLayout": "Checklist",
  "industries": ["SaaS","B2B","Ecommerce","Local / SMB","Healthcare","Legal"]
}/*EDITMODE-END*/;

const ALL_INDUSTRIES = ["SaaS","B2B","Ecommerce","Local / SMB","Healthcare","Legal"];

function App(){
  const [t,setTweak]=useTweaks(TWEAK_DEFAULTS);
  const shown = (t.industries&&t.industries.length)?t.industries:ALL_INDUSTRIES;

  const toggleInd=(key)=>{
    const cur=t.industries||ALL_INDUSTRIES;
    const next=cur.includes(key)?cur.filter(x=>x!==key):[...cur,key];
    setTweak("industries", next.length?next:[key]);
  };

  return (
    <React.Fragment>
      <Nav/>
      <Hero variant={t.heroVariant} showReel={t.heroReel}/>
      <Logos/>
      <Why2026/>
      <Services layout={t.serviceLayout}/>
      <HowItWorks/>
      <ResultsGallery/>
      <Cases/>
      <Stats/>
      <WhyLove layout={t.loveLayout}/>
      <Industries shown={shown}/>
      <Testimonials/>
      <Founder/>
      <Playbook/>
      <BigCTA/>
      <FAQ/>
      <SmallCTA/>
      <Footer/>

      <TweaksPanel>
        <TweakSection label="Hero"/>
        <TweakSelect label="Headline copy" value={t.heroVariant}
          options={["Growth (default)","Revenue","Be Found Everywhere"]}
          onChange={v=>setTweak("heroVariant",v)}/>
        <TweakToggle label="Hero video reel" value={t.heroReel}
          onChange={v=>setTweak("heroReel",v)}/>

        <TweakSection label="Services"/>
        <TweakRadio label="Grid layout" value={t.serviceLayout}
          options={["3-up","2-up","List"]}
          onChange={v=>setTweak("serviceLayout",v)}/>

        <TweakSection label="Why founders love us"/>
        <TweakRadio label="Layout" value={t.loveLayout}
          options={["Checklist","Cards","Detailed"]}
          onChange={v=>setTweak("loveLayout",v)}/>

        <TweakSection label="Industries shown"/>
        <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
          {ALL_INDUSTRIES.map(key=>{
            const on=shown.includes(key);
            return (
              <button key={key} onClick={()=>toggleInd(key)}
                style={{fontFamily:"inherit",fontSize:12,fontWeight:600,padding:"7px 12px",borderRadius:999,cursor:"pointer",
                  border:"1px solid "+(on?"transparent":"rgba(0,0,0,.15)"),
                  background:on?"#111827":"transparent",color:on?"#fff":"#374151",transition:".15s"}}>
                {key}
              </button>
            );
          })}
        </div>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
