import "./about.scss";

import background2 from '../../assets/back3.jpeg';

const About = () => {


  return (
    <section className='about' id="About">
        <div className="about-image">
            <img src={background2} alt="scrum-ilustrative" />
        </div>
        <div>
            <h1>Em Geral</h1>
            <h2>O que é Scrum</h2>
            <p>O Scrum é um framework ágil de gestão de projetos que visa aprimorar a colaboração e a entrega de produtos. Ele estrutura o trabalho em ciclos chamados "sprints", normalmente de 2 a 4 semanas. Cada sprint abrange planejamento, desenvolvimento, revisão e reflexão. Equipes auto-organizadas colaboram em tarefas, lideradas por um Product Owner, responsável pelas prioridades, e um Scrum Master, encarregado de superar obstáculos. O enfoque reside na adaptação contínua, transparência e entrega gradual de valor ao longo do projeto.</p>
            <h2>Principal sobre Scrum</h2>
            <p>Os três pilares do método Scrum, transparência, inspeção e adaptação, formam a base do processo ágil. Transparência envolve comunicação aberta e compartilhamento de informações, inspeção exige avaliações frequentes para identificar problemas, e adaptação permite ajustes ágeis em resposta às descobertas da inspeção. Esses pilares trabalham em conjunto para promover a melhoria contínua, a adaptação rápida e a entrega de valor eficaz em projetos e equipes.</p>
        </div>
    </section>
  )
}

export default About