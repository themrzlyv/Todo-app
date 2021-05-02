import React from 'react'
import { Switch , Route} from 'react-router-dom'
import Favorites from './Favorites/Favorites'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'

const MainPages:React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/favorites" component={Favorites}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default MainPages
