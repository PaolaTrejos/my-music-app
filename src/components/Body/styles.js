import styled from "styled-components"

const BodyContainer = styled.div`
    flex: 0.8;
    background: linear-gradient(rgb(59, 0, 69), rgb(0, 0, 0));
    color: rgb(255, 255, 255);
    height: 100vh;
    padding: 30px;
    overflow-y: overlay;
    &::-webkit-scrollbar {
        display: none;
    }
        
`
const HeaderContainer = styled.div `
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

`

const HeaderLeft = styled.div `
    display: flex;
    align-items: center;
    flex: 0.5;
    min-width: 75px;
    background-color: rgb(255, 255, 255);
    color: rgb(129, 129, 129);
    padding: 10px;
    border-radius: 50px;

    & .icon {
        margin-left: 10px;
    }

    & input {
        margin-left: 10px;
        border: none;
        width: 100%;
    }
`

const HeaderRight = styled.div `
    display: flex;
    align-items: center;

    & img {
        width: 50px;
        height: 50px;
        border-radius: 50px;
    }


    & h4 {
        margin-left: 15px;
    }
`

const Info = styled.div `
    display: flex;
    align-items: flex-end;
    padding: 10px;
    & img {
        width: 20vw;
        margin: 0 20px;
        box-shadow: 0 4px 60px rgb(0, 0, 0);
    } 
`

const InfoText = styled.div `
   flex: 1;

   & h1 {
    margin-bottom: 10px;
   }
`

const Songs = styled.div `
    margin: 20px;
`

const Icons = styled.div `
    display: flex;
    align-items: center;

    & .MuiSvgIcon-root {
        margin-right: 20px;
    }
`

const SongRowContainer = styled.div `
    display: flex;
    row-gap: 15px;
    margin-left: 25px;
    align-items: center;
    z-index: 90;
    color: rgb(255, 255, 255);
    
    &:hover {
        cursor: pointer;
        background-color: rgb(0, 0, 0);
        opacity: 0.8;

    }

    & img {
        height: 50px;
        width: 50px;
        object-fit: contain;

    }
`

const SongInfo = styled.div `
    margin-left: 20px;

    & p {
        margin-top: 3px;
        color: darkgray;
    }
`


export {BodyContainer, HeaderContainer, HeaderLeft, HeaderRight, Info, InfoText, Songs, Icons, SongRowContainer, SongInfo}
