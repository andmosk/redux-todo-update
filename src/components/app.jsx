import React from 'react';
import TodoForm from './todoForm.jsx';
import Title from './title.jsx';
import List from './todo-list.jsx';


const App = () => {
    return (
        <div className="col-md-8 col-md-offset-2">
            <Title />
            <TodoForm />
            <List />
        </div>
    );
};

export default App;
