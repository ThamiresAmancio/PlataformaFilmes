import styled from "styled-components";
import { BiSearch } from 'react-icons/bi';


export const MenuTitle = styled.nav`

    position: relative;
    width: 100%;
    height: 90px;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    >h1{
        font-family: 'Fuzzy Bubbles', cursive;
        font-size: 1.9em;
        color: blue;
        padding: 4%;
    }


    p{
        font-family: 'Fuzzy Bubbles', cursive;
        font-size: 1.3em;
        color: white;
        margin-left: 25px;
    }

    >input{
        width: 50%;
        height: 45%;
        border: none;
        font-family: sans-serif;
        font-size: 1.1em;
        margin-left: 120px;
    }

`

export const IconSearch = styled(BiSearch)`
    height: 24px;
    min-width: 24px;
    width: 24px;
    z-index: auto;
    color: white;
    left: 15%;
    position:absolute;
    cursor: pointer;
    
    `