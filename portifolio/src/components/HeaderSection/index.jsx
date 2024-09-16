import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import style from "./style.module.scss"

export function HeaderPortifolio(){
    return(
        <>
            <div className="container">
                    <div className={style.flex}>
                        <div className={style.name} >
                            <p>Lucas Silva</p>
                        </div>
                        <div className={style.containerCards}>
                            <a className="button2 buttonText" href="https://wa.me/37998400374?text=">Falar no whatswapp</a>
                            <a className={style.cards} href="https://www.linkedin.com/in/lucas-silva-ab27a326b/">
                                <FaLinkedinIn size={20} color="black"/>
                            </a>
                            <a className={style.cards} href="https://github.com/lucas429a"> 
                                <FaGithub size={20} color="black"/>
                            </a>
                        </div>
                    </div>
            </div>
        </>
    )
}