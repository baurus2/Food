import styled from "styled-components"

export const ContainerCard = styled.div`
  height: 150px;
  display: flex;
  border: solid 1px #b8b8b8;
  border-radius: 8px;
  position: relative;
  margin-top: 10px;
`;

export const Image = styled.img`
  height: 100%;
  width: 30%;
  object-fit: contain;
  border-radius: 8px 8px 0px 0;
  position: absolute;
`;

export const Name = styled.h3`
  position: absolute;
  top: 10px;
  margin: 0 auto;
  left: 35%;
  color: #e8222e;
`;

export const Description = styled.p`
  position: absolute;
  top: 60px;
  margin: 0 auto;
  left: 35%;
  color: #b8b8b8;
  font-size: 15px;
`;

export const Price = styled.p`
  position: absolute;
  bottom: 20px;
  left: 35%;
  margin: 0 auto;
  color: black;
  font-size: 20px;
  font-weight: bold;
`;

export const Button = styled.button`
  position: absolute;
  right: 0;
  bottom: 0;
  height: 40px;
  width: 120px;
  background: none;
  border-radius: 8px 0px 8px 0;
`;