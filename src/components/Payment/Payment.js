import React, { isValidElement, useContext, useEffect } from 'react';
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { Button,FormControl, FormControlLabel, Radio, RadioGroup  } from '@mui/material';
import { placeOrder } from "../../services/order"
import { useNavigate } from "react-router";
import {
    ContainerCarrinho,
    SubtotalContainer,
    StyledForm,
  } from "./PaymentStyle"



export const Payment = (props) => {
    const navigate = useNavigate();
    const [payment, setPayment] = React.useState('')
    const { cart, restaurantDetail, totalValue, setTotalValue } = useContext(GlobalStateContext)


    const handleChange = (event) => {
        setPayment(event.target.value)
    };

    const shippingValue = cart.length ? props.shipping : 0

    const request = () => {
        const itensRequest = []
        cart && cart.forEach((item) => {
            itensRequest.push({
                id: item.id,
                amount: item.amount
            })
        })

        const requestBody ={
            products: itensRequest,
            paymentMethod: payment
        }

        return requestBody
    }

    const sum = () => {
        const itemSum = []
        cart && cart.forEach((item) => {
            itemSum.push(item.price * item.amount)
        })
        setTotalValue(itemSum.reduce((a, b) => a + b, shippingValue))
    }

    const verifyPayment = () => {
        alert("Escolha uma forma de pagamento")
    }

    const fixPrice = (value) => {
        const num = value.toFixed(2).replace('.', ',')
        return num
    }

    useEffect(() => {
        sum()
        request()
    }, [request])

    return (
                <ContainerCarrinho>
                    <SubtotalContainer>
                        <span>SUBTOTAL</span>
                        <div>
                        <span>Frete R${shippingValue},00</span>
                        <span>R${fixPrice(totalValue)}</span>
                        </div>
                    </SubtotalContainer>
                    <StyledForm>
                        <div>
                            <p>Forma de pagamento</p>
                            <FormControl component="fieldset">
                                <RadioGroup aria-label="gender" name="gender1" value={payment} onChange={handleChange}>
                                    <FormControlLabel value="money" control={<Radio />} label="Dinheiro" />
                                    <FormControlLabel value="creditcard" control={<Radio />} label="Cartão de Crédito" />
                                </RadioGroup>
                            </FormControl>
                        </div>
                        <Button
                            variant={'contained'}
                            color={'primary'}
                            onClick={payment ? () => placeOrder(request(), navigate, restaurantDetail.id) : () => verifyPayment()}
                        > Confirmar
                        </Button>
                    </StyledForm>
                </ContainerCarrinho>
)}