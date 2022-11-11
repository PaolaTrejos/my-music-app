import styled from "styled-components"


const LoginContainer = styled.div `
    display: grid;
    place-items:center;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    & img {
        width: 100%;
    }
`

const LoginButton = styled.a `
    padding: 20px;
    background-color: rgb(29, 185, 84);
    border-radius: 90px;
    color: rgb(255, 255, 2555);
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bolder;
`

export {LoginContainer, LoginButton} 