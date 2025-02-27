import React from "react";
import styled from "styled-components";

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loader">
        <div className="wrapper">
          <div className="text">LOADING</div>
          <div className="box" />
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .loader {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -50px;
}
.wrapper {
  width: 180px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}
.text {
  z-index: 3;
  font-family: Whitney, -apple-system, Helvetica;
  letter-spacing: 1px;
  font-weight: 700;
  font-size: 20px;
  color: white;
  filter: drop-shadow(2px 2px 0px #ff9e02);
}
.box {
  width: 100%;
  height: 100%;
  background-color: #ef5d2e;
  position: absolute;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: loading ease-in-out 0.9s infinite alternate-reverse;
}
@keyframes loading {
  0% {
    transform: translateX(-20px);
  }
  50% {
    transform: translateX(20px);
  }
}
.box::before {
  content: "";
  width: 20px;
  height: 170%;
  background-color: #ff9d0089;
  position: absolute;
  z-index: 1;
  animation: loading2 ease-in-out 0.9s infinite alternate-reverse;
}
@keyframes loading2 {
  0% {
    transform: translateX(-50px);
  }
  100% {
    transform: translateX(50px);
  }
}

`;

export default Loader;
