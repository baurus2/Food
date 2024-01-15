import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, TextField } from "@mui/material";
import { StyledForm } from "./EditAdressStyle";
import { PutAdress } from "../../components/EditApi/EditApi";
import { goToProfilePage } from "../../routes/Coordinator";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import useProtectedPage from "../../hooks/useProtectedPage";

export const EditAdressPage = () => {
    const navigate = useNavigate();
    const { dataAdressDown } = useContext(GlobalStateContext)
    useProtectedPage();

    const [onChangeStreet, setOnChangeStreet] = useState(dataAdressDown && dataAdressDown.address && dataAdressDown.address.street);
    const [onChangeNumber, setOnChangeNumber] = useState(dataAdressDown && dataAdressDown.address && dataAdressDown.address.number);
    const [onChangeComplement, setOnChangeComplement] = useState(dataAdressDown && dataAdressDown.address && dataAdressDown.address.complement);
    const [onChangeCity, setOnChangeCity] = useState(dataAdressDown && dataAdressDown.address && dataAdressDown.address.city);
    const [onChangeNeighbourhood, setOnChangeNeighbourhood] = useState(dataAdressDown && dataAdressDown.address && dataAdressDown.address.neighbourhood);
    const [onChangeState, setOnChangeState] = useState(dataAdressDown && dataAdressDown.address && dataAdressDown.address.state);


    const onChangeStreetHandler = (e) => {
        setOnChangeStreet(e.target.value)

    }

    const onChangeNumberHandler = (e) => {
        setOnChangeNumber(e.target.value)

    }
    const onChangeComplementHandler = (e) => {
        setOnChangeComplement(e.target.value)

    }
    const onChangeCityHandler = (e) => {
        setOnChangeCity(e.target.value)

    }
    const onChangeNeighbourhoodHandler = (e) => {
        setOnChangeNeighbourhood(e.target.value)

    }
    const onChangeStateHandler = (e) => {
        setOnChangeState(e.target.value)

    }

    const response = (data) => {
        localStorage.setItem("token", data.data.token)
        if (data.data.user.hasAddress && data.data.token) {
            goToProfilePage(navigate)
        } else {
            alert("Entre com o Endereço ")
            return;
        }
    }

    const form = {
        "street": onChangeStreet,
        "number": onChangeNumber,
        "neighbourhood": onChangeNeighbourhood,
        "city": onChangeCity,
        "state": onChangeState,
        "complement": onChangeComplement
    }

    const onSubmit = (e) => {
        e.preventDefault()
        PutAdress(form, "address", response)
    }

    return (
        <>

            <Header title={"Endereço"} />
            <StyledForm onSubmit={onSubmit}>
                <TextField
                    required
                    name='street'
                    value={onChangeStreet}
                    onChange={onChangeStreetHandler}
                    label='Logradouro'
                    color="primary"
                    variant='outlined'
                    placeholder='Rua / Av'
                    margin='dense'
                />
                <TextField
                    required
                    name='number'
                    value={onChangeNumber}
                    onChange={onChangeNumberHandler}
                    label='Número'

                    variant='outlined'
                    color="primary"
                    placeholder='Número'
                    margin='dense'
                />
                <TextField
                    name='complement'
                    color="primary"
                    value={onChangeComplement}
                    onChange={onChangeComplementHandler}
                    label='Complemento'
                    placeholder='Apto/Bloco'
                    margin='dense'
                />
                <TextField
                    required
                    name='neighbourhood'
                    value={onChangeNeighbourhood}
                    onChange={onChangeNeighbourhoodHandler}
                    label='Bairro'
                    color="primary"
                    variant='outlined'
                    placeholder='Bairro'
                    margin='dense'
                />

                <TextField
                    required
                    name='city'
                    value={onChangeCity}
                    onChange={onChangeCityHandler}
                    label='Cidade'
                    color="primary"
                    variant='outlined'
                    placeholder='Cidade'
                    margin='dense'
                />
                <TextField
                    required
                    name='state'
                    value={onChangeState}
                    onChange={onChangeStateHandler}
                    label='Estado'
                    color="primary"
                    variant='outlined'
                    placeholder='Estado'
                    margin='dense'
                />
                <Button type='form'
                    font="black"
                    color='primary'
                    variant='contained' >
                    Salvar
                </Button>
            </StyledForm>
        </>
    );
};
