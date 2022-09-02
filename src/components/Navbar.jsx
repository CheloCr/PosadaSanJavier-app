import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import myImage from "./../images/Posada_Logo.png"



//todo  ------------- STYLE WITH STYLED COMPONENTS -----------


const Container = styled.div`
  height: 75px;
  background-color:#111111;
  color: white;
  

  @media only screen and (max-width:430px) {
    height: 70px;
  }
  
  
`;
const Margin = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width:430px) {
    padding: 10px 0;
  }

  
`;
//---------------- Left side --------------------
const Left = styled.div`
  flex: 1;
 
`;
const SearchBar = styled.div`
  width: 240px;
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding: 5px;

  @media only screen and (max-width:430px) {
    display: none;
  }
`

const Input = styled.input`
  border: none;
  border-radius: 2px;
  height:20px;
  margin-right: 5px;
  width: 200px;
`

//---------------- Center side --------------------

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`

const Logo = styled.img`
  width: 80px;
    height: 50px;

    @media only screen and (max-width:430px) {
      width: 80px;
      height: 50px;
      margin: 0 10px 0 -130px;
      

  }
`;

//---------------- Right side --------------------

const Right = styled.div`
display: flex;
justify-content:flex-end ;
  flex: 1;

  @media only screen and (max-width:430px) {
    flex: 3;
    justify-content:space-around;
    margin-right: 10px;

  }
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;

  @media only screen and (max-width:430px) {
    font-size: 14px;
    margin-left: 10px;

  }
`;

//todo  ------------- FUNCTION -------------

const Navbar = () => {
  return (
    <Container>
      <Margin>
        <Left>
          <SearchBar>
            <Input/>
            <Search style={{ fontSize:20}} />
          </SearchBar>
        </Left>

        <Center>
          <Logo src={myImage} />
        </Center>

        <Right>
          <MenuItem>Registrarme</MenuItem>
          <MenuItem>Mi cuenta</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingBagOutlined/>
            </Badge>
          </MenuItem>
        </Right>
      </Margin>
    </Container>
  );
};

export default Navbar;
