import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../Global/store'
import {  getTodosAsync } from '../../Global/Todo.slice'

const Navi = () => {
    const dispatch = useDispatch()
    const favlist = useSelector((state:RootState) => state.favorites.favorites)
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-2">
            <div className="container">
                <a className="navbar-brand border-end border-light p-2" href="#">Todo App</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button 
                            onClick={() => dispatch(getTodosAsync(``))}
                            className="btn nav-link">
                                All Todos
                            </button>
                        </li>
                        <li className="nav-item">
                            <button 
                            onClick={() => dispatch(getTodosAsync(`uncompleted`))}
                            className="btn nav-link">UnCompleted</button>
                        </li>
                        <li className="nav-item">
                            <button 
                            onClick={() => dispatch(getTodosAsync(`completed`))}
                            className="btn nav-link">Completed</button>
                        </li>
                        <li className="nav-item">
                            <NavLink className="btn nav-link" to={`/favorites`}>
                                <MdFavoriteBorder fontSize={15}/>
                                <span className="badge bg-danger">{favlist.length}</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default React.memo(Navi)
