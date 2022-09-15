import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Publicity from "../components/Publicity";
import {Remove,Add} from "@material-ui/icons"
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Identity } from "@mui/base";
import { publicRequest } from "../requestMethods";
import { useState } from "react";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 30px;
  display: flex;

  @media only screen and (max-width:430px) {
    flex-direction: column;
    padding: 10px;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 50vh;
  object-fit: cover;
  border-radius: 10px;

  @media only screen and (max-width:430px) {
    height: 30vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;

  @media only screen and (max-width:430px) {
    padding: 10px;
  }
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

    @media only screen and (max-width:430px) {
      width: 100%;
  }
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
  const location = useLocation()
  console.log("LOCATION",location)
  const id = location.pathname.split("/")[2];
  console.log("EL DI",id)
  const [product,setPorduct] = useState({})
  const[quantity,setQuantity] = useState(1)
  const dispatch = useDispatch()

  useEffect(()=> {
    const getPorduct = async () => {
     
      try {
        const res = await publicRequest.get("/products/find/" + id)
        setPorduct(res.data)
         console.log("el res",res)
      } catch (error) {
        
      }
    }
    getPorduct()
  },[id])


  //Inc-Dec Quantity
  const handleQuantity = (type) => {
    if(type === "dec") {
      quantity > 1 && setQuantity(quantity - 1)
    } else {
      setQuantity(quantity + 1)
    }
  }

  //update shopping cart
  const handleClick = () => {
    dispatch(addProduct({...product,quantity}));
  };

  return (
    <Container>
      <Navbar />
      <Publicity />
      <Wrapper>
        <ImageContainer>
          <Image src= {product.img} />
        </ImageContainer>
        <InfoContainer>
          <Title>{product.title}</Title>
          <Descritpion>{product.description}</Descritpion>
          <Price>$ {product.price}</Price>

          <AddContainer>  

          <AmountContainer>
            <Remove onClick={()=>handleQuantity("dec")}/>
            <Amount>{quantity}</Amount>
            <Add onClick={()=>handleQuantity("inc")}/>
          </AmountContainer>

          <Button onClick={handleClick}>Añadir a carrito</Button>

          </AddContainer>

          

        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default OneProduct;
