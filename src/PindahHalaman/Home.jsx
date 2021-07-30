import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-dom'
import About from './About'

const Home = () => {
    return(
        <Router>
            <Link to='/About'>Pindah</Link>
            <Route path='/About' component={About} />
        </Router>
    );
};

export default Home;