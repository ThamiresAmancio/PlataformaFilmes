import styled from "styled-components";


export const Categorias = styled.div`

    min-width: 95%;
    width: auto;
    min-height: 250px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows:auto;
    grid-gap: 40px ;
    align-items: center;
    justify-content: center;
    margin-top: 100px;

    >div{
     width: 200px;
     height:auto;
     background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin-left: 45px ;
     box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.2);
     border: 4px solid rgba(249, 249, 249, 0.1);
     border-radius: 3px;
    
     
    :hover {
     -webkit-transform:scale(1.2); 
     -moz-transform:scale(1.2); 
     cursor: pointer;
     -o-transform:scale(1.2);
     transform:scale(1.2);
     transition: all  200ms  ease-in ;
     border: 4px solid white;
    
    }

    >img{
        width: 200px;
    }
}

`

export const Titulo = styled.h2`
    color: #fff;
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 40px;
    margin-top: 35px;
    margin-left: 48px;
    text-align: center;
`

export const Videos = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    margin-top: 35px;
`



