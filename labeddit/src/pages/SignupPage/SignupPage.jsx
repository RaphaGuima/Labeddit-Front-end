import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SignupPageStyled } from "./SignupPageStyled";
import HeaderSignupPage from "../../components/HeaderSignupPage/HeaderSignupPage";
import { goToPostsPage } from "../../routes/coordinator";
import { BASE_URL } from "../../constants/url";
import { GlobalContext } from "../../contexts/GlobalContext";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

const SignupPage = () => {
  const context = useContext(GlobalContext);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    if (context.context.isAuth) {
      goToPostsPage(navigate);
    }
  }, []);

  const onChangeForm = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const signup = async () => {
    try {
      const body = {
        name: form.name,
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/signup`, body);

      window.localStorage.setItem("labeddit-token", response.data.token);

      context.context.setIsAuth(true);

      goToPostsPage(navigate);
    } catch (error) {
      console.log(error?.response?.data);
      alert(error?.response?.data);
    }
  };

  return (
    <>
      <HeaderSignupPage />
      <SignupPageStyled>
        <section>
          <h1>Olá, boas vindas ao LabEddit ;)</h1>
        </section>
        <section className="container-input">
          <input
            type="text"
            value={form.name}
            placeholder="Nome"
            name="name"
            onChange={onChangeForm}
          />
          <input
            type="email"
            value={form.email}
            placeholder="E-mail"
            name="email"
            onChange={onChangeForm}
          />
          <input
            type="password"
            value={form.password}
            placeholder="Senha"
            name="password"
            onChange={onChangeForm}
          />
        </section>
        <section className="container-termo">
          <h6>
            Ao continuar, você concorda com o nosso <a>Contrato de usuário</a> e
            nossa <a>Politica de Privacidade</a>
          </h6>
          <div className="container-checkbox">
            <input
              className="checkbox"
              type="checkbox"
              id="recebimento email"
              name="interesse"
              value="recebimento email"
            />
            <label htmlFor="recebimento email">
              <h6>
                Eu concordo em receber emails sobre coisas legais no Labeddit
              </h6>
            </label>
          </div>
          <button className="button-color" onClick={signup}>
            Cadastrar
          </button>
        </section>
      </SignupPageStyled>
      <Footer/>
    </>
  );
};

export default SignupPage