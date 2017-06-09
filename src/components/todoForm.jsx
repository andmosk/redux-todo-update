import React, {Component} from 'react';
import {connect} from 'react-redux'

import {addTodo} from './../actions/index'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addTodo(this.state.value);
        this.setState({value: ''})
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="form-control col-md-12" value={this.state.value}
                       onChange={this.handleChange}/>
                <br/>
            </form>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    addTodo(text) {
        dispatch(addTodo(text));
    }
});

export default connect(null, mapDispatchToProps)(TodoForm);

