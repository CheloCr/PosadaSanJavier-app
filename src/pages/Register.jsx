import styled from "styled-components"

const Container = styled.div`
    width: 100wv;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.1),
        rgba(255,255,255,0.4)),
    
    url("https://img.freepik.com/foto-gratis/vista-superior-deliciosa-comida-mexicana-lista-ser-servida_23-2148614425.jpg?w=2000");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 10px;
`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;

`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 20px 0 0 ;
    padding: 10px;

`

const Terms = styled.span`
    font-size: 13px;
    margin:20px 0;

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

  &:hover{
        transform: scale(1.1);
    }

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>Crear una cuenta</Title>
            <Form>
                <Input placeholder = "Nombre"/>
                <Input placeholder = "Apellido"/>
                <Input placeholder = "Usuario"/>
                <Input placeholder = "Email"/>
                <Input placeholder = "Contraseña"/>
                <Input placeholder = "Confirmar Contraseña "/>
                <Terms>Al crear una cuenta acepto el uso de mi información personal de a cuerdo a las <b>POLÍTICAS DE PRIVACIDAD</b></Terms>
            </Form>
            <Button>Crear Cuenta</Button>
        </Wrapper>
    </Container>
  )
}

export default Register