import React, { useContext } from "react";
import { BASE_URL } from "../../constants/Urls";
import { Button, TextField } from "@mui/material";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";
import { MainContainer, StyledForm } from "./EditProfileStyle";
import { PutAdress } from "../../components/EditApi/EditApi";
import Header from "../../components/Header/Header";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { goToProfilePage } from "../../routes/Coordinator";
import useProtectedPage from "../../hooks/useProtectedPage";

export const EditProfilePage = () => {
  useProtectedPage();
  const navigate = useNavigate();
  const { userData, getUserData, name, email, cpf } =
    useContext(GlobalStateContext);

  const { form, onChange } = useForm({
    name: name,
    email: email,
    cpf: cpf,
  });

  const response = (data) => {
    getUserData(`${BASE_URL}/profile`);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    PutAdress(form, "profile", response, getUserData);

    goToProfilePage(navigate);
  };

  return (
    <>
      <Header title='Editar' />
      <MainContainer>
        <StyledForm onSubmit={onSubmitForm}>
          <TextField
            id='outlined-required'
            name={"name"}
            value={form.name}
            onChange={onChange}
            label={"Nome"}
            placeholder={"Nome e sobrenome"}
            type='text'
            margin={"normal"}
            required
            fullWidth
          />
          <TextField
            name={"email"}
            value={form.email}
            onChange={onChange}
            label={"E-mail"}
            placeholder={"email@email.com"}
            fullWidth
            type='text'
            margin={"normal"}
            required
          />
          <TextField
            name={"cpf"}
            value={form.cpf}
            onChange={onChange}
            label={"CPF"}
            placeholder={"000.000.000-00"}
            fullWidth
            type='text'
            margin={"normal"}
            required
            inputProps={{
              pattern: "[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}",
            }}
          />

          <Button
            variant='contained'
            type='submit'
            color='primary'
            margin={"normal"}
            fullWidth
          >
            Salvar
          </Button>
        </StyledForm>
      </MainContainer>
    </>
  );
};
