import styled from "styled-components";




export const Categorias = styled.div`

    width: 95%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;
    margin-top: 120px;

    >div{
     width: 200px;
     height:290px;
     background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin-left: 45px ;
     box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.2);
     border: 2px solid rgba(249, 249, 249, 0.1);
     border-radius: 3px;
     

    :hover {
     -webkit-transform:scale(1.2); 
     -moz-transform:scale(1.2); 
     -o-transform:scale(1.2);
     transform:scale(1.2);
     border: 2px solid white;
     margin-left: 60px;
     margin-right: 60px;
    }

    >img{
        width: 200px;
    }
}

`

export const Titulo = styled.h2`
    color: #fff;
    font-family: 'Fuzzy Bubbles', cursive;
    font-size: 1.9em;
    position: relative;
    text-align: center;
    margin-top: 30px;
`

