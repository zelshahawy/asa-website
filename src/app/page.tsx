import { Header } from "@/components/header";
import { Arrow, CoffeeTable, Flower, LinkIcon, OliveBranch } from "@/components/artwork";
import { association, communityLinks } from "@/lib/association";

export default function Home() {
  return <>
    <a href="#main" className="skip-link">Skip to content</a>
    <Header />
    <main id="main">
      <section className="hero wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">THE UNIVERSITY OF CHICAGO</p>
          <h1 id="hero-title">Arab culture.<br /><em>Chicago chapter.</em></h1>
          <p className="hero-description">We’re the Arab Student Association. A student community sharing our cultures, making connections, and bringing a little of home to campus.</p>
          <div className="hero-actions"><a className="button button-dark" href="#connect">Get involved <Arrow /></a><a className="text-link" href="#about">Meet ASA <span aria-hidden="true">↓</span></a></div>
        </div>
        <div className="hero-art" aria-label="Arabic lettering: Ya hala, a warm welcome">
          <div className="poster">
            <div className="poster-top"><span lang="ar" dir="rtl">رابطة الطلاب العرب</span><Flower /></div>
            <div className="poster-lettering" lang="ar" dir="rtl"><span>يا</span><span>هلا</span></div>
            <OliveBranch className="poster-branch" />
            <div className="poster-bottom"><span>YA HALA</span><span>UChicago ASA</span></div>
            <div className="poster-stitches" aria-hidden="true" />
          </div>
          <div className="hero-stamp"><span lang="ar" dir="rtl">عرب</span><span>AT UCHICAGO</span></div>
          <p className="art-caption">A familiar greeting. A new beginning.</p>
        </div>
      </section>

      <div className="culture-strip"><div className="wrap culture-strip-inner"><span><b lang="ar" dir="rtl">ثقافة</b> CULTURE</span><Flower /><span><b lang="ar" dir="rtl">لمّة</b> COMMUNITY</span><Flower /><span><b lang="ar" dir="rtl">تراث</b> HERITAGE</span></div></div>

      <section id="about" className="about-section wrap" aria-labelledby="about-title">
        <div className="section-heading"><p className="eyebrow">GET TO KNOW US</p><span className="arabic-aside" lang="ar" dir="rtl">من نحن</span></div>
        <div className="about-grid"><h2 id="about-title">Different roots.<br /><em>Something shared.</em></h2><div className="about-copy"><p>ASA connects Arab students and people interested in Arab culture at the University of Chicago.</p><p>Through cultural celebrations, study breaks, and trivia nights, we make space for the traditions and experiences our community brings to campus.</p><p>Come for an event, meet someone new, and get to know the stories behind the familiar faces.</p><a className="text-link" href={association.blueprint} target="_blank" rel="noopener noreferrer">More about ASA on Blueprint <Arrow diagonal /></a></div></div>
      </section>

      <section id="community" className="community-section" aria-labelledby="community-title"><div className="wrap">
        <div className="section-heading"><div><p className="eyebrow">LIFE WITH ASA</p><h2 id="community-title">Good company.<br /><em>Plenty to share.</em></h2></div><a className="text-link" href={association.instagram} target="_blank" rel="noopener noreferrer">See the latest on Instagram <Arrow diagonal /></a></div>
        <div className="gathering-grid">
          <div className="coffee-panel"><span className="coffee-arabic" lang="ar" dir="rtl">القعدة الحلوة</span><CoffeeTable /><p>The best part is the company.</p><span className="coffee-caption">A LITTLE COFFEE. A LONG CONVERSATION.</span></div>
          <div className="gatherings">
            <article><span className="gathering-number">01</span><div><p className="mini-label">THE EVERYDAY MOMENTS</p><h3>Study breaks, together.</h3><p>A change of pace between classes, and a chance to catch up with the ASA community.</p></div><span className="gathering-arabic" lang="ar" dir="rtl">لمّة</span></article>
            <article><span className="gathering-number">02</span><div><p className="mini-label">A LITTLE FRIENDLY COMPETITION</p><h3>Trivia nights.</h3><p>Put your knowledge to the test and explore Arab culture with friends.</p></div><span className="gathering-arabic" lang="ar" dir="rtl">معرفة</span></article>
            <article><span className="gathering-number">03</span><div><p className="mini-label">CELEBRATING OUR HERITAGE</p><h3>Turathuna.</h3><p>Named for “our heritage,” Turathuna is one of the cultural celebrations in ASA’s story.</p></div><span className="gathering-arabic" lang="ar" dir="rtl">تراثنا</span></article>
          </div>
        </div>
        <div className="events-note"><p>For the next event’s date, location, and details, follow our announcements.</p><a href={association.mailingList} className="text-link" target="_blank" rel="noopener noreferrer">Get the next invitation <Arrow diagonal /></a></div>
      </div></section>

      <section className="heritage-section" aria-label="Our shared heritage"><div className="wrap heritage-inner"><Flower className="heritage-flower" /><p lang="ar" dir="rtl">تراثنا يجمعنا</p><span>OUR HERITAGE BRINGS US TOGETHER</span><OliveBranch className="heritage-branch" /></div></section>

      <section id="connect" className="connect-section wrap" aria-labelledby="connect-title">
        <div className="section-heading"><div><p className="eyebrow">YOUR NEXT STEP</p><h2 id="connect-title">Let’s stay<br /><em>in the same circle.</em></h2></div><p className="section-description">Start with a follow or an email subscription.<br />We’ll see you at the next gathering.</p></div>
        <div className="community-links">{communityLinks.map(link => <a key={link.number} className="community-link" href={link.href} target="_blank" rel="noopener noreferrer"><span className="link-icon"><LinkIcon kind={link.kind} /></span><div><span className="mini-label">{link.detail}</span><h3>{link.name}</h3><p>{link.description}</p></div><Arrow diagonal /></a>)}</div>
      </section>

      <section className="questions-section wrap" aria-labelledby="questions-title"><div><p className="eyebrow">BEFORE YOU COME BY</p><h2 id="questions-title">A few<br /><em>good questions.</em></h2></div><div className="questions">
        <details><summary>Is ASA just for Arab students?<span className="plus" aria-hidden="true" /></summary><p>ASA brings together Arab students and students interested in learning about Arab culture and heritage.</p></details>
        <details><summary>How do I get involved?<span className="plus" aria-hidden="true" /></summary><p>Start with the <a href={association.mailingList} target="_blank" rel="noopener noreferrer">ASA mailing list</a> or <a href={association.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>. You can also find the association on <a href={association.blueprint} target="_blank" rel="noopener noreferrer">UChicago Blueprint</a>.</p></details>
        <details><summary>Where can I find upcoming events?<span className="plus" aria-hidden="true" /></summary><p>Check ASA’s Instagram and mailing-list announcements for current dates, locations, and any RSVP instructions.</p></details>
      </div></section>
    </main>
    <footer className="site-footer"><div className="footer-top wrap"><a href="#home" className="footer-brand" aria-label="UChicago ASA home">asa<span>.</span></a><span className="footer-arabic" lang="ar" dir="rtl">رابطة الطلاب العرب</span><a href={association.instagram} target="_blank" rel="noopener noreferrer">@arabatuchicago <Arrow diagonal /></a></div><div className="footer-bottom wrap"><p>Arab Student Association · The University of Chicago</p><a href="#home">Back to top <span aria-hidden="true">↑</span></a></div></footer>
  </>;
}
