import React, { useContext } from "react";
import { GlobalStateContext } from "../../global/GlobalStateContext"
import { useInput } from "../../hooks/useInput"
import {
  Container,
  ContainerPopup,
  Select,
  TitleText,
  ButtonAdd
} from "./PopupStyle";

export const Popup = (props) => {
  const [ select, setSelect ] = useInput(1)
  const { cart, setCart, totalValue, setTotalValue } = useContext(GlobalStateContext)

  const selectItem = cart.filter((item) => {
    return item.id === props.id
  })

  const product = selectItem[0]

  const sum = () => {
    const sum = props.price * (select ? select : 1)
    setTotalValue(totalValue + sum)
  }

  const handleClose = () => {
    props.setTrigger()
  }

  const addItemToCart = (newItem) => {
    const newCart = [...cart];
    const index = newCart.findIndex((i) => i.id === newItem.id)

    if (index === -1) {
      const cartItem = { ...newItem, amount: select }
      newCart.push(cartItem)
    }
    setCart(newCart)
  }

  return props.trigger ? (
    <Container onClose={handleClose}>
      <ContainerPopup>
        <TitleText>Selecione a quantidade desejada</TitleText>
        <Select onChange={setSelect}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Select>
        <ButtonAdd
          onClick={() => {
            props.setTrigger();
            addItemToCart(props.item);
          }}
        >
          ADICIONAR AO CARRINHO
        </ButtonAdd>
      </ContainerPopup>
    </Container>
  ) : (
    ""
  );
};