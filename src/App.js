import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { useTranslation, withTranslation } from 'react-i18next';
import {useState} from 'react';
import './App.css';
import About from './about';
import Contact from './contact';
import i18n from './translate';

function App() {
  return (
    <>
      <Header />
      <NavBar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route path="*" element={<F0F />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

function LanguageSelector(){
  const { i18n } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  console.log(i18n.language)
  const changeLanguage = (e) => {
    setLanguage(e.target.value)
    i18n.changeLanguage(e.target.value)
  }
  return (
    <div>
     <label>中/En</label>
     <select value={language} onChange={(e)=>changeLanguage(e)}>
        <option value="zh-CN">中文</option>
        <option value="en">English</option>
     </select>
 </div>  
  )
}


function Header(){
  const { t } = useTranslation()
  return (
    <Helmet>
        <meta charSet="utf-8" />
        <title>{t('header.title')}</title>
        <meta name="description" content={t('header.description')}/>
        <link rel="icon" href="logo.png" type="image/icon type"></link>
    </Helmet>
  )
}

function Home(){
  const { t } = useTranslation()
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3" style={{backgroundImage: 'url(bg.jpg)'}}>
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden" >
          <video className="min-w-full min-h-full absolute object-cover fadein" autoPlay muted loop>
            <source src="https://www.zezhuyu.video/2019/YK/new/video/video.mp4" type="video/mp4" />
            {t('home.error')}
          </video>
        </div>
        <div className="video-content space-y-2">
            <h1 className="font-light text-6xl font-mono tracking-wide list-none uppercase align-top">{t('home.title')}</h1>
        </div>
    </section>
  )
}

function NavBar(){
  const changeClass = (activate) => {
    if(activate.isActive){
      return "block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700  "
    }else{
      return "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700  "
    }
  }
  const { t } = useTranslation()
  return (
      <Router className="bg-white border-gray-200 px-5 py-16 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="flex items-center" link='/' onClick={toURL}>
            <img src="logo.png" className="ml-3 mr-3 h-10" alt="logo" link='/' />
            <span className="self-center text-2xl whitespace-nowrap " link='/'>SAM</span>
          </NavLink>
          <LanguageSelector />
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul className="flex flex-col p-4 rounded-lg border-gray-100 md:flex-row space-x-8 mt-0 text-base font-medium border-0 bg-white ">
              <li>
                <NavLink to="/" className={isActive => changeClass(isActive)} link='/' onClick={toURL} aria-current="page">{t('navbar.c1')}</NavLink>
              </li>
              <li>
                <button link="https://www.zezhuyu.video" onClick={toURL} className={changeClass(false)}>{t('navbar.c2')}</button>
              </li>
              <li>
                <button link="https://blog.zezhuyu.com" onClick={toURL} className={changeClass(false)}>{t('navbar.c3')}</button>
              </li>
              <li>
                <button link="https://www.sclrnet.com" onClick={toURL} className={changeClass(false)}>{t('navbar.c4')}</button>
              </li>
              <li>
                <NavLink to="/about" className={isActive => changeClass(isActive)} link='/about' onClick={toURL}>{t('navbar.c5')}</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={isActive => changeClass(isActive)} link='/contact' onClick={toURL}>{t('navbar.c6')}</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </Router>
  )
}

function Footer(){
  const { t } = useTranslation()
  return (
    <footer className="p-5 text-center bg-gray-700 text-slate-50 inset-x-0 bottom-0">
        <span>{t('footer.copyright')} &copy; {new Date().getFullYear()} SAM {t('footer.disclaimer')}.</span>
    </footer>
  )
}

function F0F () {
  const { t } = useTranslation()
  return (
    <>
      <Helmet>
          <meta charSet="utf-8" />
          <title>{t('f0f.header')}</title>
          <link rel="icon" href="logo.png" type="image/icon type"></link>
      </Helmet>
      <header className="App-header inset-1.5 bg-current bg-cover bg-no-repeat bg-center" style={{backgroundImage: 'url(bg.jpg)'}} >
        <h1 className="font-light text-8xl">{t('f0f.title')}</h1>
        <h2 className="font-light text-4xl">{t('f0f.description')}</h2>
      </header>
    </>
  )
}

function toURL(e){
  window.location.href = e.target.getAttribute('link');
}

export default withTranslation()(App);
