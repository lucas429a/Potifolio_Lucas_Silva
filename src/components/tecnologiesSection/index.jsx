import style from "./style.module.scss"
import { TiHtml5 } from "react-icons/ti";
import { MdCss } from "react-icons/md";
import { FaNode, FaReact,FaPython  } from "react-icons/fa6";
import { DiDjango } from "react-icons/di";
import { BiLogoTypescript, BiLogoJavascript } from "react-icons/bi";

export function TecnologiesSection(){
    return(
        <div className={style.flex} >
            <div className="container">
                <div>
                    <p className={style.title} >Ferramentas que domino</p>
                </div>
                <div id="tecnologiesSection" className={style.container}>
                    <TiHtml5 size={70} />
                    <MdCss size={70}/>
                    <BiLogoJavascript size={70}/>
                    <FaNode size={70} />
                    <FaReact size={70} />
                    <FaPython size={70} />
                    <DiDjango size={70} />
                    <BiLogoTypescript size={70} />
                </div>
            </div>
        </div>
    )
}