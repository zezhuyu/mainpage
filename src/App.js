import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import {Helmet} from 'react-helmet';
import { useTranslation, withTranslation } from 'react-i18next';
import {useState} from 'react';
import './App.css';
import About from './about';
import Contact from './contact';
// eslint-disable-next-line
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
  const changeLanguage = (lang) => {
    setLanguage(lang)
    i18n.changeLanguage(lang)
  }
  return (
    <div className='md:items-center'>
      <button className='bg-sky-700 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' onClick={() => changeLanguage(language === 'en' ? 'zh-CN' : 'en')}>
        {language === 'en' ? '中文' : 'English'}
      </button>
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
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3" >
        <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden" >
          <video className="min-w-full min-h-full absolute object-cover fadein" autoPlay muted loop poster='bg.jpg'>
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
      return "block py-2 pr-4 pl-3 bg-blue-700 rounded bg-transparent text-blue-700  "
    }else{
      return "block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 hover:bg-transparent"
    }
  }
  const { t } = useTranslation()
  return (
      <Router className="px-5 py-16 rounded md:items-center bg-transparent">
        <div className="container flex flex-wrap justify-between items-center mx-auto bg-transparent">
          <NavLink to="/" className="flex items-center" link='/' onClick={toURL}>
            <img src="logo.png" className="ml-3 mr-3 h-10" alt="logo" link='/' />
            <span className="self-center text-2xl whitespace-nowrap " link='/'>SAM</span>
          </NavLink>
          <div className="flex md:place-content-center items-center justify-end bg-transparent">
            <LanguageSelector />
          </div>
          <div className="hidden w-full md:block md:w-auto bg-transparent">
            <ul className="flex flex-col p-4 rounded-lg md:flex-row space-x-8 mt-0 text-base font-medium border-0 bg-transparent">
              <li></li>
              <li>
                <NavLink to="/" className={isActive => changeClass(isActive)} link='/' onClick={toURL}>{t('navbar.c1')}</NavLink>
              </li>
              <li>
                <button link="https://blog.zezhuyu.com" onClick={toURL} className={changeClass(false)}>{t('navbar.c2')}</button>
              </li>
              <li>
                <button link="https://www.zezhuyu.video" onClick={toURL} className={changeClass(false)}>{t('navbar.c3')}</button>
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
