import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Publicity from "../components/Publicity";
import { Remove, Add } from "@material-ui/icons";
import { useSelector } from "react-redux";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  @media only screen and (max-width: 430px) {
    padding: 10px;
  }
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "red" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopText = styled.div``;

const TextOne = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  @media only screen and (max-width: 430px) {
    display: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Hr = styled.hr`
  background-color: #bebaba;
  border: none;
  height: 2px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 45vh;
`;
const SummaryTitle = styled.h1`
  font-weight: 200;
`;
const SummaryItem = styled.div`
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  cursor: pointer;
  font-weight: 600;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 10px;
  border-radius: 10px;
  background: #f6b162;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  color: #443141;

  &:hover {
    transform: scale(1.05);
  }
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  margin-top: 10px;

  @media only screen and (max-width: 430px) {
    flex-direction: column;
  }
`;

const ProductDetails = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 300px;

  @media only screen and (max-width: 430px) {
    width: 200px;
  }
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media only screen and (max-width: 430px) {
    margin: 25px 15px;
  }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;

  @media only screen and (max-width: 430px) {
    margin: 5px 25px;
  }
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;

  @media only screen and (max-width: 430px) {
    margin-bottom: 10px;
  }
`;

const Cart = () => {

    const cart = useSelector((state) => state.cart);
  

  return (
    <Container>
      <Navbar />
      <Publicity />
      <Wrapper>
        <Title>Mi Carrito</Title>
        <Top>
          <TopButton>Seguir comprando</TopButton>
          <TopText>
            <TextOne>Carrito de compras(2)</TextOne>
            <TextOne>Wish List(0)</TextOne>
          </TopText>
          <TopButton type="filled">Pagar Ahora</TopButton>
        </Top>
        <Bottom>
          <Info>
          {cart.products.map((product) => (
            <Product>
              <ProductDetails>
                <Image src={product.img}/>
                <Details>
                  <ProductName>
                    <b>Producto:</b> {product.title}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {product._id}
                  </ProductId>
                </Details>
              </ProductDetails>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>{product.quantity}</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice> $ {product.price * product.quantity}</ProductPrice>
              </PriceDetail>
            </Product>
            ))}
          </Info>
          <Summary>
            <SummaryTitle>Resumen de la Orden</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Costo de envío</SummaryItemText>
              <SummaryItemPrice>$ 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Descuento en envío</SummaryItemText>
              <SummaryItemPrice>$ - 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
            </SummaryItem>
            <Button>Confirmar pedido</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
