import styled from "styled-components"

const Container = styled.div`
    width: 100wv;
    height: 100vh;
    background: linear-gradient(
        rgba(255,255,255,0.1),
        rgba(255,255,255,0.2)),
    
    url("https://img.freepik.com/foto-gratis/comida-ingredientes_1220-4884.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Wrapper = styled.div`
    width: 25%;
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
    flex-direction: column;

`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0 ;
    padding: 10px;

`


const Button = styled.button`

cursor: pointer;
  font-weight: 700;
  font-family: Helvetica, "sans-serif";
  transition: all 0.2s;
  padding: 10px 20px;
  border-radius: 10px;
  background: #f6b162;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #443141;
  margin-bottom: 10px;

  &:hover{
        transform: scale(1.1);
    }

`

const Link = styled.a`
  margin: 5px 0;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
  display: flex;
`

const Login = () => {
  return (
    <Container>
       <Wrapper>
            <Title>Ingresar a mi Cuenta</Title>
            <Form>
                <Input placeholder = "Usuario"/>
                <Input placeholder = "Contraseña"/>
                
            </Form>
            <Button>Entrar</Button>
            <Link>Olvidaste tu contraeña?</Link>
            <Link>Crear una nueva cuenta</Link>
        </Wrapper>
    </Container>
  )
}

export default Login