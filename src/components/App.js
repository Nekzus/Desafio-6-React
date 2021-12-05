import React from 'react';
import Header from './Header/Header'
import Footer from './Footer/Footer'
import ItemListContainer from './ItemListContainer/ItemListContainer'

const App = () => {

    return (
        <>
            <Header />
            <ItemListContainer message="Hola, Bienvenido... este es un mensaje mediante props." />
            <Footer />
        </>
    )


};

export default App;
