import "./content.scss";

import { useState } from "react";

import {data} from './texts.js';

const Content = () => {
    const [infoState, setInfoState] = useState(0);


  return (
    <section className={infoState == 1 ? 'big-container conteudo' : " conteudo"} id="Conteudo">
        <h1>Conteudo sobre Scrum</h1>
        <ul>       
            <li><button onClick={() => setInfoState(0)}>Papéis Fundamentais</button></li>
            <li><button onClick={() => setInfoState(1)}>Eventos</button></li>
            <li><button onClick={() => setInfoState(2)}>Artefatos</button></li>             
        </ul>

        <div className="content-information">
            <div>
                {data.map((data) => {
                return(
                    <div key={data.id} id={"co" + (data.id)} className={(data.id) == infoState ? 'showInfo' : 'hiddenInfo'}>
                    <h2><span>1.</span>{data.title}</h2>
                    <p>{data.paragraph1}</p>
                    <h2><span>2.</span>{data.title2}</h2>
                    <p>{data.paragraph2}</p>
                    <h2><span>3.</span>{data.title3}</h2>
                    <p>{data.paragraph3}</p>
                    <h2><span>{data.title4 != "" ? "4." : ""}</span>{data.title4}</h2>
                    <p>{data.paragraph4}</p>
                    </div>
                );
                })

                }
            </div>
        </div>
    </section>
  )
}

export default Content