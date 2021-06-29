import React from "react";
import { MainContainer } from "../../styles/styled";
import femalecodertocat from "../../assets/femalecodertocat.png"
import {femalecatImg, Title} from "./styled";
import Button from '@material-ui/core/Button'
import { useHistory } from "react-router-dom"
import { goToFirstProfile } from "../../router/coordinator";
import { CircularProgress } from "@material-ui/core";

const ErrorPage = () => {

    const history = useHistory()

    return(
        <MainContainer>
            <Title>Deu ruim! Esta página não existe!(</Title>
            {femalecodertocat? <femalecatImg src={femalecodertocat}/> :  <CircularProgress color="primary"/>}
            <Button type="submit" variant="contained" color="primaryColor" onClick={() => 
              goToFirstProfile(history)}>Voltar ao Início</Button>
        </MainContainer>
    )
}

export default ErrorPage;