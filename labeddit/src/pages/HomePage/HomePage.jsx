import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "../../routes/coordinator";

const HomePage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    goToLoginPage(navigate)    
  }, []);

  return (
    <>HomePage</>
  )
};

export default HomePage