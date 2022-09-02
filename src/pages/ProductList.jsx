
import styled from 'styled-components'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductsLists from '../components/ProductsLists'
import Publicity from '../components/Publicity'


const Container = styled.div`
    
`

const Title = styled.h1`
    margin: 30px;
`

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const Filter = styled.div`
    margin: 30px;

    @media only screen and (max-width:430px) {
       width: 0 20px;
       display: flex;
       flex-direction: column;
  }
`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

`

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;

    @media only screen and (max-width:430px) {
       margin: 14px 0;
  }
`

const Option = styled.option`
`

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Publicity/>
        <Title>Favoritos</Title>
        <FilterContainer>
            <Filter>
                <FilterText> Filtrar productos:</FilterText>
                <Select>
                    <Option disabled selected>
                        Seleccionar
                    </Option>
                    <Option>Bebidas</Option>
                    <Option>Comida</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <ProductsLists/>
        <Footer/>
    </Container>
  )
}

export default ProductList