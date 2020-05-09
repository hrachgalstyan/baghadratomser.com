import React from 'react'
import styled from 'styled-components'

export default function FilterProducts() {
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
                            <InputButton type="text" className="form-control" name="search" id="search" placeholder="Փնտրել" />
                        </div>
                        <div className="col-sm my-2">
                            <CustomSelect className="custom-select" name="type" id="type">
                                <option>
                                    Տեսակ
                                </option>
                                <option>
                                    Նախուտեստներ
                                </option>
                                <option>
                                    Տաք ուտեստներ
                                </option>
                                <option>
                                    Ըմպելիքներ
                                </option>
                                <option>
                                    Թխվածքներ
                                </option>
                                <option>
                                    Դիետիկ
                                </option>
                            </CustomSelect>
                        </div>
                        <div className="col-sm my-2">
                            <CustomSelect className="custom-select" name="time" id="time">
                                <option>
                                    Պատրաստման ժամանակը
                                </option>
                                <option>
                                    5ր
                                </option>
                                <option>
                                    10ր
                                </option>
                                <option>
                                    15ր
                                </option>
                                <option>
                                    20ր
                                </option>
                                <option>
                                    25ր
                                </option>
                                <option>
                                    30ր
                                </option>
                            </CustomSelect>
                        </div>
                    </div>
                    <div className="row mx-1 flex-wrap">
                        <div className="col-sm my-2">
                            <CustomSelect className="custom-select" name="author" id="author">
                                <option>
                                    Տեղադրող
                                </option>
                                <option>
                                    Սոնա Ավագյան
                                </option>
                                <option>
                                    Լիանա Գալոյան
                                </option>
                            </CustomSelect>
                        </div>
                        <div className="col-sm my-2">
                            <CustomSelect className="custom-select" name="ingredients" id="ingredients">
                                <option>
                                    Բաղադրիչներ
                                </option>
                                <option>
                                    մինչև 5
                                </option>
                                <option>
                                    6-10
                                </option>
                                <option>
                                    11-15
                                </option>
                                <option>
                                    16-20
                                </option>
                                <option>
                                    20 և ավելի
                                </option>
                            </CustomSelect>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
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