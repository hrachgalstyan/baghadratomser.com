import React, { Component } from 'react'
import IngredientsItem from './IngredientsItem';


export default class IngredientsList extends Component {
    render() {
        const {items, clearList, handleDelete, handleEdit } = this.props;
        return (
            <ul className='list-group my-2'>
                <h5
                    className={
                        (items.length === 0 )
                            ? "d-none"
                            : "text-capitalize text-center"
                        }>
                        Բաղադրիչներ
                </h5>
                {items.map(item => {
                    return(
                        <div className="list-group" key={item.id}>
                            <IngredientsItem title={item.title} handleDelete={()=>handleDelete(item.id)} handleEdit={() => handleEdit(item.id)}></IngredientsItem>
                        </div>
                    )
                })}
                <button 
                type="button"
                className={
                    (items.length === 0 )
                        ? "d-none"
                        : "btn btn-danger btn-block text-uppercase"
                    } 
                onClick={clearList}>
                    Մաքրել ցանկը
                </button>
            </ul>
        )
    }
}