import React, { Component } from 'react'
import Loading from '../components/Loading'
import {MdLocalPostOffice} from 'react-icons/md'
import styled from 'styled-components'
import {db} from '../context/firebase'

export default class Contact extends Component {
    state={
        loading: true
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 1000);
    }

    addApplication = event => {
        event.preventDefault();
        var firstName = document.getElementById('firstName').value;
        var lastName = document.getElementById('lastName').value;
        var phone = document.getElementById('phone').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('message').value;

        db.collection("Կապ").add({
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email,
            subject: subject,
            message: message
        })
        .then(function(docRef) {
            var success = document.getElementById("success").style;
            success.display="block";
            setTimeout(function(){success.display = "none"}, 2500);
        })
        .catch(function(error) {
            var danger = document.getElementById("danger").style;
            danger.display="block";
            setTimeout(function(){danger.display = "none"}, 2500);
            console.log(error);
        });
        document.getElementById('form').reset();
        window.scrollTo(0, 0);
    }
    render() {
        if(this.state.loading){
            return (
                <>
                <h3 className="post-category font-weight-light p-3 text-center">Կապ մեզ հետ</h3>
                <Loading />
                </>
            )
        }
        else{
            return (
                <>
                    <h3 className="post-category font-weight-light p-3 text-center">Կապ մեզ հետ</h3>
                    <div className="body">
                        <div className="container">
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <div className="alert alert-success text-center" id="success" role="alert" style={{display: "none"}}>
                                            Շնորհակալություն, մեր մասնագետը շատ արագ կապ կհաստատի Ձեզ հետ։
                                        </div>
                                        <div className="alert alert-danger text-center" id="danger" role="alert" style={{display: "none"}}>
                                            Խնդրում ենք փորձել նորից
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <form onSubmit={this.addApplication} id="form">
                        <FormInput className="grid-posts">
                            <div className="container">
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="text" id="firstName" className="form-control" placeholder="Անուն" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="text" id="lastName" className="form-control" placeholder="Ազգանուն" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="tel" id="phone" className="form-control" placeholder="Հեռախոս" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="email" id="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="text" id="subject" className="form-control"  placeholder="Թեմա" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <textarea className="form-control" id="message" rows="5" placeholder="Հաղորդագրություն..." autoComplete="off" required ></textarea>
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto text-center">
                                        <button type="submit" className="btn btn-outline-dark my-3"><MdLocalPostOffice style={{marginBottom: "3.5px"}} />
                                            Ուղարկել
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </FormInput>
                        </form>
                    </div>
                </>
            )
        }
    }
}

const FormInput = styled.div`
    input, textarea, button{
        &:focus{
            box-shadow: none;
            border: 0.5px solid rgba(0, 0, 0, 0.2);
        }
    }
    button::after{
        box-shadow: none;
    }
`;
