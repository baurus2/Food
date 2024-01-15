import React from "react";
import { Logo, Name, Category, DeliveryTime, Shipping, Address } from "./CardDetailsRestaurantStyle"

export const CardDetailsRestaurant = (props) => {
    return(
            <div>
                <Logo src={props.logoUrl} />
                <Name>{props.name}</Name>
                <Category>{props.category}</Category>
                <DeliveryTime>{props.deliveryTime} min.</DeliveryTime>
                <Shipping>Frete R$ {props.shipping},00</Shipping>
                <Address>{props.address}</Address>
            </div>
        
    )
}