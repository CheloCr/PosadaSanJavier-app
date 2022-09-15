
import { CollectionsOutlined } from '@mui/icons-material'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'
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

    const location = useLocation()
    console.log("LOCATION2",location)
    const cat = location.pathname.split("/")[2]
    console.log("EL cat",cat)
    const[filters,setfilters] = useState({})

    const handleFilters = (e) => {
        const value = e.target.value
        console.log("el value",value)
        setfilters({
            
            [e.target.name]:value
        })
    }

    

  return (
    <Container>
        <Navbar/>
        <Publicity/>
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
                <FilterText> Filtrar productos:</FilterText>
                <Select name="comidas" onChange={handleFilters}>
                    <Option>
                        Seleccionar
                    </Option>
                    <Option>Bebidas</Option>
                    <Option>comidas</Option>

                </Select>
            </Filter>
        </FilterContainer>
        <ProductsLists cat={cat} filters={filters}/>
        <Footer/>
    </Container>
  )
}

export default ProductList