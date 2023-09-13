import styled from "styled-components";

export const LoginPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  img {
    margin-top: 133px;
    width: 84px;
    height: 84.02px;
    left: 167px;
    top: 133px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  h1 {
    font-size: 36px;
    width: 152px;
    height: 47px;
    font-weight: 700;
    color: #373737;
  }

  h5 {
    font-weight: 300;
    font-size: 16px;
    line-height: 21px;
    font-style: normal;
    text-align: center;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  .container-logo-texto {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    margin-bottom: 107px;
  }

  .container-input {
    display: flex;
    flex-direction: column;
    width: 363px;
    margin-bottom: 56px;
  }

  input {
    border: 1px solid lightgray;
    margin-bottom: 10px;
    padding: 10px;
    font-weight: 400;
    font-size: 16px;
    height: 60px;
    left: 33px;
    top: 403px;
  }

  .container-button {
    width: 365px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 13px 133px;
    gap: 10px;
  }

  .button-color {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    width: 365px;
    height: 51px;
    left: 29px;
    top: 587px;
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    border-radius: 27px;
    cursor: pointer;
  }

  .button-color:active {
    background-color: #ffffff;
    color: #fe7e02;
  }

  hr {
    margin: 10px 0 10px 0;
    width: 363px;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      90deg,
      rgba(255, 100, 137, 1) 0%,
      rgba(249, 178, 78, 1) 100%
    );
  }

  .button {
    height: 51px;
    width: 365px;
    left: 29px;
    top: 676px;
    border-radius: 27px;
    color: #fe7e02;
    font-weight: 500;
    font-size: 18px;
    background-color: #ffffff;
    border: 1px solid #fe7e02;
    font-weight: 700;
    font-size: 18px;
    box-sizing: border-box;
    cursor: pointer;
  }

  .loading {
    border: 3px solid #f3f3f3;
    border-top: 3px solid #fe7e02;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;