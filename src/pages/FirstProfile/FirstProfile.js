import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useForm from "../../hooks/useForm";
import { goToProfile } from "../../router/coordinator";
import { MainContainer } from "../../styles/styled";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import logorosa from "../../assets/logorosa.png"
import { LogoGithub, Title, FirstForm } from "./styled";
import { CircularProgress } from "@material-ui/core"
import { BASE_URL } from "../../constants/url";

const firstForm = {
    username: "",
}

const FirstProfile = () => {

    const history = useHistory()

    const [form, onChange, clear] = useForm(firstForm);
    

    const getProfile = async (event) => {
        event.preventDefault();
        try {
            await axios.get(`${BASE_URL}/${form.username}`)
            goToProfile(history, form.username)
        } catch (error) {
            alert("Este usuário não existe!")
            clear()
        }
    }

    return(
        <MainContainer>
            <Title>Digite o perfil GitHub a ser Procurado</Title>
            {logorosa? <LogoGithub src={logorosa}/> : <CircularProgress color="primary"/>}
            <FirstForm onSubmit = {getProfile}>
                <div>
                <TextField
                required
                name="username"
                label="Nome do usuário"
                value={form.username}
                onChange={onChange}
                type="text"
                />
                </div>
                <Button type="submit" variant="contained" color="primary" >Buscar Perfil</Button>
            </FirstForm>
        </MainContainer>
    )
}

export default FirstProfile;