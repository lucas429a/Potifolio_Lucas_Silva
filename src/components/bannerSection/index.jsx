import style from "./style.module.scss"
import { useSpring, animated } from 'react-spring';

export function BannerSection(){
    const fadeIn = useSpring({
        from : {opacity:0},
        to : {opacity:1},
        config: { duration: 1000 },
        delay: 200,
    })
    
    
    return(
        <animated.div style={fadeIn}>
            <div className="container">
                <div className={style.flex}>
                    <div className="container">
                        <div className={style.cards}>
                            <p className="heading2">
                                Cada linha de código que você escreve é uma oportunidade
                                para aprender algo novo.
                            </p>
                        </div>
                    </div>
                    <div className={style.cards}>
                        <p className="body1">
                            Sou Desenvolvedor formado da Kenzie Academy Brasil, criei e participei de vários projetos
                            utilizando diversas tecnologias e resolvendo problemas com alto
                            nível de dificuldade.
                        </p>
                    </div>
                    <div className={style.cards} >
                        <a href="#projectsSection" className="button3 buttonText">Projetos</a>
                        <a href="#tecnologiesSection" className="button2 buttonText">Tecnologias</a>
                    </div>
                </div>
            </div>
        </animated.div>
    )
}