import React from 'react';
import Todo from './todo.jsx';
import {connect} from 'react-redux';
import {removeTodo} from './../actions/index'


const List = ({todos, remove}) => {

    let allTodos = [];

    if (todos.length > 0) {
        allTodos = todos.map((todo, count) => {
            return (<Todo todo={todo} key={count} remove={remove}/>);
        });
    } else {
        allTodos.push(<h3 id="acu" key="0">All caught up !</h3>);
    }

    return (
        <div id="list" className="list-group" style={{marginTop: '30px'}}>
            {allTodos}
        </div>
    );
};
const mapStateToProps = (state) => {
    return {todos: state.todos}
};

const mapDispatchToProps = (dispatch) => {
    return {
        remove(id)  {
            dispatch(removeTodo(id));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(List);