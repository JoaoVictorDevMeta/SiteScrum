import "./videos.scss";

import videoBack from '../../assets/videoBack.png';

const Videos = () => {
  return (
    <section className='videos' id="Videos">
        <div className="title">
            <div className="arrow-left"></div><h1>Confira o material abaixo para maior contextualização</h1><div className="arrow-right"></div>
        </div>
        <div className="videos-container">
            <img src={videoBack} alt="" />
            <img className="back2" src={videoBack} alt="" />

            <iframe className="video1" width="660" height="415" src="https://www.youtube.com/embed/HlmiVz0SqNQ" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
            <iframe className="video2" width="660" height="415" src="https://www.youtube.com/embed/3aCww_1RnL0" allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <div className="videosMobile">
            <a href="https://www.youtube.com/embed/HlmiVz0SqNQ"><span>1.</span>Link para o primeiro video, scrum em 9 minutos</a>
            <a href="https://www.youtube.com/embed/3aCww_1RnL0"><span>2.</span>Link para o segundo video, scrum e extras</a>
        </div>
    </section>
  )
}

export default Videos