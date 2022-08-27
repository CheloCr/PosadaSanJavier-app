import styled from "styled-components"





//todo  ------------- STYLE WITH STYLED COMPONENTS -----------


const Container = styled.div`
    height: 30px;
    background: rgb(131,58,180);
background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    font-weight: 600;


`


//todo  ------------- FUNCTION -------------

const Carrousel = () => {
  return (
    <Container>
        Aprovecha nuestra temporada de Chiles en Hogada 
    </Container>
  )
}

export default Carrousel