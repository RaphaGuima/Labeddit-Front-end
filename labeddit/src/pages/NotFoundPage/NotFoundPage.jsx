import React from "react";
import { useNavigate } from "react-router-dom";
import pagError from "../../assets/pagError.jpg";
import { NotFoundPageStyled } from "../NotFoundPage/NotFoundPageStyled";
import { goToHomePage } from "../../routes/coordinator";


const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NotFoundPageStyled>
        <figure id="container">
          <img
            className="imagem"
            src={pagError}
            alt=""
          />          
        </figure>
        <button className="container-button" onClick={() => goToHomePage(navigate)}>Retornar a Home</button>
      </NotFoundPageStyled>
    </div>
  );
}

export default NotFoundPage