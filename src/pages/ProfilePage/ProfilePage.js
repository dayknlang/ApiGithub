/* eslint-disable react-hooks/exhaustive-deps */

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/url";
import { goToFirstProfile, goToReposList, goToStarredList } from "../../router/coordinator";
import { MainContainer } from "../../styles/styled";
import Button from '@material-ui/core/Button';
import { Header, Title, ProfileImage, ContainerBio, Bio, DivButtons, Name } from './styled';
import { CircularProgress } from "@material-ui/core";


const ProfilePage = () => {

    const history = useHistory()

    const { username } = useParams()

    const [profile, setProfile] = useState({})
    const [starred, setStarred] = useState([])

    useEffect(() => {
        getProfile()
        getStarred()
    
    }, [])

    const getProfile = async () => {
        try {
            const profile = await axios.get(`${BASE_URL}/${username}`)
            setProfile(profile.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    const getStarred = async () => {
        try {
            const starred = await axios.get(`${BASE_URL}/${username}/starred`)
            setStarred(starred.data)
        } catch (error) {
            alert(error.response.data.message)
        }
    }

    return (
        <MainContainer>
            <Header>
                <Title>#{profile.login}</Title>
                <Button onClick={() => goToFirstProfile(history)} variant="contained" color="primary" >
                    Voltar</Button>
            </Header>
            {profile.avatar_url ? <ProfileImage src={profile.avatar_url} /> : <CircularProgress color="primary" />}
            <Name>{profile.name}</Name>
            <ContainerBio>
                <Bio>{profile.bio}</Bio>
            </ContainerBio>
            <DivButtons>
                <Button onClick={() => goToReposList(history, username)} variant="outlined" color="primary">
                    Repositórios: {profile.public_repos}</Button>
                <Button onClick={() => goToStarredList(history, username)} variant="outlined" color="primary">
                    Stars: {starred.length} </Button>
            </DivButtons>

        </MainContainer>
    )
}

export default ProfilePage;