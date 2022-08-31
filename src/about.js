// eslint-disable-next-line
import i18n from './translate';
import { useTranslation, withTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation()
  return (
    <div className="App bg-transparent">
      <header className="App-header inset-1.5 bg-cover bg-no-repeat bg-center bg-fixed bg-transparent" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(about-bg.jpg)'}}>
        <div className="video-content space-y-2">
          <h1 className="font-light text-6xl font-mono tracking-wide list-none uppercase align-top bg-clip-text text-transparent bg-gradient-to-b from-sky-500 via-purple-500 to-indigo-500">{t('about.title')}</h1>
        </div>
      </header>
      <div className="container mx-auto px-15 py-8 flex-row flex-wrap bg-transparent">
        <div className="flex flex-wrap justify-between items-center ">
          <div className="w-full md:w-1/2 place-items-center">
            <div className="w-2/3">
              <h2 className="font-bold text-4xl text-gray-700 leading-10">{t('about.h1')}</h2>
              <p className="text-gray-700 font-light text-center text-lg ">{t('about.c1')}</p>
            </div>
          </div>
          <div className="w-full md:w-1/2 hidden md:block scale-75">
            <img className="w-full " src="logo.png" alt="logo" />
          </div>
          <div className="w-full md:w-1/2 hidden md:block scale-50">
            <img className="w-full " src="about-c2.jpg" alt="logo" />
          </div>
          <div className="w-full md:w-1/2 ">
            <h2 className="font-bold text-4xl text-gray-700 leading-10">{t('about.h2')}</h2>
            <p className="text-gray-700 font-light text-center text-lg">{t('about.c2')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}