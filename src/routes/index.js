import {RouterHome} from '../router/RouterHome/RouterHome'
import {About} from "../components/About/About"
import {Detail} from '../components/Details/Detail'

const routes = [
    {path: '/', component: RouterHome, exact: true },
    {path: '/about', component: About, exact: true },
    {path: '/movie/:id', component: Detail, exact: true },
]

export {routes}