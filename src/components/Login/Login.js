import React from 'react'
import {loginURL} from "../../spotifyLogic"
import {LoginButton, LoginContainer} from "./styles"
 

const login = () => {
  
  return (
   <LoginContainer>
    <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Logo de Spotify"/>
    <LoginButton href={loginURL}>Iniciar sesión</LoginButton>
   </LoginContainer>
  )
}

export default login;