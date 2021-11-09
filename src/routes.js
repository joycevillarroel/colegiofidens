import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ROUTES from './Components/Constants/LinksContent';
import LINKSCONTENT from './Components/Constants/LinksContent';
import './App.css';

// importar componentes da página
import Navbar from './Components/Navbar/Navbar';
// import Footer from './Components/Footer/Footer';
import Bullet from './Components/Bullet/Bullet';

// importar todos os componentes que serão roteados
import Home from './views/home/Home';
// import Content from './Components/Content/Content';
// import About from './Components/About/About';

const Routes = () => {
    return (
        <div>
            <Router basename="/colegio-fidens">
                <Navbar />
                <Switch>
                    <Route path={ROUTES.HOME} exact component={Home} />
                </Switch>
                <div className="bullets">
                    { LINKSCONTENT.map((link) => (
                            <Bullet linkData={link}/>
                    ))}
                </div>
            </Router>
        </div>
    )
}

export default Routes;