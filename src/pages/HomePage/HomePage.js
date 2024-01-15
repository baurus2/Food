import React from 'react'
import { useNavigate } from "react-router";
import Feed from "../../components/Feed/Feed";
import { goToSearch } from "../../routes/Coordinator";
import { ButtonNoStyle, MainStyle, TextFieldStyled, Search } from "./HomeStyle";
import { InputAdornment} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Navigation from "../../components/Navigation/Navigation";
import Header from '../../components/Header/Header';
import useProtectedPage from "../../hooks/useProtectedPage";

export const HomePage = () => {
    const navigate = useNavigate();
    useProtectedPage();

    return (
        <div>
            <Header title="Ifuture" goBack={true} />

            <MainStyle>

                <ButtonNoStyle onClick={() => { goToSearch(navigate) }
                }>
                    <Search>
                        <TextFieldStyled
                            id="input-with-icon-textfield"
                            placeholder="Restaurante"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            variant="outlined"
                        />
                    </Search>
                </ButtonNoStyle>

            </MainStyle>

            <Feed />

            <Navigation screen={0} />
        </div>
    )
};

