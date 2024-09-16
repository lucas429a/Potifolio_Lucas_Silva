import { FaGithub } from "react-icons/fa";
import { IoArrowUndoSharp } from "react-icons/io5";
import style from "./style.module.scss"

export function ProjectsSection(){
    return(
        <div className="container">
            <div>
                <div>
                    <p className="body2" id="projectsSection" >Projetos</p>
                    <p className="heading4">Conheça meus últimos trabalhos</p>
                </div>
                <div className={style.card}>
                    <p className="heading4">Hamburgueria</p>
                    <div className={style.categories}>
                        <p className="body4">LINGUAGENS</p>
                        <p className="body3">HTML</p>
                        <p className="body3">CSS</p>
                        <p className="body3">JAVASCRIPT</p>
                        <p className="body3">REACT</p>
                    </div>
                        <p className="body2">Projeto onde crio uma aplicação de site de vendas de alimentos onde é possível pesquisar, adicionar ao carrinho e mostrar o calculo total de produtos uitlizando HTML, SCSS, JAVASCRIPT e REACT além das seguintes bibliotecas: axios, react-icons , uuid, react-toastfy.</p>
                    <div className={style.categories}>
                        <div className={style.categories}>
                            <FaGithub size={20}/>
                            <a href="https://github.com/lucas429a/Hamburgueria" className="body4">Link do código</a>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <p className="heading4">Database de filmes</p>
                    <div className={style.categories}>
                        <p className="body4">LINGUAGENS</p>
                        <p className="body3">PYTHON</p>
                    </div>
                        <p className="body2">Uma aplicação gerenciar usuários, filmes e compras, incluindo autenticação e permissões de rotas para diferentes tipos de usuário..</p>
                    <div className={style.categories}>
                        <div className={style.categories}>
                            <FaGithub size={20}/>
                            <a href="https://github.com/lucas429a/Buster" className="body4">Link do código</a>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <p className="heading4">Interface de banco digital</p>
                    <div className={style.categories}>
                        <p className="body4">LINGUAGENS</p>
                        <p className="body3">HTML</p>
                        <p className="body3">CSS</p>
                        <p className="body3">JAVASCRIPT</p>
                        <p className="body3">REACT</p>
                    </div>
                        <p className="body2">Projeto de banco digital onde é possível adicionar novas transações de entrada e saída, excluir transações já existentes e mostrar o saldo total do cliente utilizando HTML, CSS, JAVASCRIPT e REACT..</p>
                    <div className={style.categories}>
                        <div className={style.categories}>
                            <FaGithub size={20}/>
                            <a href="https://github.com/lucas429a/Banco-Digital" className="body4">Link do código</a>
                        </div>
                    </div>
                </div>
                <div className={style.card}>
                    <p className="heading4">Banco de usúarios e cursos.</p>
                    <div className={style.categories}>
                        <p className="body4">LINGUAGENS</p>
                        <p className="body3">TYPESCRIPT</p>
                    </div>
                        <p className="body2">API que faz o controle de usuários e cursos em que esses usuários serão matriculados, controle de acessos, onde alguns recursos podem ser acessados apenas por usuários que fizeram login na aplicação, e outros recursos apenas usuários que fizeram login e tem permissões de administrador podem acessar utilizando TYPESCRIPTY e SQL.</p>
                    <div className={style.categories}>
                        <div className={style.categories}>
                            <FaGithub size={20}/>
                            <a href="https://github.com/lucas429a/User-e-Courses-Permissao-de-Administrador" className="body4">Link do código</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}