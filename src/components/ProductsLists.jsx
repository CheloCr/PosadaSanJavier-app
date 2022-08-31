
import styled from 'styled-components'
import {popularDishes} from "../generalData"
import SingleProduct from './SingleProduct'


const Container = styled.div ` 
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`


const ProductsLists = () => {
  return (
    <Container>
        {popularDishes.map(item => (
            //? Warning: Each child in a list should have a unique "key" prop.
            //? this error is because we need to state a key on .MAP
            <SingleProduct item = {item} key = {item.id} />

        ))}
    </Container>
  )
}

export default ProductsLists