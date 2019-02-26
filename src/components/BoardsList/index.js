import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addNewBoard, fetchBoards } from '../../actions';
import styles from './boards-list.module.scss';

class BoardsList extends Component {
    componentDidMount() {
        this.props.fetchBoards();
    }

    render() {
        console.log('render');
        return ( 
            <Fragment>
                <button onClick = {this.props.addNewBoard}>Add new</button>
                <ul>
                    {this.props.boards.map((board, index) => {
                        return <li key = {index}>{board.name}</li>
                    })}
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        boards: state.boards
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchBoards: () => dispatch(fetchBoards()),
        addNewBoard: () => dispatch(addNewBoard('new'))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardsList);