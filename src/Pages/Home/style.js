import styled from "styled-components";


export const SlideImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-top: 35px;

  :hover{
      cursor: pointer;
  }
  
  
`
export const Categorias = styled.div`

    width: 95%;
    min-height: 250px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows:auto;
    grid-gap: 50px ;
    align-items: center;
    justify-content: center;
    margin-left: 50px;
    margin-top: 65px ;
    

    >div{
     width: 225px;
     height:130px;
     background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin-left: 25px ;
     border-radius: 10px;
     box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.2);
     border: 2px solid rgba(249, 249, 249, 0.1);

    :hover {
     -webkit-transform:scale(1.1); 
     -moz-transform:scale(1.1); 
     -o-transform:scale(1.1);
     transform:scale(1.1);
     border: 2px solid white;
     cursor: pointer;
    }
  
}
`

