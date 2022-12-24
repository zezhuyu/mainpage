// eslint-disable-next-line
import i18n from './translate';
import { useTranslation} from 'react-i18next';
import Section from './proj_section';
import project_bg from './comp/project-bg.jpg';
import { useState } from 'react';


function ShowHeader(input){
    const [show, setShow] = useState(false);
    const isContain = (dom) =>{
        const totalHeight = window.innerHeight || document.documentElement.clientHeight;
        const totalWidth = window.innerWidth || document.documentElement.clientWidth;
        if(!dom) return false;
        const { top, right, bottom, left } = dom.getBoundingClientRect();
        return (right <= totalWidth && top + 300 <= totalHeight);
    }
    const p = document.getElementById(input.id);
        const isActive = () => {
            if (isContain(p)) {
                setShow(true);
            }
        }
        window.addEventListener('scroll', isActive, true);
    if(show){
        return <h2 id={input.id} className="font-bold text-4xl text-center leading-10 m-auto w-10/12 pt-8 pb-4 fadein">{input.name}</h2>
    }else{
        return <h2 id={input.id} className="font-bold text-4xl text-center leading-10 m-auto w-10/12 pt-8 pb-4" />
    }
}

export default function Project(){
    const { t } = useTranslation();
    return(
        <div className="App bg-transparent">
             <header className="App-header bg-transparent bg-center navbar-bg bg-cover" style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + project_bg + ')'}}>
        
                <div className="video-content space-y-2">
                <h1 className="font-light text-6xl font-mono tracking-wide list-none uppercase align-top text-white fadein">{t('project.title')}</h1>
                </div>
                
            </header>
            <div  className=" mx-auto w-full flex-row flex-wrap bg-gray-100 dark:bg-neutral-800 py-8 proj_content">
                <div className="justify-between items-center m-auto w-8/12">
                    <div className=" shadow-slate-400 dark:shadow-slate-800 text-gray-700 dark:text-slate-300 flex flex-wrap justify-between items-center my-8">
                        <ShowHeader id="aheader" name={t('project.major')} />
                        <Section id="ap1" name={t('project.ap1.title')} descr={t('project.ap1.description')} goaldescr={t('project.ap1.pg')} learndescr={t('project.ap1.lg')} percent={95} tools={["React", "RESTful API", "MongoDB", "Express.js", "React Route", "React Helmet", "tailwindcss"]} website="https://www.xsam.me" github="https://github.com/zezhuyu/short_url" progress={t('project.progress')} projgoal={t('project.projgoal')} learngoal={t('project.learngoal')} toolheader={t('project.toolheader')}/>
                        <Section id="ap2" name={t('project.ap2.title')} descr={t('project.ap2.description')} goaldescr={t('project.ap2.pg')} learndescr={t('project.ap2.lg')} percent={80} tools={["React", "RESTful API", "React Route", "React Helmet", "tailwindcss" , "react-i18next" ,"React Icons"]} website="https://www.samproduce.com" github="https://github.com/zezhuyu/mainpage" progress={t('project.progress')} projgoal={t('project.projgoal')} learngoal={t('project.learngoal')} toolheader={t('project.toolheader')}/>
                    </div>
                    <div className=" shadow-slate-400 dark:shadow-slate-800 text-gray-700 dark:text-slate-300 flex flex-wrap justify-between items-center my-8">
                        <ShowHeader id="iheader" name={t('project.minor')} />
                        <Section id="ip1" name="hello" percent={50} tools={["a", "b", "c", "d"]} website="https://www.samproduce.com" github="https://github.com"/>
                        <Section id="ip2" name="hello" percent={50} tools={["a", "b", "c", "d"]} website="https://www.samproduce.com" github="https://github.com"/>
                        <Section id="ip3" name="hello" percent={50} tools={["a", "b", "c", "d"]} website="https://www.samproduce.com" github="https://github.com"/>
                        <Section id="ip4" name="hello" percent={50} tools={["a", "b", "c", "d"]} website="https://www.samproduce.com" github="https://github.com"/>
                    </div>
                    <div className=" shadow-slate-400 dark:shadow-slate-800 text-gray-700 dark:text-slate-300 flex flex-wrap justify-between items-center my-8">
                        <ShowHeader id="cheader" name={t('project.core')} />
                        <Section id="cp1" name={t('project.cp1.title')} descr={t('project.cp1.description')} goaldescr={t('project.cp1.pg')} learndescr={t('project.cp1.lg')} percent={70} tools={["kvm", "docker", "pfsense", "centos7", "ubuntu", "MinIO", "GitLab"]} progress={t('project.progress')} projgoal={t('project.projgoal')} learngoal={t('project.learngoal')} toolheader={t('project.toolheader')}/>
                        <Section id="cp2" name={t('project.cp2.title')} descr={t('project.cp2.description')} goaldescr={t('project.cp2.pg')} learndescr={t('project.cp2.lg')} percent={70} tools={["kvm", "docker", "pfsense", "centos7", "ubuntu", "MinIO", "GitLab"]} progress={t('project.progress')} projgoal={t('project.projgoal')} learngoal={t('project.learngoal')} toolheader={t('project.toolheader')}/>
                        <Section id="cp3" name={t('project.cp3.title')} descr={t('project.cp3.description')} goaldescr={t('project.cp3.pg')} learndescr={t('project.cp3.lg')} percent={70} tools={["kvm", "docker", "pfsense", "centos7", "ubuntu", "MinIO", "GitLab"]} progress={t('project.progress')} projgoal={t('project.projgoal')} learngoal={t('project.learngoal')} toolheader={t('project.toolheader')}/>
                    </div>
                </div>
            </div>
        </div>
    );
}