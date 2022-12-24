// eslint-disable-next-line
import i18n from './translate';
import { useTranslation} from 'react-i18next';
import "animate.css/animate.min.css";
import about_bg from './comp/about-bg.jpg';
import logo from './comp/logo.png';
import about_c2 from './comp/about-c2.jpg';



export default function About() {
  const { t } = useTranslation()
  return (

    <div className="App bg-transparent">
      <header className="App-header bg-transparent bg-center navbar-bg bg-cover" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + about_bg + ')'}}>
        
        <div className="video-content space-y-2">
          <h1 className="font-light text-6xl font-mono tracking-wide list-none uppercase align-top text-white fadein">{t('about.title')}</h1>
        </div>
        
      </header>
      <div className=" mx-auto w-full flex-row flex-wrap bg-gray-200 dark:bg-stone-900 py-8">
        <div className="flex flex-wrap justify-between items-center m-auto w-10/12 ">
          <div className="text-gray-700 dark:text-slate-400 flex flex-wrap justify-between items-center my-8">
            <h2 className="font-bold text-4xl text-center leading-10 m-auto w-10/12 pt-16 mb-8">{t('about.h1')}</h2>
            <div className="w-full md:w-1/2 place-items-center ">
              <div className=""> 
                <p className="font-light text-center text-lg m-auto w-10/12 mb-8">{t('about.c1')}</p>
              </div>
            </div>
            <div className="w-full md:w-1/2 scale-75">
              <img className="w-full" src={logo} alt="logo" />
            </div>
          </div>
          <div className="text-gray-700 dark:text-slate-400 flex flex-wrap justify-between items-center mt-8 ">
            <h2 className="font-bold text-4xl text-center leading-10 m-auto w-10/12 pt-16 ">{t('about.h2')}</h2>
            <div className="w-full md:w-1/2  scale-75">
            <img className="w-full rounded-3xl border-solid border-neutral-400 border-2 " src={about_c2} alt="me" />
            </div>
            <div className="w-full md:w-1/2 place-items-center ">
              <div className=""> 
                <p className="font-light text-center text-lg m-auto w-10/12 mb-8">{t('about.c2')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}