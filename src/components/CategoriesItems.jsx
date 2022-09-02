
import styled from "styled-components"


const Container = styled.div`
    flex:1;
    height: 70vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
   
    @media only screen and (max-width:430px) {
    height: 30vh;
  }

    
`
const Information = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.h1`
    color: white;
    margin-bottom: 20px;
    text-shadow: 2px 2px black;

`
const Button = styled.button`
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
  -webkit-box-shadow: 11px 4px 17px -1px rgba(0,0,0,0.63);
-moz-box-shadow: 11px 4px 17px -1px rgba(0,0,0,0.63);
box-shadow: 11px 4px 17px -1px rgba(0,0,0,0.63);


  &:hover{
        transform: scale(1.1);
    }
  
`


const CategoriesItems = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Information>
            <Title>{item.title}</Title>
            <Button>Ordenar</Button>
        </Information>
    </Container>
  )
}

export default CategoriesItems