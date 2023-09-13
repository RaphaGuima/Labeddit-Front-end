import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderPostsPagesStyles } from "./HeaderPostsPageStyles";
import { goToLoginPage } from "../../routes/coordinator";
import logoSmall from "../../assets/logoSmall.svg";
import { GlobalContext } from "../../contexts/GlobalContext";

const HeaderPostsPage = () => {
  const { context, setPage } = useContext(GlobalContext);

  const navigate = useNavigate();

  function logout() {
    window.localStorage.removeItem("labeddit-token");
    context.setIsAuth(false);
    goToLoginPage(navigate);
  }

  return (
    <>
      <HeaderPostsPagesStyles>
        <section className="container-logo-nome">
          <img
            src={logoSmall}
            alt="logo small"
            onClick={() => {
              logout();
              setPage("");
            }}
          />
          <a
            onClick={() => {
              logout();
              setPage("");
            }}
          >
            Logout
          </a>
        </section>
      </HeaderPostsPagesStyles>
    </>
  );
};

export default HeaderPostsPage;