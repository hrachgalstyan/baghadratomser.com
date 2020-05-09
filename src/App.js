import React from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import $ from "jquery"

// ********** pages ********** //
import Home from './pages/Home'
import About from './pages/About'
import Advices from './pages/Advices'
import Confidentiality from './pages/Confidentiality'
import Contact from './pages/Contact'
import Error from './pages/Error'
import FAQ from './pages/FAQ'
import Recipes from './pages/Recipes'
import Shop from './pages/Shop'
import SingleRecipe from './pages/SingleRecipe'

// ********** components ********** //
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'

export default function App() {
    return (
        <Router>
            <ScrollTop>
            {/* ********** components *********** */}
            <Header />

            {/* ********** Pages ********** */}

            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/recipes'>
                    <Recipes />
                </Route>
                <Route path='/advices'>
                    <Advices />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/about'>
                    <About />
                </Route>
                <Route path='/contact'>
                    <Contact />
                </Route>
                <Route path='/confidentiality'>
                    <Confidentiality />
                </Route>
                <Route path='/FAQ'>
                    <FAQ />
                </Route>
                <Route path='/shop'>
                    <Shop />
                </Route>
                
                <Route path='/recipes/:id' children={<SingleRecipe></SingleRecipe>}>
                    
                </Route>
                <Route path='*'>
                    <Error />
                </Route>
            </Switch>
            <Footer />
            </ScrollTop>
        </Router>
    )
}
