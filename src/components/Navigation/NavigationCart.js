import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BoxStyled } from "./NavigationStyle";
import { useNavigate } from "react-router";
import { goToCartPage, goToHomePage, goToProfilePage } from "../../routes/Coordinator";

const Navigation = ({ screen }) => {
  const [value, setValue] = React.useState(screen);
  const navigate = useNavigate();

  return (
    <BoxStyled>
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => goToHomePage(navigate)}
          icon={<img src={require('../../assets/homepage-2.svg')} alt='Home Img' />} 
        />
        <BottomNavigationAction
          onClick={() => goToCartPage(navigate)}
          icon={<img src={require('../../assets/shopping-cart2.svg')} alt='Carrinho Img'/>}
        />
        <BottomNavigationAction
          onClick={() => goToProfilePage(navigate)}
          icon={<img src={require('../../assets/avatar.svg')} alt='Avatar Img'/>}
        />
      </BottomNavigation>
    </BoxStyled>
  );
};

export default Navigation;