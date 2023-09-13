import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import { FooterStyled } from "./Styles";

const Footer = () => {
  return (
    <>
      <FooterStyled>
        <h4>Aline Benjamim - 2023</h4>
        <div className="redes-sociais">
          <a
            href="https://github.com/AlineBCBenjamim"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={github} alt="icone do github" />
          </a>
          <a
            href="https://www.linkedin.com/in/alinebcarvalhobenjamim/"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="icone do linkedin" />
          </a>
        </div>
      </FooterStyled>
    </>
  );
};

export default Footer;