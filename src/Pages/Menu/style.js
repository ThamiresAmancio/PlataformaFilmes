import styled from "styled-components";

export const MenuTitle = styled.nav`

    width: 100%;
    height: 90px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    >h1{
        font-family: 'Fuzzy Bubbles', cursive;
        font-size: 40px;
        color: white;
        padding: 2%;
    }


    p{
        font-family: 'Fuzzy Bubbles', cursive;
        font-size: 1.8em;
        color: white;
        margin-left: 25px;
    }

    >input{
        width: 50%;
        height: 45%;
        border: none;
        font-family: sans-serif;
        font-size: 1.1em;
        margin-left:50px ;
    }

        >select{
            width: auto;
            height: auto;
            display: flex;
            justify-content: flex-start;
            flex-direction: row;
            gap: 20%;
            align-items: flex-start;
            margin-left: 35px;

            >option{
                font-family: 'Fuzzy Bubbles', cursive;
                font-size: 1.5em;
            }
        }
  }
`

