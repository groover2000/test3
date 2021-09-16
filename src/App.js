import {React} from "react";
import {RouterHome} from './router/RouterHome/RouterHome'
import {About} from "./components/About/About"
import {Navigation} from "./components/Navigation/Navigation"
import {Detail} from "./components/Details/Detail"
import {HashRouter, Route} from 'react-router-dom';
import { routes } from "./routes/index";

import './App.css'

function App() {
    return <>
    <HashRouter>
        <Navigation/>
    {routes.map((route)=>{
       return <Route component = {route.component} path = {route.path} exact = {route.exact} />
    })}
    </HashRouter>
    </>
    }

 

export default App