import cat from "../../assets/img/small.png";
import dog from "../../assets/img/big.png";
import instagram from "../../assets/img/inst.svg";
import facebook from "../../assets/img/fb.svg";
import vk from "../../assets/img/vk.svg";
import youtube from "../../assets/img/youtube.svg";
import terapy from "../../assets/img/categories/terapy.svg";
import surgery from "../../assets/img/categories/surgery.svg";
import neurology from "../../assets/img/categories/neurology.svg";
import orthopedics from "../../assets/img/categories/orthopedics.svg";
import dermatology from "../../assets/img/categories/dermatology.svg";
import ophthalmology from "../../assets/img/categories/ophthalmology.svg";
import cardiology from "../../assets/img/categories/cardiology.svg";
import dentistry from "../../assets/img/categories/dentistry.svg";
import reproductology from "../../assets/img/categories/reproductology.svg";
import visualDiagnostik from "../../assets/img/categories/visualDiagnostik.svg";
import laboratory from "../../assets/img/categories/laboratory.svg";
import oncology from "../../assets/img/categories/oncology.svg";
import endocrinology from "../../assets/img/categories/endocrinology.svg";
import exoticAnimals from "../../assets/img/categories/exoticAnimals.svg";
import pharmacy from "../../assets/img/categories/pharmacy.svg";
import grooming from "../../assets/img/categories/grooming.svg";

const Home = () => {
  return (
    <body>
      <main className="main">
        <section className="info">
          <div className="container">
            <div className="info__descr">
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
                  <img
                    className="info__text-img"
                    src={facebook}
                    alt="facebook"
                  />
                  <img className="info__text-img" src={vk} alt="vk" />
                  <img className="info__text-img" src={youtube} alt="youtube" />
                </div>
              </div>
              <div className="info__img">
                <img src={cat} alt="cat" />
                <img className="info__img-dog" src={dog} alt="dog" />
              </div>
            </div>
          </div>
        </section>
        <section className="categories">
          <div className="container-categories">
            <div className="categories__items">
              <div className="categories__item">
                <h3 className="categories__item-h3">Терапия</h3>
                <img
                  className="categories__item-img"
                  src={terapy}
                  alt="terapy"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Хирургия</h3>
                <img
                  className="categories__item-img"
                  src={surgery}
                  alt="surgery"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Неврология</h3>
                <img
                  className="categories__item-img"
                  src={neurology}
                  alt="surgery"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Ортопедия</h3>
                <img
                  className="categories__item-img"
                  src={orthopedics}
                  alt="orthopedics"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Дерматология</h3>
                <img
                  className="categories__item-img"
                  src={dermatology}
                  alt="dermatology"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Офтальмология</h3>
                <img
                  className="categories__item-img"
                  src={ophthalmology}
                  alt="ophthalmology"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Кардиология</h3>
                <img
                  className="categories__item-img"
                  src={cardiology}
                  alt="cardiology"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Стоматология</h3>
                <img
                  className="categories__item-img"
                  src={dentistry}
                  alt="dentistry"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Репрудоктология</h3>
                <img
                  className="categories__item-img"
                  src={reproductology}
                  alt="reproductology"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Визуальная диагностика</h3>
                <img
                  className="categories__item-img"
                  src={visualDiagnostik}
                  alt="visualDiagnostik"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Лаборатория</h3>
                <img
                  className="categories__item-img"
                  src={laboratory}
                  alt="laboratory"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Онкология</h3>
                <img
                  className="categories__item-img"
                  src={oncology}
                  alt="oncology"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Эндокринология</h3>
                <img
                  className="categories__item-img"
                  src={endocrinology}
                  alt="endocrinology"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Экзотические животные</h3>
                <img
                  className="categories__item-img"
                  src={exoticAnimals}
                  alt="exoticAnimals"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Аптека</h3>
                <img
                  className="categories__item-img"
                  src={pharmacy}
                  alt="pharmacy"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
              <div className="categories__item">
                <h3 className="categories__item-h3">Груминг</h3>
                <img
                  className="categories__item-img"
                  src={grooming}
                  alt="grooming"
                />
                <p className="categories__item-p">26 услуг</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </body>
  );
};

export default Home;
