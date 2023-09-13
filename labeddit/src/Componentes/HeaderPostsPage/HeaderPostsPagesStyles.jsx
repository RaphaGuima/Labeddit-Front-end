import styled from "styled-components";

export const HeaderPostsPagesStyles = styled.header`
  display: flex;
  align-items: center;

  .container-logo-nome {
    display: flex;
    align-items: center;
    width: 100vw;
    height: 50px;
    background-color: #ededed;
    justify-content: flex-end;
    background: rgba(237, 237, 237, 1);
  }

  img {
    position: absolute;
    transform: translateX(-50%);
    width: 28.02px;
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