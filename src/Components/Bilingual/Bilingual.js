import React from 'react';
import style from './style.module.css';
import logoBilinguel from '../../images/logoBiligual.png'

const Bilingual = () => {
    return (
        <div className={style.container} id="bilingual">
            <div className={style.videoContainer}>
                <div className={style.teste}>
                    <img src={logoBilinguel} alt="logo Bilingual"></img>
                        <br />
                        <br />
                        <h3>Educação Bilíngue</h3>
                    <div className={style.textContainer}>
                        <p>No Colégio Fidens desde cedo, os alunos têm a oportunidade de vivenciar a aquisição de conhecimento em um contexto hands on e bilíngue, com a rotina permeada pela aprendizagem baseada em projetos – PBL (Problem Based Learning), voltado para a conquista de conhecimento por meio da resolução de problemas, onde o conhecimento e habilidades são adquiridos, explorando problemas reais e de forma integrada.</p>
                        <p className={style.text}>O currículo em inglês está presente nas atividades diárias de nossos alunos.</p>
                        <a href="https://cloeedu.com.br/">Saiba mais</a>
                    </div>
                </div>
                <div>
                    <iframe title="bilingual" id="ytplayer" className={style.video} src='http://www.youtube.com/embed/HUBKrGFxyi4' frameBorder="0" />
                </div>
            </div>
        </div>
    )
}

export default Bilingual;