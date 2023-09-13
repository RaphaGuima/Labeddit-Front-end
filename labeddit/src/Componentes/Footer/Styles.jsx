import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;  
  position: fixed;
  bottom: 0;
  width: 426px;
  background-color: #ededed;
  background: rgba(237, 237, 237, 1);

  h4 {
    color: #ff6489;
    margin-left: 15px;
  }

  .redes-sociais {
    display: flex;
    align-items: center;
    height: 50px;
    justify-content: flex-end;
    padding: 10px;
  }

  img {
    display: flex;
    align-items: center;
    margin-left: 10px;
    height: 40px;
  }
`;