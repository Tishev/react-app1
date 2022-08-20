import React from "react";
import { useState } from "react";
import axios from "axios";

const Popup = ({ popup, setPopup }) => {
  const [status, setStatus] = useState("signIn");

  const popupCloseFunc = (e) => {
    if (e.target.classList.contains("overlay")) {
      setPopup(false);
    }
  };

  const signInHandler = (e) => {};
  const signUnHandler = (e) => {
    axios
      .post("/signup", {
        email: e.target[0].value,
        name: e.target[1].value,
        password: e.target[2].value,
      })
      .then((res) => {
        console.log(res.data);
        setPopup(false);
        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
      })
      .catch((err) => alert(err));
  };
  return (
    <div
      onClick={(e) => popupCloseFunc(e)}
      className={`overlay ${popup && "overlay_active"}`}
    >
      <div className="popup">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (status === "signIn") {
              signInHandler(e);
            } else {
              signUnHandler(e);
            }
          }}
          className="popup__form"
        >
          <div className="popup__form-top">
            <h2
              onClick={() => setStatus("signIn")}
              className={`popup__title ${
                status === "signIn" && "popup__title_active"
              }`}
            >
              Войти
            </h2>
            <h2
              onClick={() => setStatus("signUp")}
              className={`popup__title ${
                status === "signUp" && "popup__title_active"
              }`}
            >
              Регистрация
            </h2>
          </div>
          <input
            placeholder="Введите Email"
            className="popup__input"
            type="email"
          />
          {status === "signUp" && (
            <input
              placeholder="Введите имя"
              className="popup__input"
              type="text"
            />
          )}
          <input
            placeholder="Введите пароль"
            className="popup__input"
            type="password"
          />
          <button className="popup__btn">
            {status === "signIn" ? "Войти" : "Регистрация"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup;
