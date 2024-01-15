import React from "react"
import * as S from './AdressStyle';
import {ButtonsContainer, Form, InputWrapper,ButtonWrapper} from './AdressStyle'
import useUnprotectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {addAdress } from './user'
import TextField from '@mui/material/TextField';


export const AddressPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const { form, onChange } = useForm({
        street: "", 
        number: "",
        neighbourhood: "", 
        city: "",
        state: "",
        complement: ""
    })

    const onClickLogin = (e) => {
        e.preventDefault()
        addAdress(form, navigate)
    }

  
    return (
        <S.PageWrap>
         
            <h2>Meu endereço</h2>

            <Form onSubmit={onClickLogin}>
                 <TextField fullWidth label="Logradouro" id="Logradouro"
                    placeholder={"Rua / Av."}
                    type={"text"}
                    name={"street"}                    
                    value={form.street}
                    onChange={onChange}
                    title= "Logradouro aceita no mínimo 3 caracteres" 
                    required
                />
                 <TextField fullWidth label= {"Numero"} id="number"                    
                    placeholder={"número"}
                    type={"number"}
                    name={"number"}
                    value={form.number}
                    onChange={onChange}
                    required
                />
              
                   <TextField fullWidth  label={"Bairro"} id="Bairro" 
                    placeholder={"Bairro"}
                    type={"text"}
                    name={"neighbourhood"}
                    value={form.neighbourhood}
                    onChange={onChange}
                    required
                                    
                   />

                  <TextField fullWidth  label="Cidade" id="city"                     
                    placeholder={"cidade"}
                    type="text"
                    name={"city"}
                    value={form.city}
                    onChange={onChange}
                    required
                
                />

                <TextField fullWidth   label={"Estado"} id="state"                  
                  placeholder={"Estado"}
                  type={"text"}
                  name={"state"}
                  value={form.state}
                  onChange={onChange}
                  required
                />

                <TextField fullWidth  label={"Complemento"} id="Complemento"                     
                    placeholder={"Apto./Bloco/casa"}
                    type={"text"}
                    name={"complement"}
                    value={form.complement}
                    onChange={onChange}
                    required
                />

                
                         
                   <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Salvar endereço</ButtonWrapper>
                  </ButtonsContainer>
            
            </Form>
                                          
        </S.PageWrap>
    )
};










