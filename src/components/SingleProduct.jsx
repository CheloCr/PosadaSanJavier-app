
import styled from 'styled-components'
import {AddShoppingCartOutlined,SearchOutlined,FavoriteBorderOutlined} from "@material-ui/icons"

//? This need to be on the top due to hover effect on Container
const Information = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.2) ;
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
    border-radius: 10px;
`

const Container = styled.div `
    flex:1 ;
    margin: 20px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &:hover ${Information}{
        opacity: 1;
    }

`

const Background = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    background-color: white;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 2;
    border-radius: 10px;
`



const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    transition: all 0.3s ease;

    &:hover{
        background-color: #ebc763 ;
        transform: scale(1.1);
    }
`


const SingleProduct = ({item}) => {
  return (
    <Container>
        <Background/>
        <Image src={item.img}/>
        <Information>
            <Icon>
                <AddShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Information>
    </Container>
  )
}

export default SingleProduct