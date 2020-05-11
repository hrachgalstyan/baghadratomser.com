import React, { Component } from "react";

// hello world
export default class IngredientsInput extends Component {
    render() {
    const { item, handleChange, handleSubmit, editItem } = this.props;
    return (
        <div>
            <div className="input-group">
                <input
                type="text"
                className="form-control text-capitalize"
                placeholder="Բաղադրիչներ"
                value={item}
                onChange={handleChange}
                />
                <div className="input-group-append">
                    <button 
                        type="button"
                        disabled={item ? false : true}
                        className={
                            editItem
                                ? "btn btn-block btn-success"
                                : "btn btn-block btn-success"
                            }
                        onClick={handleSubmit}
                        >
                        {editItem ? "Խմբագրել" : "Ավելացնել"}
                    </button>
                </div>
            </div>
        </div>
    )
    }
}

