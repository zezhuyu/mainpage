// eslint-disable-next-line
import i18n from './translate';
import { useTranslation} from 'react-i18next';
import { useState } from 'react';
import { BsTelegram } from 'react-icons/bs';
import { FaKaggle } from 'react-icons/fa';
import { AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import axios from "axios";
import config from './config.json';


export default function Contact () {
    const [showModal, setShowModal] = useState(false);
    const toggleModal = () => setShowModal(!showModal);
    
    return (
        <div className="App bg-slate-400">
            <header className="App-header inset-1.5 bg-cover bg-no-repeat bg-center " style={{backgroundImage: 'url(contact-bg.jpg)'}}>
                <Card show={showModal} toggle={toggleModal} />
                <ContactFrom show={showModal} toggle={toggleModal}/>
            </header>
        </div>
    )
}

function Card(value){
    const { t } = useTranslation()
    if(value.show){
        return
    }
    return(
        <div className="fadeinc fadeoutc m-8 w-full lg:max-w-4xl sm:max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 text-gray-900 dark:text-white">
            <img className="w-20 m-auto mt-8 rounded-full shadow-lg shadow-gray-400 dark:shadow-black bg-white" src="logo.png" alt="" />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t('contact.title')}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t('contact.content')}</p>
                <div className="m-auto w-8/12 my-8">
                    <ul role="list " className="divide-y divide-gray-400 dark:divide-gray-700">
                        <li className="py-3">
                            <div className="flex items-center space-x-4" >
                                <div className="flex-shrink-0">
                                    {t('contact.n1')}
                                </div>
                                <div className="flex-1"/>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" onClick={toLink} link={'mailto:'+ t('contact.m1')}>
                                {t('contact.m1')}
                                </div>
                            </div>
                        </li>
                        <li className="py-3 ">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    {t('contact.n2')}
                                </div>
                                <div className="flex-1"/>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" onClick={toLink} link={'mailto:'+ t('contact.m2')}>
                                    {t('contact.m2')}
                                </div>
                            </div>
                        </li>
                        <li className="py-3">
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0">
                                    {t('contact.n3')}
                                </div>
                                <div className="flex-1"/>
                                <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white" onClick={toLink} link={'mailto:'+ t('contact.m3')}>
                                {t('contact.m3')}
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-center m-auto my-8 space-x-6">
                    <button onClick={toLink} link="https://www.kaggle.com/zezhuyu" >
                        <FaKaggle link="https://www.kaggle.com/zezhuyu" />
                    </button>
                    <button onClick={toLink} link="https://github.com/zezhuyu" >
                        <AiFillGithub link="https://github.com/zezhuyu"/>
                    </button>
                    <button onClick={toLink} link="https://www.linkedin.com/in/zezhuyu" >
                        <AiFillLinkedin link="https://www.linkedin.com/in/zezhuyu" />
                    </button>
                    <button onClick={toLink} link="https://twitter.com/zezhuyu" >
                        <AiFillTwitterCircle link="https://twitter.com/zezhuyu" />
                    </button>
                    <button onClick={toLink} link="https://www.instagram.com/zezhuyu" >
                        <AiFillInstagram link="https://www.instagram.com/zezhuyu" />
                    </button>
                    <button onClick={toLink} link="https://t.me/sft7f" >
                        <BsTelegram link="https://t.me/sft7f" />
                    </button>
                </div>
                <button className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={value.toggle}>
                    {t('contact.button')}
                    <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
            </div>
        </div>
    )
}

function ContactFrom(value) {
    const [result , setResult] = useState(null);
    const { t, i18n } = useTranslation()
    const onKeyEnter = (e) => {
        if(e.keyCode === 13) {
            submitForm(e);
        }
    }
    const closeForm = () => {
        value.toggle();
    }

    if(!value.show){
        return 
    }
    const submitForm = async (e) => {
        setResult(null);
        e.preventDefault();
        const {name, email, subject, message} = e.target.elements;
        const details = {
            name: name.value,
            email: email.value,
            subject: subject.value,
            message: message.value,
            language: i18n.language,
        };
        
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                'token': config.emailapikey,
                "Access-Control-Allow-Origin": "*"
            }
        }

        const result = await axios.post(`${config.emailapi}`, details, headers);
        setResult(result.data.sent);
    };
    

    return (
        <>
            <div className="w-full max-w-md fadeinc fadeoutc">
                <form onKeyDown={onKeyEnter} onSubmit={submitForm} className=" bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 px-8 pt-6 pb-8 mb-4 text-slate-900 dark:text-gray-400">
                    <div className="flex justify-between items-start p-1 rounded-t  dark:border-gray-600">
                        <h1 className="dark:text-white text-xl font-semibold mb-5">
                            {t('form.title')}
                        </h1>
                        <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={closeForm}>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="mb-4">
                        <label className='block text-lg font-bold mb-2' >{t('form.name')}</label>
                        <input type="text" id="name" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-stone-700 dark:bg-gray-500' required />
                    </div>
                    <div className="mb-4">
                        <label className='block text-lg font-bold mb-2' >{t('form.email')}</label>
                        <input type="email" id="email" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-stone-700 dark:bg-gray-500' required />
                    </div>
                    <div className="mb-4">
                        <label className='block text-lg font-bold mb-2' >{t('form.subject')}</label>
                        <input type="subject" id="subject" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-stone-700 dark:bg-gray-500' required />
                    </div>
                    <div className="mb-4">
                        <label className='block text-lg font-bold mb-2' >{t('form.message')}</label>
                        <textarea id="message" className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline dark:border-stone-700 dark:bg-gray-500' required />
                    </div>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>{t('form.button')}</button>
                    <div>
                        {result && <p className='my-4 text-green-500 text-2xl font-bold'>{t('form.success')}</p>}
                    </div>
                </form>
            </div>
        </>
    );
}

function toLink(e){
    window.location.href = e.target.getAttribute('link');
  }

