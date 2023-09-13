import styled from "styled-components";

export const HeaderCommentsPageStyles = styled.header`
  display: flex;
  align-items: center;

  .container-logo-nome-x {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: #ededed;
    background: rgba(237, 237, 237, 1);
    justify-content: space-between;
  }

  .close {
    display: flex;
    align-items: center;
    width: 25.6px;
    height: 24px;
    padding: 1px;
    cursor: pointer;
    margin-left: 29px;
  }

  .container-logoSmall {
    position: absolute;
    transform: translateX(-50%);
    width: 28.02px;
    height: 31.67px;
    left: 50%;
    cursor: pointer;
  }

  a {
    font-family: "Noto Sans";
    font-weight: 600;
    font-size: 18px;
    text-align: center;
    color: #4088cb;
    cursor: pointer;
    margin-right: 29px;
  }
`;