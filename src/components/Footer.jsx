import styled from "styled-components"
import LogoImage from "./../images/Posada_Logo.png"
import {Facebook,Instagram,Phone,Room,Mail} from "@material-ui/icons";


const Container = styled.div`
    display: flex;
    background-color:#111111 ;

    @media only screen and (max-width:430px) {
    flex-direction: column;
    
  }
`

//---------------- Left side --------------------

const SideLeft = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
`

const Image = styled.img`
    width: 200px;
    height: 100px;
`
const Description = styled.p`
    color: white;
    margin: 20px 0;
    display: flex;
    text-align: center;
`
const SocialMedia = styled.div`
    display: flex;
`

const SocialIcon = styled.div`
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #${props => props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`

//---------------- Center side --------------------

const SideCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
     flex: 1;

     @media only screen and (max-width:430px) {
        display: none;
  }
`


const List = styled.ul`
    color: white;
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 30px;
`

//---------------- Right side --------------------

const SideRight = styled.div`
     flex: 1;
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ContactItem = styled.div`
    color: white;
    margin-bottom: 20px;
    padding: 0 20px;
    display: flex;
    align-items: center;
`

const Payment = styled.img`
    width: 50%;
    margin-bottom: 20px;
`



const Footer = () => {
  return (
    <Container>
        <SideLeft>
            <Image src={LogoImage}></Image>
            <Description>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus ullam reprehenderit labore deserunt nam. Magni mollitia amet quaerat recusandae necessitatibus iure, voluptatum 
            </Description>
            <SocialMedia>
                <SocialIcon color="3B5999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
            </SocialMedia>
            

        </SideLeft>
        <SideCenter>
            <List>
            <ListItem>Inicio</ListItem>
            <ListItem>Carta</ListItem>
            <ListItem>Mi Cuenta</ListItem>
            <ListItem>Rastreo de pedido</ListItem>
            <ListItem>Terminos y Condiciones</ListItem>
            <ListItem>Politicas de Entrega</ListItem>
            </List>
        </SideCenter>
        <SideRight>
            <ContactItem><Room style={{marginRight:"10px"}}/>
            Av. Teotihuacán 31, Hab la Romana, 54030 Tlalnepantla de Baz, Méx.
            </ContactItem>
            <ContactItem><Phone style={{marginRight:"10px"}}/>
            Teléfono: 53909018
            </ContactItem>
            <ContactItem><Mail style={{marginRight:"10px"}}/>
            Email: posadaSJ@hotmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png"/>
        </SideRight>
    </Container>
  )
}

export default Footer