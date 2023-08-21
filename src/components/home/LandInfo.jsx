import "./home.scss";

//imagens
import Background from "../../assets/background.jpg"

//funcoes uteis
import { useTypewriter, Cursor} from "react-simple-typewriter";

const Home = () => {
  const [text] = useTypewriter({
    words: [ "no Polo de Inovação", "nas Empresas", "nos Projetos em equipe"],
    loop: {},
    delaySpeed: 4000
  });
  
  return (
    <section className="home" id="Home">
      <div className="info">
        <h1>Scrum e o Trabalho em equipe...</h1>
        <h2>O método utilizado <span>{text}<Cursor/></span></h2>
        <p>
        Scrum é um sistema ágil de gerenciamento de projetos comumente usado no desenvolvimento de software e em outras indústrias. O Scrum prescreve que as equipes dividam o trabalho em metas a serem concluídas em iterações com tempo definido, chamadas de sprints.
        </p>

        <a href="#About">Informações</a>
      </div>
      <div className="image">
        <img src={Background} alt="" />
      </div>
    </section>
  )
}

export default Home