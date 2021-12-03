import styled from "styled-components";


export const SlideImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  margin-top: 35px;
` 
export const Categorias = styled.div`

    width: 95%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;



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
    }

    >p{
        font-size: 1.9em;
        font-family: 'Fuzzy Bubbles', cursive;
        color: white;
        margin-left: auto;
        margin-right: auto;
        
    }
}

`

export const CategoriasTwo = styled.div`

    width: 95%;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 40px;

    >div{
     width: 225px;
     height:120px;
     display: flex;
     background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
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
 
    }

   >p{
        font-size: 1.9em;
        font-family: 'Fuzzy Bubbles', cursive;
        color: white;
        margin-left: auto;
        margin-right: auto;
        
    }
}

`

