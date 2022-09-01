import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Publicity from "../components/Publicity";
import {Remove,Add} from "@material-ui/icons"


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;

const Title = styled.h1`
  font-weight: 800;
`;
const Descritpion = styled.p`
  margin: 20px 0;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 50px;
  
`

const AddContainer = styled.div `
    margin-top: 50px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const AmountContainer = styled.div `
    display: flex;
    align-items: center;
    font-size: 15px;
    font-weight: 700;
`

const Amount = styled.span `
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
`
const Button = styled.button `
cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 10px 20px;
  border-radius: 100px;
  background: #f6b162;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #443141;

  &:hover{
        transform: scale(1.05);
    }

`




const OneProduct = () => {
  return (
    <Container>
      <Navbar />
      <Publicity />
      <Wrapper>
        <ImageContainer>
          <Image src="https://vivirmejor.mx/wp-content/uploads/2020/08/Comida-Tipica-Mexicana-Pozole-02-Portada.jpg" />
        </ImageContainer>
        <InfoContainer>
          <Title>Pozole del patrón</Title>
          <Descritpion>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            perferendis suscipit alias est reiciendis, quis dolorem dolores
            nostrum blanditiis eligendi illum aliquam molestias, delectus itaque
            dicta, ipsum dolore exercitationem possimus.
          </Descritpion>
          <Price>$ 195</Price>

          <AddContainer>

          <AmountContainer>
            <Remove/>
            <Amount>1</Amount>
            <Add/>
          </AmountContainer>

          <Button>Añadir a carrito</Button>

          </AddContainer>

          

        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default OneProduct;
