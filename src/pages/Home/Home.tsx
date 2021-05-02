import React  from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Todo from '../../components/Todo/Todo'
import { RootState } from '../../Global/store'

const Home:React.FC = () => {
    const data = useSelector((state:RootState) => state.todo)
    return (
        <div className="container-fluid m-0 bg-blue">
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <div className="container ">
                        <div className="row shadow-1 my-3">
                            {
                                data.status === "loading" ? 
                                    <h4>Loading...</h4>
                                :   
                                    data.todos.length === 0 ? 
                                    <h4>Todo list is empty</h4>
                                    :
                                    data.todos.map(todo => <Todo key={todo.id} todo={todo}/>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
