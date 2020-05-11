import React, { Component } from 'react'
import "@fortawesome/fontawesome-free/css/all.min.css";

export default class IngredientsItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props;
        return (
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
                <h6 className="my-auto">{title}</h6>
                <div className="todo-icon">
                    <span className="mx-2 text-success" onClick={handleEdit}><i className="fas fa-pen" /></span>
                    <span className="mx-2 text-danger" onClick={handleDelete}><i className="fas fa-trash" /></span>
                </div>
            </li>
            
        )
    }
}