import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../routes/coordinator";
import { HeaderSignupPagesStyles } from "./HeaderSignupPageStyles";
import logoSmall from "../../assets/logoSmall.svg";

const HeaderSignupPage = () => {

    const navigate = useNavigate();
  return (
    <>
      <HeaderSignupPagesStyles>
        <section className="container-logo-nome">
          <img
            src={logoSmall}
            onClick={() => goToHomePage(navigate)}
            alt="logo small"
          />
          <a onClick={() => goToHomePage(navigate)}>Entrar</a>          
        </section>
      </HeaderSignupPagesStyles>
    </>
  );
}

export default HeaderSignupPage