import React, { useState } from "react"
import { ContainerCard, Image, Name, Description, Price, Button } from "./CardMenuStyle"
import { Popup } from "../Popup/Popup"

const CardMenu = (props) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  const [showPopup, setshowPopup] = useState(false);


  const clickAddPdt = (pdt) => {
    setshowPopup(true)
    setSelectedProduct(pdt)
  }

  
    return (
      <ContainerCard>
        <Image src={props.item.photoUrl} />
        <div>
          <Name>{props.item.name}</Name>
          <Description>{props.item.description}</Description>
          <Price>R$ {props.item.price}</Price>
        </div>
         <Button onClick={() => clickAddPdt(props.item)}>adicionar</Button>
          <Popup
            trigger={showPopup}
            setTrigger={() => setshowPopup(false)}
            item={props.item}
            setshowPopup={setshowPopup}
          />
      </ContainerCard>
    )
  }

  export default CardMenu;