import React from 'react';
import {Loading} from '../../components/Loading/index'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {goToSingUpPage} from '../../routes/Coordinator'
import * as S from './LoginStyle';
import {login } from './user'
import {ButtonsContainer, Form,ButtonWrapper} from './LoginStyle'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';


export const LoginPage = () => {
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
        showPassword: false
  });
    const { form, onChange} = useForm({ email: "", password: "" })

    const onClickLogin = (e) => {
        e.preventDefault()
        login(form, navigate)
    }

    const handleClickShowPassword = () => {
        setValues({
          ...values,
          showPassword: !values.showPassword,
        });
      };

      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };
    return (
        <S.PageWrap >
            <Loading/>
  
           <S.LogoWrapper>
             <img src={require('../../assets/logo-future-eats-invert.png')} alt='Logo'/>
           </S.LogoWrapper>
      
            <h2>Entrar</h2>
            <Form onSubmit={onClickLogin}>
                <TextField fullWidth label={"E-mail"} id="emai"
                    placeholder={"lucy@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    variant={"outlined"}                   
                    required
                />
               <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Senha</InputLabel>
                           <OutlinedInput
                               id="outlined-adornment-password"
                               name="password"
                               type={values.showPassword ? 'text' : 'password'}
                               value={form.password}
                               onChange={onChange}
                               pattern={ ".{6,}"}
                               endAdornment={
                                 <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                           >
                                           {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                         </IconButton>
                                 </InputAdornment>
            }
                             label="Password"
                    />
              </FormControl>
                <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Entrar</ButtonWrapper>
                </ButtonsContainer>

            </Form>


        <S.Text>
          < h4>Não possui cadastro ? <Button onClick={() =>goToSingUpPage(navigate)} variant="text">Clique aqui</Button> </h4>
          
         </S.Text>

        </S.PageWrap >
    )
};



