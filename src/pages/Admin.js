import React, { Component } from 'react'
import Loading from '../components/Loading'
import styled from 'styled-components'
import IngredientsInput from '../components/Admin/IngredientsInput'
import IngredientsList from '../components/Admin/IngredientsList'
import { v4 as uuidv4 } from 'uuid';
import {db} from '../context/firebase'
import firebase from '../context/firebase'

export default class Admin extends Component {
    state={
        loading: true,
        items: [],
        id: uuidv4(),
        item: "",
        url: '',
        editItem: false
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                loading: false
            })
        }, 1000);
    }

    // set local items
    setLocalItems(adds){
        localStorage.setItem('items',JSON.stringify(adds));
    }


    handleChange = e => {
        this.setState({
            item: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const newItem = {
            id: this.state.id,
            title: this.state.item
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            id: uuidv4(),
            editItem: false
        });

        this.setLocalItems(updatedItems);
    };


    clearList = () => {
        this.setState({
            items: []
        });

        localStorage.setItem("items", JSON.stringify({}));
    };


    handleDelete = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });

        this.setLocalItems(filteredItems);
    };


    handleEdit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        const selectedItem = this.state.items.find(item => item.id === id);
        this.setState({
            items: filteredItems,
            item: selectedItem.title,
            id: id,
            editItem: true
        });
    };


    uploadImage = () => {
        var canvas = document.getElementById("canvas");
        var ctx = canvas.getContext('2d');
        const img = document.getElementById('fileImage').files[0];

        const imageName = img.name;

        var storageRef = firebase.storage().ref('Առաջարկված/' + imageName);

        var uploadTask = storageRef.put(img);

        uploadTask.on('state_changed', (snapshot) => {
            var progress = (snapshot.bytesTransferred/snapshot.totalBytes) * 100;
            console.log('upload is ' + progress + 'done');
        }, function (error) {
            console.log(error.message);
        }, function(){
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                localStorage.setItem("imageUrl", JSON.stringify(downloadURL));
                var r = new FileReader();
                r.readAsDataURL(img);
                r.onload = function (e) {
                    var img = new Image();
                    img.src = downloadURL;
                    img.onload = function () {
                        canvas.width = img.width * 0.15;
                        canvas.height = img.height * 0.15;
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        canvas.style.display = "block";
                    }
                }
            })
        })
    }

    

    addRecipe = event => {
        event.preventDefault();
        const ingredients = [];
        const author = document.getElementById('author').value;
        const title = document.getElementById('title').value;
        const type = document.getElementById('type').value;
        const time = document.getElementById('time').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const image = localStorage.getItem('imageUrl')? JSON.parse(localStorage.getItem('imageUrl')): "";
        const items = localStorage.getItem('items')? JSON.parse(localStorage.getItem('items')): {};
        console.log(author, title, type, email, time, message, image);

        if(items.length > 0){
            items.map(item => {
                ingredients.push(item.title);
            })
        }
        else{
            let indredients = [];
        }

        db.collection("Test").add({
            author: author,
            title: title,
            time: time,
            preparation: message,
            ingredients: ingredients,
            type: type,
            email: email,
            image: image
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
        localStorage.setItem("items", JSON.stringify({}));
        document.getElementById('form').reset();
        this.setState({
            items: []
        })
        window.scrollTo(0, 0);
        localStorage.clear();
        document.getElementById('canvas').style.display = "none";
    }
    render() {
        if(this.state.loading){
            return <Loading />
        }
        else{
            const canvasRef = React.createRef("canvas");
            return (
                <>
                    <h3 className="post-category font-weight-light p-3 text-center">Առաջարկել բաղադրատոմս</h3>
                    <div className="body">
                        <div className="container">
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <div className="alert alert-success text-center" id="success" role="alert" style={{display: "none"}}>
                                            Շնորհակալություն, Ձեր առաջարկած բաղադրատոմսը առաջիկայում կտեղադրվի էջում։
                                        </div>
                                        <div className="alert alert-danger text-center" id="danger" role="alert" style={{display: "none"}}>
                                            Խնդրում ենք փորձել նորից
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <form id="form" onSubmit={this.addRecipe}>
                        <FormInput className="grid-posts">
                            <div className="container">
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="text" id="author" className="form-control" placeholder="Տեղադրող" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="text" id="title" className="form-control" placeholder="Անվանում" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="text" id="type" className="form-control" placeholder="Տեսակ" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="number" id="time" className="form-control" placeholder="Պատրաստման ժամանակը" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="email" id="email" className="form-control" aria-describedby="emailHelp" placeholder="Email" autoComplete="off" required />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <label className="mx-auto text-center w-100">Մուտքագրեք բաղադրիչները 1 հատով</label>
                                        <IngredientsInput
                                            item={this.state.item}
                                            handleChange={this.handleChange}
                                            handleSubmit={this.handleSubmit}
                                            editItem={this.state.editItem}
                                            />
                                        <IngredientsList
                                            items={this.state.items}
                                            clearList={this.clearList}
                                            handleDelete={this.handleDelete}
                                            handleEdit={this.handleEdit}
                                            />
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <textarea className="form-control" id="message" rows="5" placeholder="Պատրաստման եղանակը" autoComplete="off" required ></textarea>
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto">
                                        <input type="file" className="row mx-auto p-3" id="fileImage" accept="image/*" onChange={this.uploadImage} required />
                                        <canvas ref={canvasRef} id="canvas" className="row mx-auto" width={225} height={340} style={{border: "1px solid black", display: "none"}}></canvas>
                                    </div>
                                </div>
                                <div className="row d-flex justify-context-center mx-auto">
                                    <div className="col-10 col-sm-10 col-md-8 col-lg-6 my-2 mx-auto text-center">
                                        <button type="submit" className="btn btn-outline-dark my-3">
                                            Առաջարկել
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