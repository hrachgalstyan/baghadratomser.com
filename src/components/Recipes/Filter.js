import React from 'react'
import styled from 'styled-components'
import { RecipesConsumer } from '../../context/recipes';

export default function FilterProducts() {
    return (
        <RecipesConsumer>
            {value => {
                const {type, time, handleChange, featured, author, ingredients, products} = value;

                // set types
                let types = new Set();
                types.add("Տեսակ");
                for (let product in products) {
                    types.add(products[product]["type"]);
                }
                types = [...types];

                // set author
                let authors = new Set();
                authors.add("Տեղադրող");
                for (let product in products) {
                    authors.add(products[product]["author"]);
                }
                authors = [...authors];

                // ingredients
                let ingredient = new Set();
                let minI = Math.min(...products.map(item => item.ingredients.length));
                let maxI = Math.max(...products.map(item => item.ingredients.length));
                let minValue = Math.round(minI/5)*5;
                let maxValue = Math.round(maxI/5)*5;
                ingredient.add("Բաղադրիչներ");
                for(var i = minValue; i <= maxValue; i+=5){
                    ingredient.add(i + ' բաղադրիչ');
                }
                ingredient = [...ingredient];


                // set times
                let times = new Set();
                let min = Math.min(...products.map(item => item.time));
                let max = Math.max(...products.map(item => item.time));
                let minVal = Math.round(min/5)*5;
                let maxVal = Math.round(max/5)*5;
                times.add("Պատրաստման ժամանակը");
                for(var i = minVal; i <= maxVal; i+=5){
                    times.add(i + " րոպե");
                }
                times = [...times];

                return (
                    <>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="single-post w-75 mx-auto text-center">
                                    <h3 className="post-category font-weight-light p-3 text-center">Ընդլայնված որոնում</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col-10 mx-auto">
                            <div className="container mx-auto">
                                <div className="row mx-1 flex-wrap">
                                    <div className="col-sm my-2">
                                        <InputButton type="text" className="form-control" name="search" id="search" placeholder="Փնտրել" autoComplete="off" onChange={handleChange} />
                                    </div>
                                    <div className="col-sm my-2">
                                        <CustomSelect className="custom-select" name="type" id="type" value={type} onChange={handleChange}>
                                        {types.map((type, index) => {
                                            return (
                                            <option key={index} value={type}>
                                                {type}
                                            </option>
                                            );
                                        })}
                                        </CustomSelect>
                                    </div>
                                    <div className="col-sm my-2">
                                        <CustomSelect className="custom-select" name="time" id="time" value={time} onChange={handleChange}>
                                        {times.map((time, index) => {
                                            return (
                                            <option key={index} value={time}>
                                                {time}
                                            </option>
                                            );
                                        })}
                                        </CustomSelect>
                                    </div>
                                </div>
                                <div className="row mx-1 flex-wrap">
                                    <div className="col-sm my-2">
                                        <CustomSelect className="custom-select" name="author" id="author" value={author} onChange={handleChange}>
                                        {authors.map((author, index) => {
                                            return (
                                            <option key={index} value={author}>
                                                {author}
                                            </option>
                                            );
                                        })}
                                        </CustomSelect>
                                    </div>
                                    <div className="col-sm my-2">
                                        <CustomSelect className="custom-select" name="ingredients" id="ingredients" value={ingredients} onChange={handleChange}>
                                        {ingredient.map((ingredient, index) => {
                                            return (
                                            <option key={index} value={ingredient}>
                                                {ingredient}
                                            </option>
                                            );
                                        })}
                                        </CustomSelect>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </>
                )
            }}
        </RecipesConsumer>
    )
}

const CustomSelect = styled.select`
    &:focus{
        outline: none;
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.2);
    }
`;

const InputButton = styled.input`
    &:focus{
        outline: none;
        box-shadow: none;
        border-color: rgba(0, 0, 0, 0.2);
    }
`;