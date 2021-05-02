import React from 'react'
import {changeCompleted, SingleTodoDataType} from '../../Global/Todo.slice'


import {MdFavoriteBorder} from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { addItem , removeItem} from '../../Global/Fav.slice'
import { RootState } from '../../Global/Store'

interface TodoProps {
    todo: SingleTodoDataType
}

const Todo:React.FC<TodoProps> = ({todo}) => {
    const dispatch = useDispatch()
    const {favorites} = useSelector((state:RootState) => state.favorites)
    const existedItem = favorites.find(item => todo.id === item.id)
    return (
        <div className="col-lg-4 shadow-2 p-0 mx-auto my-1" style={{width:"32%"}}>
            <div className="card text-white bg-dark" style={{height:"10em"}}>
                <div className="card-header d-flex justify-content-between border-bottom border-light">
                    <button className="btn btn-light shadow-1">
                        {todo.id}
                    </button>
                    <button
                    onClick={() => dispatch(changeCompleted(todo.id))}
                    className="btn btn-warning shadow-1"
                    >
                        {todo.completed ? <del>Completed</del> : "Uncompleted"}
                    </button>
                </div>
                <div className="card-body d-flex flex-column justify-content-end align-items-end">
                    <p className="card-title m-0 fst-italic text-capitalize">
                        <span className="fst-normal me-2 fw-bold">Content :</span>
                        {todo.title.slice(0,50) || "Content could't found! "}
                    </p>
                    {
                        existedItem === undefined ? <button 
                                                    onClick={() => dispatch(addItem(todo))}
                                                    className="btn text-light">
                                                        <MdFavoriteBorder fontSize={15}/>
                                                    </button> : 
                                                    <button 
                                                    onClick={() => dispatch(removeItem(todo))}
                                                    className="btn text-danger">
                                                        <MdFavoriteBorder fontSize={15}/>
                                                    </button>
                    }
                </div>
            </div>
        </div>
    )
}

export default React.memo(Todo)
