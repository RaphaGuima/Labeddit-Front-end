import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { LoginPageStyled } from "./LoginPageStyled";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import {
  goToHomePage,
  goToPostsPage,
  goToSignupPage,
} from "../../routes/coordinator";
import Footer from "../../components/Footer/Footer";

const LoginPage = () => {
  const { context, setPage } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    const token = window.localStorage.getItem("labeddit-token");
    if (token) {
      goToPostsPage(navigate);
    }
  }, []);

  const login = async () => {
    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/login`, body);

      window.localStorage.setItem("labeddit-token", response.data.token);
      const token = window.localStorage.getItem("labeddit-token");

      if (response.data.token === undefined) {
        window.localStorage.removeItem("labeddit-token");
        goToHomePage(navigate);
      }

      context.setIsAuth(true);

      goToPostsPage(navigate, token);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.reponse?.data);
      window.localStorage.removeItem("labeddit-token");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <LoginPageStyled>
        <section className="container-logo-texto">
          <img src={logo} alt="logo" />
          <h1>LabEddit</h1>
          <h5>O projeto de rede social da Labenu</h5>
        </section>
        <section className="container-input">
          <input
            type="email"
            value={form.email}
            onChange={onChangeForm}
            name="email"
            placeholder="E-mail"
            autoComplete="off"
          />
          <input
            type="password"
            value={form.password}
            onChange={onChangeForm}
            name="password"
            placeholder="Senha"
            autoComplete="off"
          />
        </section>
        <section className="container-button">
          <button className="button-color" onClick={login} disabled={isLoading}>
            {isLoading ? <div className="loading"></div> : "Continuar"}
          </button>
          <hr />
          <button
            className="button"
            onClick={() => {
              goToSignupPage(navigate);
              setPage("signupPage");
            }}
          >
            Crie uma conta!
          </button>
        </section>
      </LoginPageStyled>
      <Footer />
    </>
  );
};

export default LoginPage;