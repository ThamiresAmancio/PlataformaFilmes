import Slider from "react-slick";
import styled from "styled-components";
import { Container } from "./Home/style";

function SlideImg(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return(

        <>
        <Container {...settings}>
            Hello
        </Container>
        </>
    )
}

export default SlideImg;


const Carousel = styled(Slider)