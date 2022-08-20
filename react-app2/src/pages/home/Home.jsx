import cat from "../../assets/img/small.png";
import dog from "../../assets/img/big.png";
import instagram from "../../assets/img/inst.svg";
import facebook from "../../assets/img/fb.svg";
import vk from "../../assets/img/vk.svg";
import youtube from "../../assets/img/youtube.svg";
import Header from "../../layout/header/Header";
const Home = () => {
  return (
    <body>
      <Header />
      <main className="main">
        <div className="container">
          <section className="info">
            <div className="info__slides">
              <ul className="info__slides-ul">
                <li className="info__slides-li">1</li>
                <li className="info__slides-li">2</li>
                <li className="info__slides-li">3</li>
                <li className="info__slides-li">4</li>
                <li className="info__slides-li">5</li>
                <li className="info__slides-li">6</li>
              </ul>
            </div>
            <div className="info__text">
              <h1 className="info__text-title">
                Айболит круглосуточная ветклиника
              </h1>
              <button className="info__text-btn">ЗАПИСАТЬСЯ</button>
              <div className="info__text-socials">
                <img
                  className="info__text-img"
                  src={instagram}
                  alt="instagram"
                />
                <img className="info__text-img" src={facebook} alt="facebook" />
                <img className="info__text-img" src={vk} alt="vk" />
                <img className="info__text-img" src={youtube} alt="youtube" />
              </div>
            </div>
            <div className="info__img">
              <img src={cat} alt="cat" />
              <img className="info__img-dog" src={dog} alt="dog" />
            </div>
          </section>
        </div>
      </main>
    </body>
  );
};

export default Home;
