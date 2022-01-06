import styled from "styled-components";

export const Footers = styled.footer`
  background: black;
  position: absolute; /* posição absoluta */
  bottom: 150; /* Fixa a div no fim da página */
  width: 100%; /* Largura estende por toda página da div */
  height: 90px;

  > p {
    font-size: 1.3em;
    font-family: "Fuzzy Bubbles", cursive;
    color: white;
  }
`;
