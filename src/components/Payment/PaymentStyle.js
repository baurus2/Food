import styled from "styled-components"

export const ContainerCarrinho = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  margin: 0 1rem;
`;

export const SubtotalContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 0.5rem;
  span {
    display: block;
    font-size: 1rem;
    letter-spacing: -0.39px;
    font-weight: 500;
  }
  span:nth-child(2) {
    color: #e8222e;
    font-weight: bold;
    font-size: 1.125rem;
    letter-spacing: -0.43px;
    text-align: right;
    margin-top: 0.875rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  margin-bottom: 1rem;
  p {
    border-bottom: 1px solid black;
    margin-bottom: 0.5rem;
    padding-bottom: 0.5rem;
    font-size: 1rem;
    letter-spacing: -0.39px;
    font-weight: 500;
  }
`;