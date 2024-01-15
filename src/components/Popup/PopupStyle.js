import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: fixed;
  z-index: 2;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  bottom: 0;
  left: 0;
`;

export const ContainerPopup = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 250px;
  background-color: #fff;
  position: relative;
`;

export const TitleText = styled.p`
  font-weight: bold;
  text-align: center;
  margin-top: 40px;
`;

export const Select = styled.select`
  width: 250px;
  height: 55px;
  position: absolute;
  padding: 16px;
  border-radius: 4px;
  border: solid 0.5px grey;
  background: url("https://cdn.zeplin.io/5dcc566ddc1332bf7fb4f450/assets/30097AB3-DADD-4ABB-B9C3-A009017420E9.svg")
    no-repeat right transparent;
  appearance: none;
  background-position-x: 200px;
  font-size: 16px;
  left: 25px;
  top: 97.5px;
  option {
    margin-top: 16px;
  }
`;

export const ButtonAdd = styled.p`
  color: #4f81a8;
  cursor: pointer;
  position: absolute;
  bottom: 0px;
  right: 25px;
`;