import styled from "styled-components";
import {
  ArrowBackIosNewOutlined,
  ArrowForwardIosOutlined,
} from "@mui/icons-material";
import { useState } from "react";
import { carrouselItems } from "../generalData";

//todo  ------------- STYLE WITH STYLED COMPONENTS -----------

//---------------- Container --------------------

const Container = styled.div`
  width: 100%;
  height: 75vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media only screen and (max-width:430px) {
    display: none;
  }
`;
//---------------- Arrows --------------------

const Arrows = styled.div`
  width: 50px;
  height: 50px;
  background-color: #e3e2e2;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 100px;
  left: ${ props => props.direction === "Left" && "50px"};
  right: ${ props => props.direction === "Right" && "50px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.6;
  z-index: 2;
`

//---------------- Wrapper for Carrousel --------------------

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${props => props.slideIndex * -100}vw );// slider transition
`;

//---------------- Slide General Cotainer --------------------

const Slides = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
`;

//---------------- Container for Images Left --------------------

const ImagesContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 70%;
  border-radius: 0 10px 10px 0;
`;

//---------------- Container for Information Right --------------------

const InfoContainer = styled.div`
  flex: 1;
  padding: 70px;
  margin-bottom: 200px;
`;

const InfoTitle = styled.h1`
  font-size: 70px;
  color: #8a505f;
  line-height: 1.2;
  letter-spacing: 2px;
`;

const InfoDesc = styled.p`
  margin: 50px 0;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 4px;
  line-height: 1.5;
  color: #443141;
`;

const InfoButton = styled.button`
  cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 10px 20px;
  margin-bottom: 20px;
  border-radius: 100px;
  background: #f6b162;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #443141;

  &:hover{
        transform: scale(1.1);
    }
`



//todo  ------------- FUNCTION -------------

const Carrousel = () => {

    //State Hook for Slide
    const [slideIndex,slideSet] = useState (0)
   
    //Function for the Slider Right/Left
    const handleClick =(direction) => {
      if(direction === "left" ) {
        slideSet(slideIndex > 0 ? slideIndex -1 : 2 )
      } else {
        slideSet(slideIndex < 2 ? slideIndex + 1 : 0)
      }

    }



  return (
    <Container>
      <Arrows direction = "Left" onClick={() => handleClick("left")}>
        <ArrowBackIosNewOutlined />
      </Arrows>

      <Wrapper slideIndex = {slideIndex}>
        {carrouselItems.map((item) => (
        <Slides key = {item.id}>
          <ImagesContainer>
            <Image src={item.img}/>
          </ImagesContainer>
          <InfoContainer>
            <InfoTitle>{item.title}</InfoTitle>
            <InfoDesc>{item.description}</InfoDesc>
            <InfoButton>COMPRAR AHORA</InfoButton>
          </InfoContainer>
        </Slides>
      ))}
      </Wrapper>

      <Arrows direction = "Right" onClick={() => handleClick("right")} >
        <ArrowForwardIosOutlined />
      </Arrows>
    </Container>
  );
};

export default Carrousel;
