import styled from "styled-components"


const SidebarContainer = styled.div`
    flex: 0.2;
    height: 100vh;
    background-color: rgb(0, 0, 0);
    min-width: 240px;
    color: rgb(255, 255, 255);
        & img {
        height: 70px;
        padding: 10px;
        margin-right: auto;
        }

        & hr {
            border: 1px solid rgb(155, 0, 155);
            width: 90%;
            margin: 10px auto;
        }

`

const Playlist = styled.div`
    margin: 10px 10px;

`

const Choices =styled.div`
    margin-left: 10px;
    display: flex;
    align-items: center;
    color: rgb(200, 200, 201);
    height: 40px;
    cursor: pointer;
    transition: 400ms;
    &:hover {
        color: rgb(155, 0, 155);
    }

`

export {SidebarContainer, Playlist, Choices} 