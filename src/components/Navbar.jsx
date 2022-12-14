import { Badge } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import { ShoppingBagOutlined } from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import myImage from "./../images/Posada_Logo.png"

//todo creating with styled components
//div will be used
const Container = styled.div`
  height: 75px;
  background-color: black;
  color: white;
 border-radius: 0 0 10px 10px;
`;
const Margin = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
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
`

const Input = styled.input`
  border: none;
  height:20px;
  margin-right: 5px;
`

//---------------- Center side --------------------

const Center = styled.div`
  flex: 1;
  text-align: center;
  
`

const Logo = styled.img`
  width: 80px;
    height: 50px;
`;

//---------------- Right side --------------------

const Right = styled.div`
display: flex;
justify-content:flex-end ;
  flex: 1;
`;

const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`;



const Navbar = () => {
  return (
    <Container>
      <Margin>
        <Left>
          <SearchBar>
            <Input />
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
