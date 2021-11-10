import style from './style.module.css'

const About = () => (
    <div className={style.container} id="about">
        <div className={style.videoContainer}>
            <iframe title="anglo" id="ytplayer" className={style.video} src='http://www.youtube.com/embed/EaxmHaE1bA4' frameBorder="0" />
            <div className={style.teste}></div>
        </div>
        <div className={style.textContainer}>
            <h2>Quem somos</h2>
            <br />
            <p>O Fidens, é um colégio movido pelo PROTAGONISMO na educação, queremos apresentar a vocês um colégio conectado com a nova geração, estimulante, que eleva o aprender e o ensinar a um novo patamar.</p>
            <h4>Vem com a gente!!!</h4>
            <br />
            <p className={style.text}>“A educação do futuro acontecendo hoje, preparando os alunos para os desafios da vida e do mercado de trabalho no Século XXI."</p>
        </div>
    </div>
)

export default About