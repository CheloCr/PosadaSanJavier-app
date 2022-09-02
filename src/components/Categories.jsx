import styled from 'styled-components'
import {categories} from "../generalData"
import CategoriesItems from './CategoriesItems'



const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;

    @media only screen and (max-width:430px) {
    padding: 0;
    flex-direction: column;
  }

`



const Categories = () => {
  return (
    <Container>
        {categories.map(item => (
           <CategoriesItems item  = {item} key = {item.id} />
        ))}
    </Container>
  )
}

export default Categories