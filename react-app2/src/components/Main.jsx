import logo from "../components/img/logo.svg";
import logoLocation from "../components/img/location.svg";
import cat from "../components/img/small.png";
import dog from "../components/img/big.png";
import instagram from "../components/img/inst.svg";
import facebook from "../components/img/fb.svg";
import vk from "../components/img/vk.svg";
import youtube from "../components/img/youtube.svg";
const Main = () => {
  return (
    <body>
      <header>
        <div className="container">
          <div className="nav">
            <div className="nav__logo">
              <img src={logo} alt="lgog" />
            </div>
            <div className="nav__navigation">
              <ul className="nav__navigation-ul">
                <li className="nav__navigation-li">ЛИЧНЫЙ КАБИНЕТ</li>
                <li className="nav__navigation-li">О НАС</li>
                <li className="nav__navigation-li">НОВОСТИ И АКЦИИ</li>
                <li className="nav__navigation-li">КОНТАКТЫ</li>
                <li className="nav__navigation-li">БЛОГ</li>
              </ul>
            </div>
            <div className="nav__location">
              <img src={logoLocation} alt="location" />
              <p className="nav__location-p">ВОЛГОГРАД</p>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="info">
          <div className="container">
            <div className="info__text">
              <h1 className="info__text-title">
                Айболит круглосуточная ветклиника
              </h1>
              <button className="info__text-btn">ЗАПИСАТЬСЯ</button>
              <div className="info__text-socials">
                <img src={instagram} alt="instagram" />
                <img src={facebook} alt="facebook" />
                <img src={vk} alt="vk" />
                <img src={youtube} alt="youtube" />
              </div>
            </div>
            <div className="info__img">
              <img src={cat} alt="cat" />
              <img src={dog} alt="dog" />
              <p className="info__img-p">+7 (8442) 96 22 92</p>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Main;
