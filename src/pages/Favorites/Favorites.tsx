import React from 'react'
import { useSelector } from 'react-redux'
import Todo from '../../components/Todo/Todo'
import { RootState } from '../../Global/Store'

const Favorites = () => {
    const {favorites} = useSelector((state:RootState) => state.favorites)
    return (
        <div className="container bg-blue">
            <div className="row">
                <div className="col-lg-12 ">
                    <h4 className="my-2 text-center text-light border-bottom">Favorite Todos</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="container ">
                        <div className="row my-3">
                            {
                                favorites.length === 0 ? 
                                    <h4>Todo list is empty</h4>
                                    :
                                    favorites.map(todo => <Todo key={todo.id} todo={todo}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Favorites
