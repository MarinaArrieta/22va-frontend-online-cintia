import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Grid, GridItem } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'

const AppLayout = ({ children }) => {
    return (
        <Grid
            templateAreas={`"header"
                  "main"
                  "footer"`}
            gridTemplateRows={'100px 1fr 75px'}
            minHeight='100vh'
            h='200px'
            gap='1'
            fontWeight='bold'
        >
            <GridItem bg='orange.300' area={'header'}>
                <Header/>
            </GridItem>

            <GridItem pl='2' bg='green.300' area={'main'} padding='5'>
                {children}
                {/* <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/products' element={<Products />} />
                </Routes> */}
            </GridItem>

            <Footer area={'footer'}/>
        </Grid>
    )
}

export default AppLayout
