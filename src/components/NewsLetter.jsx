
import styled from 'styled-components'
import {SendOutlined} from "@material-ui/icons"



const Container = styled.div`
   height: 60vh;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`

const Title = styled.h2`
    font-size: 70px;
    margin-bottom: 20px;
`

const Description = styled.div`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 20px;
`

const InputContainer = styled.div`
    width: 50%;
    height: 40px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    border: 1px solid black;
`

const Input = styled.input`
    border: none;
    flex: 8;
    padding-left: 20px;
`

const Button = styled.button`
    flex: 1 ;
    border: none;
    background-color: #e33917;;
    color: white;
`



const NewsLetter = () => {
  return (
    <Container>
        <Title>NewsLetter</Title>
        <Description>Recibe nuestras promociones</Description>
        <InputContainer>
            <Input placeholder='Tu correo'/>
            <Button>
                <SendOutlined/>
            </Button>
        </InputContainer>
    </Container>
  )
}

export default NewsLetter