import React from 'react';
import 'rsuite/dist/rsuite.min.css';
import Progress from 'rsuite/Progress';
import { AiFillGithub} from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";

class Section extends React.Component {

    constructor() {
        super();
        this.state = {
            show: false,
            id: '',
        }
    }

    checkPercent = (input) => {
        if(this.state.show){
            if (input.input < 100) {
                return <Progress.Line percent={input.input} status="active" />
            }else{
                return <Progress.Line percent={input.input} status="success" />
            }
        }
        return null;
    }

    mapTools = (input) => {
        return input.input.map((tool) => (
            <li className="text-center px-2 m-2">
                <div className={this.state.show ? 'justify-center flex flex-wrap bg-gray-600 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded' : ''}>
                    # {tool}
                </div>
            </li>
        ));
    }

    showContent = (input) => {
        if(input.content !== undefined){
            return <h5>{input.title}</h5>
        }
    }

    toLink = (e) => {
        window.location.href = e.target.getAttribute('link');
    }

    showIcon = (input) => {
        if(input.content !== undefined){
            return (
                <button onClick={this.toLink}>
                    <input.icon onClick={this.toLink} link={input.content} size={20}/>
                </button>
            )
        }
    }

    isContain = (dom) =>{
        const totalHeight = window.innerHeight || document.documentElement.clientHeight;
        const totalWidth = window.innerWidth || document.documentElement.clientWidth;
        if(!dom) return false;
        const { top, right, bottom, left } = dom.getBoundingClientRect();
        return (right <= totalWidth && top + 300 <= totalHeight);
    }

    render() {
        this.state.id = this.props.id;
        const p = document.getElementById(this.state.id);
        const isActive = () => {
            if (this.isContain(p)) {
                this.setState({
                    show: true
                })
            }
        }
        window.addEventListener('scroll', isActive, true);
        
        if(this.state.show){
            return (
                <div id={this.props.id} className={this.state.show ? 'my-3 mx-auto rounded-3xl bg-neutral-400 dark:bg-stone-700 w-3/4 fadeinp' : 'hidden'} >
                    <div className="m-8">
                        <h3 className={this.state.show ? 'mx-auto' : 'hidden'}>{this.props.name}</h3>
                        <p className={this.state.show ? 'py-2 indent-4' : 'hidden'}>{this.props.descr}</p>
                        <h5>{this.props.progress}</h5>
                        <this.checkPercent input={this.props.percent} />
                        <this.showContent title={this.props.projgoal} content={this.props.goaldescr} />
                        <p className={this.state.show ? 'py-2 indent-4' : 'hidden'}>{this.props.goaldescr}</p>
                        <this.showContent title={this.props.learngoal} content={this.props.learndescr} />
                        <p className={this.state.show ? 'py-2 indent-4' : 'hidden'}>{this.props.learndescr}</p>
                        <this.showContent title={this.props.toolheader} content={this.props.tools} />
                        <ul className={this.state.show ? 'justify-center flex flex-wrap' : 'hidden'}>
                            <this.mapTools input={this.props.tools} />
                        </ul>
                        <div className={this.state.show ? 'flex justify-center m-auto my-8 space-x-6' : 'hidden'}>
                            <this.showIcon icon={AiFillGithub} content={this.props.github} />
                            <this.showIcon icon={CgWebsite} content={this.props.website} />
                        </div>
                    </div>
                </div>
            );
        }else{
            return (
                <div id={this.props.id} className='my-3 mx-auto rounded-3x w-3/4 proj_content '>
                    <div className="m-8">
                        <p className={this.state.show ? 'py-2 indent-4' : ''}></p>
                        <p className={this.state.show ? 'py-2 indent-4' : ''}></p>
                        <p className={this.state.show ? 'py-2 indent-4' : ''}></p>
                        <ul className={this.state.show ? 'justify-center flex flex-wrap' : ''}>
                        </ul>
                        <div className={this.state.show ? 'flex justify-center m-auto my-8 space-x-6' : ''} />
                    </div>
                </div>
            );
        }
    }
  }



export default Section;