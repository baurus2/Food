import React, { useContext, useEffect } from "react";
import { BASE_URL } from "../../constants/Urls";
import { useNavigate } from "react-router";
import { goToEditAdressPage, goToEditProfilePage } from "../../routes/Coordinator";
import useRequestData from "../../hooks/useRequestData";
import {
  CardStyled,
  MainDiv,
  NewContainer,
  OrderContainer,
  TextUltimate,
  TypographyMargin,
  TypographyStyled,
  Container,
  AddressContainer,
  TextNew,
} from "./ProfileStyle";
import EditIcon from "@mui/icons-material/Edit";
import { Typography, CardContent } from "@mui/material";
import Header from "../../components/Header/Header";
import Navigation from "../../components/Navigation/NavigationProf";
import useProtectedPage from "../../hooks/useProtectedPage";
import { GlobalStateContext } from "../../global/GlobalStateContext";

export const ProfilePage = () => {
  const navigate = useNavigate();
  useProtectedPage();
  const { userData, getUserData, setName, setEmail, setCpf } =
    useContext(GlobalStateContext);

  const [history] = useRequestData([], `${BASE_URL}/orders/history`);

  useEffect(() => {
    getUserData(`${BASE_URL}/profile`);
  }, []);

  const changeProfile = () => {
    if (userData) {
      setName(userData.user && userData.user && userData.user.name);
      setEmail(userData.user && userData.user && userData.user.email);
      setCpf(userData.user && userData.user && userData.user.cpf);
      goToEditProfilePage(navigate);
    }
  };

  const changeAdress = () => {
    goToEditAdressPage(navigate);
  };

  const ordersHistory =
    history &&
    history.orders &&
    history.orders.map((order) => {
      const date = new Date(order.expiresAt);
      const fullDate = date.toDateString();

      return (
        <CardStyled key={order.createdAt}>
          <CardContent>
            <TypographyMargin color="primary">
              {" "}
              {order.restaurantName}
            </TypographyMargin>
            <TypographyMargin variant="caption">{fullDate}</TypographyMargin>{" "}
            <br />
            <TypographyStyled>
              SUBTOTAL R${order.totalPrice.toFixed(2)}
            </TypographyStyled>
          </CardContent>
        </CardStyled>
      );
    });

  return (
    <MainDiv>
      <Header title="Meu Perfil" goBack={true} />
      <Container>
        <div>
          <NewContainer>
            {userData.user ? (
              <TextNew>
                <p> {userData.user.name}</p>
                <p>{userData.user.email}</p>
                <p> {userData.user.cpf}</p>
              </TextNew>
            ) : (
              <p>carregando </p>
            )}
            <div>
              <EditIcon onClick={changeProfile} />
            </div>
          </NewContainer>

          <AddressContainer>
            <div>
              <Typography mb={0.5} color="secondary">
                Endereço cadastrado
              </Typography>
              <Typography color="primary.textcontrast">
                {userData.user && userData.user.address}
              </Typography>
            </div>
            <div>
              <EditIcon onClick={changeAdress} />
            </div>
          </AddressContainer>
          <OrderContainer>
            <TextUltimate> Histórico de Pedidos</TextUltimate>
            {ordersHistory}
          </OrderContainer>
        </div>
      </Container>
      <Navigation screen={2} />
    </MainDiv>
  );
};
