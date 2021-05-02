import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navi from './components/Header/Navi'
import { showFavs } from './Global/Fav.slice'
import { getTodosAsync } from './Global/Todo.slice'
import MainPages from './pages/MainPages'

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTodosAsync(``))
        dispatch(showFavs())
    },[dispatch])
    return <div style={{minHeight:"100vh"}} className="bg-blue">
        <Navi />
        <MainPages />
    </div>
}

export default App
