import React from 'react';
import {connect} from 'react-redux';

const Title = ({todoCount}) => {

    return (
        <div>
            <h1 className="text-center">To-Do ({todoCount})</h1>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {todoCount: state.todos.length}
};


export default connect(mapStateToProps)(Title);