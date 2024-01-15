import React,{useState} from "react"
import * as S from './SingUpStyle';
import {ButtonsContainer, Form,ButtonWrapper} from './SingUpStyle'
import useUnprotectedPage from '../../hooks/useProtectedPage'
import useForm from '../../hooks/useForm'
import { useNavigate } from 'react-router-dom';
import {signup } from './user'
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';





export const SingUpPage = () => {
    useUnprotectedPage()
    const navigate = useNavigate()
    const [values, setValues] = React.useState({
          showPassword: false
    });
    
    const { form, onChange } = useForm({name: "", email: "",cpf: "", password: "", confirm: ""})

    const onClickLogin = (e) => {
        e.preventDefault()
        const { name, email, cpf, password, confirm } =form
        const signupData = {
          name: name,
          email: email,
          cpf: cpf,
          password: password
        }
        if (password !== confirm) {
            alert('Senhas não conferem')
          } else {
        signup(signupData, navigate)
        }
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
      
        <S.PageWrap>
              <S.LogoWrapper>
             <img src={require('../../assets/logo-future-eats-invert.png')} alt='Logo'/>
           </S.LogoWrapper>
            <h2>Cadastrar</h2>

            <Form onSubmit={onClickLogin}>

            <TextField fullWidth label={"Nome"} id="name"
                    placeholder={"Nome"}
                    type={"text"}
                    name={"name"}
                    value={form.name}
                    onChange={onChange}
                    pattern= {"[a-zA-Zà-úÀ-ú ]{3,}"}
                    required
                />
                 <TextField fullWidth label= "Email" id="email"                    
                    placeholder={"lucy@email.com"}
                    type={"email"}
                    name={"email"}
                    value={form.email}
                    onChange={onChange}
                    required
                />
                   <TextField fullWidth label= "cpf" id="cpf"     
                    placeholder={"000.000.000-00"}
                    type={"text"}
                    name={"cpf"}
                    value={form.cpf}
                    onChange={onChange}
                    pattern= {"[0-9]{3,}[.]{1,}[0-9]{3,}[.]{1,}[0-9]{3,}[-]{1,}[0-9]{2,}"}
                    required
                />
             

             <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
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

              <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                      <InputLabel htmlFor="outlined-adornment-confirm">Confirm</InputLabel>
                           <OutlinedInput
                               id="outlined-adornment-confirm"
                               name={"confirm"}
                               type={values.showPassword ? 'text' : 'password'}
                               value={form.confirm}
                               onChange={onChange}
                               pattern={ ".{6,}"}
                               endAdornment={
                                 <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle confirm visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                           >
                                           {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                         </IconButton>
                                 </InputAdornment>
                                     }
                             label="confirm"
                    />
              </FormControl>
                         
                   <ButtonsContainer>
                     <ButtonWrapper type={"submit"}>Criar conta</ButtonWrapper>
                  </ButtonsContainer>
            
            </Form>
                                          
        </S.PageWrap>
    )
};
















