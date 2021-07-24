import React from 'react'
import About from './About'
import Baptism from './Baptism'
import Cutedress from './Cutedress'
import Decorate from './Decorate'
import Dressboy from './Dressboy'
import Dressgirl from './Dressgirl'
import Footerf from './Footerf'
import Footerl from './Footerl'

import Header from './Header'
import HeaderTop from './HeaderTop'
import Ratedproducts from './Ratedproducts'
import Weeklyproduct from './Weeklyproduct'

const App = () => {
    return (
        <div>
            <HeaderTop/>
            <Header/>
            <Baptism/>
            <Weeklyproduct/>
            <Cutedress/>
            <Dressgirl/>
            <Dressboy/>
            <About/>
            <Decorate/>
            <Ratedproducts/>

            <Footerf/>
            <Footerl/>
        </div>
    )
}
export default App;
