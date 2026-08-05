const CTA = "Start a project";

const services = [
  ["01", "Landscape architecture", "Places shaped for daily life, long-term stewardship, and the character of Northern Nevada."],
  ["02", "Park planning", "Public landscapes that balance play, access, safety, maintenance, and a strong sense of place."],
  ["03", "Irrigation design", "Water-conscious systems designed around climate, plant communities, and operational realities."],
  ["04", "Arboriculture", "Informed care for trees across planning, design, assessment, and the life of a landscape."],
];

const people = [
  ["Ryan Hansen", "Founding Partner / Managing Member", "NV PLA #440 · ISA Certified Arborist"],
  ["Marc Chapelle", "Senior Landscape Architect", "NV PLA #622"],
  ["Joe Hitzel", "Senior Landscape Architect", "NV PLA #543 · Defensible Space Professional"],
  ["Lindsey Ellington", "Project Landscape Architect", "NV PLA #1079 · Defensible Space Professional"],
  ["Kelli Du Fresne", "Project Landscape Architect", "NV PLA #1039 · Certified Nurseryman"],
  ["Dan Johnston", "General Manager", "NV PLA #1243 · ISA Arborist · CPSI"],
];

export default function Page() {
  return (
    <main>
      <nav className="nav" aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="L.A. Studio Nevada home">
          <span className="brandMark">LA</span>
          <span>L.A. Studio <b>Nevada</b></span>
        </a>
        <div className="navLinks">
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#studio">Studio</a>
        </div>
        <a className="button buttonSmall" href="mailto:ryan@lastudionevada.com?subject=Project inquiry">{CTA} <span>↗</span></a>
      </nav>

      <header id="top" className="hero">
        <img src="/images/bd83d2f088c1552baad8dc69e8fa-766ee10c55.jpg" alt="A designed Northern Nevada outdoor landscape" />
        <div className="heroShade" />
        <div className="heroCopy">
          <p className="eyebrow light">Landscape architecture · Sparks, Nevada</p>
          <h1>Grounded here.<br /><i>Designed for life.</i></h1>
          <div className="heroBottom">
            <p>We plan enduring parks and outdoor spaces for the high desert communities we call home.</p>
            <a className="button buttonLight" href="mailto:ryan@lastudionevada.com?subject=Project inquiry">{CTA} <span>↗</span></a>
          </div>
        </div>
        <span className="scroll">Scroll to explore</span>
      </header>

      <section className="proofBar" aria-label="Studio credentials">
        <span>Since <strong>1998</strong></span>
        <span>Licensed <strong>Landscape Architects</strong></span>
        <span>Serving <strong>Northern Nevada</strong></span>
      </section>

      <section id="work" className="legacy splitSection">
        <div className="imageFrame tall">
          <img src="/images/e6c52059cc263105f6d9d4ae1deb-e6970b9261.jpg" alt="A completed landscape architecture project in Northern Nevada" />
          <span className="imageLabel">Built for the long view</span>
        </div>
        <div className="sectionCopy">
          <p className="eyebrow">01 / Rooted practice</p>
          <h2>Designing this landscape since 1998.</h2>
          <p className="lead">For more than 25 years, L.A. Studio Nevada has helped shape the parks and outdoor spaces of Northern Nevada.</p>
          <p>We understand the high desert as both a constraint and an opportunity. Our work responds to water, climate, maintenance, public use, and the particular communities each place serves.</p>
          <div className="yearStamp"><strong>25+</strong><span>years of local<br />practice</span></div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="servicesIntro">
          <p className="eyebrow light">02 / One integrated studio</p>
          <h2>From the first line<br />to a living landscape.</h2>
          <p>Planning, design, technical expertise, and care brought together under one roof.</p>
        </div>
        <div className="servicesImage">
          <img src="/images/f81c9e6526bca90399c667e76b73-c0824132d9.jpg" alt="Detail of a landscape design project" />
        </div>
        <div className="serviceList">
          {services.map(([number, title, description]) => (
            <article className="service" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
          <article className="service safety">
            <span>+</span>
            <h3>Playground safety inspections</h3>
            <p>Certified expertise for safer, more resilient places to play.</p>
          </article>
        </div>
      </section>

      <section id="studio" className="credentials">
        <div className="credentialHeading">
          <p className="eyebrow">03 / Qualified by practice</p>
          <h2>The right expertise,<br /><i>at the same table.</i></h2>
          <p>Our team includes licensed landscape architects, ISA Certified Arborists, and Certified Playground Safety Inspectors.</p>
        </div>
        <div className="credentialVisual">
          <img src="/images/47b5f2a4b26a071b945c2dc9a6b0-6a3c77c3f9.jpg" alt="The L.A. Studio Nevada team and practice" />
          <div className="seal"><span>PLA</span><small>Licensed<br />professionals</small></div>
        </div>
        <div className="people">
          {people.map(([name, role, qualifications]) => (
            <article key={name}>
              <h3>{name}</h3>
              <p>{role}</p>
              <small>{qualifications}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="culture splitSection">
        <div className="sectionCopy">
          <p className="eyebrow">04 / Studio culture</p>
          <h2>Serious about the work.<br /><i>Not ourselves.</i></h2>
          <p className="lead">A collaborative Sparks studio with deep technical experience and four-legged quality control.</p>
          <p>Our dog-friendly office reflects how we work: open, grounded, and better when everyone has a place at the table.</p>
        </div>
        <div className="imageFrame cultureImage">
          <img src="/images/554820c330703d1fcef9daa82edf-c1983f43d7.jpg" alt="Delilah, the studio's small dog park expert" />
          <span className="imageLabel">Delilah · Small Dog Park Expert</span>
        </div>
      </section>

      <section className="faq">
        <div className="faqPhoto">
          <img src="/images/0e5ec5e45c69b1ac3cb363ed17c4-bbdea8da1d.jpg" alt="A welcoming public outdoor space designed for Northern Nevada" />
          <p>Good places begin<br />with good questions.</p>
        </div>
        <div className="faqList">
          <p className="eyebrow">Common questions</p>
          <h2>Before we begin.</h2>
          <details open>
            <summary>What projects do you take on?<span>+</span></summary>
            <p>We work across landscape architecture, park planning, irrigation design, arboriculture, and playground safety inspections.</p>
          </details>
          <details>
            <summary>Where do you work?<span>+</span></summary>
            <p>Our studio is based in Sparks, with a practice focused on Northern Nevada and its high desert communities.</p>
          </details>
          <details>
            <summary>Who will work on my project?<span>+</span></summary>
            <p>Your project is supported by a multidisciplinary team of licensed and certified professionals, matched to its needs.</p>
          </details>
          <details>
            <summary>How do we start?<span>+</span></summary>
            <p>Send us a short note about your site, goals, timing, and team. We will follow up to discuss fit and next steps.</p>
          </details>
        </div>
      </section>

      <section className="finalCta">
        <img src="/images/1058507f6b27c9d828c701d4d96f-75ea4fc9a9.jpg" alt="Northern Nevada landscape at dusk" />
        <div className="finalShade" />
        <div>
          <p className="eyebrow light">Bring us your next place</p>
          <h2>Let’s make something<br /><i>that belongs here.</i></h2>
          <a className="button buttonLight" href="mailto:ryan@lastudionevada.com?subject=Project inquiry">{CTA} <span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footerBrand"><span className="brandMark">LA</span><p>L.A. Studio <b>Nevada</b><small>Landscape Architecture</small></p></div>
        <div><small>Visit</small><p>1552 C Street<br />Sparks, NV 89431</p></div>
        <div><small>Call</small><p><a href="tel:+17753232223">775.323.2223</a></p></div>
        <div><small>Navigate</small><p><a href="#work">Work</a><br /><a href="#services">Services</a><br /><a href="#studio">Studio</a></p></div>
        <p className="copyright">© 2026 L.A. Studio Nevada LLC</p>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Instrument+Serif:ital@0;1&display=swap');
        :root{--ink:#183129;--paper:#f1eee6;--clay:#c76443;--sage:#9baa8f;--line:rgba(24,49,41,.2)}
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--paper);color:var(--ink);font-family:'DM Sans',sans-serif}a{color:inherit;text-decoration:none}img{display:block;width:100%;height:100%;object-fit:cover}h1,h2,h3,p{margin-top:0}h1,h2{font-family:'Instrument Serif',serif;font-weight:400;line-height:.94;letter-spacing:-.03em}h2{font-size:clamp(3.5rem,6.5vw,7rem)}.eyebrow{text-transform:uppercase;letter-spacing:.16em;font-size:.69rem;font-weight:600}.light{color:#e8e7d8}.nav{height:88px;padding:0 4vw;display:flex;align-items:center;justify-content:space-between;background:var(--paper)}.brand,.footerBrand{display:flex;align-items:center;gap:12px;font-size:1rem}.brandMark{display:grid;place-items:center;width:42px;height:42px;border:1px solid currentColor;border-radius:50%;font-family:'Instrument Serif';font-size:1.15rem}.navLinks{display:flex;gap:34px;font-size:.82rem}.button{display:inline-flex;justify-content:space-between;align-items:center;gap:30px;background:var(--clay);color:white;padding:17px 20px;min-width:190px;text-transform:uppercase;letter-spacing:.12em;font-size:.68rem;font-weight:600}.button span{font-size:1rem}.buttonSmall{min-width:170px;padding:14px 17px}.buttonLight{background:#e9e4d5;color:var(--ink)}.hero{height:calc(100svh - 88px);min-height:650px;position:relative;color:white}.heroShade,.finalShade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(9,31,23,.77),rgba(9,31,23,.1) 70%)}.heroCopy{position:absolute;inset:0;padding:8vh 6vw 7vh;display:flex;flex-direction:column;justify-content:space-between}.hero h1{font-size:clamp(4.5rem,10vw,10rem);margin:0;max-width:1050px}.hero h1 i,.finalCta h2 i{color:#d4bfa8}.heroBottom{display:flex;align-items:end;justify-content:space-between;max-width:900px}.heroBottom p{font-size:1.05rem;line-height:1.6;max-width:390px;margin:0}.scroll{position:absolute;right:3vw;bottom:7vh;text-transform:uppercase;writing-mode:vertical-rl;font-size:.62rem;letter-spacing:.16em}.proofBar{display:grid;grid-template-columns:repeat(3,1fr);padding:28px 5vw;background:var(--ink);color:#dce3d6;text-transform:uppercase;font-size:.66rem;letter-spacing:.12em}.proofBar span{text-align:center;border-right:1px solid rgba(255,255,255,.2)}.proofBar span:last-child{border:0}.proofBar strong{font-family:'Instrument Serif';font-size:1.05rem;text-transform:none;font-weight:400;letter-spacing:0;margin-left:6px}.splitSection{display:grid;grid-template-columns:1.05fr .95fr;gap:8vw;padding:10vw 6vw}.imageFrame{position:relative;min-height:630px;overflow:hidden}.imageFrame img{transition:transform .8s}.imageFrame:hover img{transform:scale(1.025)}.imageLabel{position:absolute;left:0;bottom:0;background:var(--paper);padding:13px 18px;text-transform:uppercase;font-size:.61rem;letter-spacing:.12em}.sectionCopy{align-self:center;max-width:590px}.sectionCopy h2{margin:30px 0 36px}.sectionCopy .lead{font-family:'Instrument Serif';font-size:1.75rem;line-height:1.25}.sectionCopy>p:last-of-type{font-size:.94rem;line-height:1.8;max-width:490px}.yearStamp{display:flex;align-items:center;gap:20px;border-top:1px solid var(--line);margin-top:55px;padding-top:25px}.yearStamp strong{font:400 4rem/1 'Instrument Serif'}.yearStamp span{text-transform:uppercase;font-size:.65rem;line-height:1.5;letter-spacing:.12em}.services{background:var(--ink);color:#e6e4d8;padding:10vw 6vw;display:grid;grid-template-columns:1fr 1.3fr;gap:7vw}.servicesIntro h2{margin:30px 0}.servicesIntro>p:last-child{max-width:400px;line-height:1.7;color:#b6c0b7}.servicesImage{height:440px;margin-top:80px}.serviceList{grid-column:1/-1;margin-top:5vw;border-top:1px solid rgba(255,255,255,.2)}.service{display:grid;grid-template-columns:80px 1fr 1fr;gap:25px;padding:30px 0;border-bottom:1px solid rgba(255,255,255,.2);align-items:start}.service>span{font:italic 1.2rem 'Instrument Serif';color:#d69072}.service h3{font:400 2.2rem 'Instrument Serif';margin:0}.service p{max-width:420px;color:#acb9af;line-height:1.6;font-size:.86rem;margin:0}.safety{background:#29473c;padding-left:25px;padding-right:25px}.credentials{padding:10vw 6vw;display:grid;grid-template-columns:1fr 1fr;gap:6vw}.credentialHeading h2{margin:30px 0}.credentialHeading>p:last-child{max-width:530px;font:1.55rem/1.35 'Instrument Serif'}.credentialVisual{position:relative;height:530px}.seal{position:absolute;right:-35px;bottom:-35px;width:150px;height:150px;border-radius:50%;background:var(--clay);color:white;display:flex;flex-direction:column;align-items:center;justify-content:center;transform:rotate(-7deg)}.seal span{font:2.7rem 'Instrument Serif'}.seal small{text-transform:uppercase;text-align:center;letter-spacing:.12em;font-size:.56rem}.people{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,1fr);margin-top:60px;border-top:1px solid var(--line)}.people article{padding:28px 20px 28px 0;border-bottom:1px solid var(--line)}.people h3{font:1.5rem 'Instrument Serif';margin:0 0 5px}.people p{font-size:.72rem;margin:0 0 18px;text-transform:uppercase;letter-spacing:.08em}.people small{color:#65766f}.culture{background:#d9d2c3}.cultureImage{min-height:590px}.faq{display:grid;grid-template-columns:.85fr 1.15fr;min-height:750px}.faqPhoto{position:relative}.faqPhoto:after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(12,36,28,.65),transparent 50%)}.faqPhoto p{position:absolute;z-index:1;bottom:5vw;left:5vw;color:white;font:italic 3.4rem/1 'Instrument Serif'}.faqList{padding:8vw 7vw}.faqList h2{margin:25px 0 50px}.faq details{border-top:1px solid var(--line);padding:24px 0}.faq details:last-child{border-bottom:1px solid var(--line)}summary{cursor:pointer;list-style:none;display:flex;justify-content:space-between;font:1.35rem 'Instrument Serif'}summary::-webkit-details-marker{display:none}.faq details p{margin:20px 55px 0 0;line-height:1.7;color:#5b6d65;font-size:.88rem}.finalCta{height:680px;position:relative;color:white}.finalCta>div:last-child{position:absolute;inset:0;padding:7vw;display:flex;flex-direction:column;align-items:flex-start;justify-content:center}.finalCta h2{font-size:clamp(4rem,8vw,8rem);margin:25px 0 50px}footer{background:#102b22;color:#dce3d6;padding:70px 5vw 25px;display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:50px}footer small{display:block;text-transform:uppercase;letter-spacing:.14em;font-size:.58rem;color:#92a39a;margin-bottom:15px}.footerBrand{align-items:flex-start}.footerBrand p{font-size:1.1rem}.footerBrand small{margin-top:7px}.copyright{grid-column:1/-1;border-top:1px solid rgba(255,255,255,.15);padding-top:22px;margin:35px 0 0;font-size:.6rem;text-transform:uppercase;letter-spacing:.12em;color:#82968c}
        @media(max-width:800px){.nav{height:72px}.navLinks{display:none}.brand{font-size:.82rem}.buttonSmall{min-width:auto}.buttonSmall span{display:none}.hero{height:calc(100svh - 72px)}.heroCopy{padding:9vh 7vw 7vh}.hero h1{font-size:4.5rem}.heroBottom{display:block}.heroBottom p{margin-bottom:25px}.scroll{display:none}.proofBar{grid-template-columns:1fr;padding:12px 6vw}.proofBar span{padding:10px;border-right:0;border-bottom:1px solid rgba(255,255,255,.15)}.splitSection,.services,.credentials,.faq{grid-template-columns:1fr}.splitSection{padding:80px 6vw}.imageFrame{min-height:480px}.legacy .sectionCopy{order:-1}.sectionCopy h2{font-size:3.8rem}.services{padding:80px 6vw}.servicesIntro h2,.credentialHeading h2{font-size:3.8rem}.servicesImage{height:330px;margin-top:0}.service{grid-template-columns:45px 1fr}.service p{grid-column:2}.credentials{padding:80px 6vw}.credentialVisual{height:430px}.seal{right:-5px}.people{grid-template-columns:1fr;margin-top:25px}.people article{padding-right:0}.culture .sectionCopy{order:-1}.faqPhoto{height:500px}.faqList{padding:80px 6vw}.faqList h2{font-size:3.8rem}.finalCta{height:600px}.finalCta h2{font-size:4rem}footer{grid-template-columns:1fr 1fr}.footerBrand{grid-column:1/-1}}
        @media(max-width:480px){.buttonSmall{padding:12px;font-size:.58rem}.brandMark{width:35px;height:35px}.hero h1{font-size:3.85rem}.heroBottom p{font-size:.92rem}.service h3{font-size:1.8rem}footer{grid-template-columns:1fr}.footerBrand{grid-column:auto}}
      `}</style>
    </main>
  );
}
