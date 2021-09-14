import {React} from "react";
import {RouterHome} from './router/RouterHome/RouterHome'
import {About} from "./components/About/About"
import {Navigation} from "./components/Navigation/Navigation"
import {Detail} from "./components/Details/Detail"
import {HashRouter, Route} from 'react-router-dom';

import './App.css'

function App() {
    return <>
    <HashRouter>
        <Navigation/>
        <Route path = "/" component= {RouterHome} exact = {true}/>
        <Route path = "/about" component = {About} />
        <Route path = "/movie/:id" component = {Detail}  />
    </HashRouter>
    </>
    }

export default App