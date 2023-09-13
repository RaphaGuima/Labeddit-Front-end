import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderCommentsPageStyles } from "../HeaderCommentsPage/HeaderCommentsStyles";
import { goToCommentsPage, goToLoginPage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.svg";
import x from "../../assets/x.svg";
import { goToPostsPage } from "../../routes/coordinator";
import { GlobalContext } from "../../contexts/GlobalContext";

const HeaderCommentsPage = () => {
  const { context } = useContext(GlobalContext);

  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("labeddit-token");
    context.setIsAuth(false);
    goToLoginPage(navigate);
  }

  return (
    <>
      <HeaderCommentsPageStyles>
        <section className="container-logo-nome-x">
          <img
            src={x}
            alt="close"
            className="close"
            onClick={() => {
              goToPostsPage(navigate);
            }}
          />
          <img
            className="container-logoSmall"
            src={logoSmall}
            onClick={() => goToCommentsPage(navigate)}
            alt="logo small"
          />
          <a onClick={logout}>Logout</a>
        </section>
      </HeaderCommentsPageStyles>
    </>
  );
};

export default HeaderCommentsPage;