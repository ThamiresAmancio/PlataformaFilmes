import styled from "styled-components";

export const SlideImage = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-top: 15px;
  
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

}

    >div{
     min-width: 215px;
     width: auto;
     height:120px;
     background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin-left: 25px ;
     border-radius: 10px;
     box-shadow: 6px 6px 6px 6px rgba(0, 0, 0, 0.5);
     border: 2px solid rgba(249, 249, 249, 0.1);

    :hover {
     -webkit-transform:scale(1.1); 
     -moz-transform:scale(1.1); 
     -o-transform:scale(1.1);
     transform:scale(1.1);
     border: 2px solid white;
     cursor: pointer;
    }


    >.link{
    font-size: 1.8em;
    font-family: 'Fuzzy Bubbles', cursive;
    color: white;
    margin-left: auto;
    margin-right: auto;
    text-decoration: none;

  }
}

`

export const Titulo = styled.h2`
    color: #fff;
    font-family: sans-serif;
    font-size: 1.9em;
    margin-top: 130px;
    margin-left: 50px;
    position: relative;    

    >div{
    
        display: none;
    }
    
    :hover{
        >div{
        width: auto;
        height: auto;
        position: absolute;
        margin-left: 365px;
        
        top:-35%;
        display: inline-block;

        
      >.linkDiv{
          font-size: .8em;
          font-family: sans-serif;
          color: #090b13;
          margin-left: auto;
          margin-right: auto;
          text-decoration: none;
      }
    }
 }

`


export const FilmesRandom = styled.div`

    min-width: 95%;
    width: auto;
    min-height: 250px;
    height: auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-auto-rows:auto;
    grid-gap: 40px ;
    align-items: center;
    justify-content: center;
    margin-top: 15px;

    >div{
     width: 200px;
     height:auto;
     background: linear-gradient(rgb(48, 50, 62), rgb(30, 31, 42));
     display: flex;
     align-items: center;
     justify-content: flex-start;
     margin-left: 40px ;
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