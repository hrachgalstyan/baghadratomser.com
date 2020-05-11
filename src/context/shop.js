import React, { Component } from 'react'
import {db} from './firebase'
// Product Context

const ProductContext = React.createContext();

class ProductProvider extends Component{
    state={
        products: [],
        type: "Տեսակ",
        loading: true,
        sorted: [],
        price: "Գին",
        search: ""
    }
    
    
    componentDidMount(){
        db.collection('Խանութ')
        .get()
        .then( snapshot => {
            const product = [];
            snapshot.forEach( doc => {
                const data = doc.data();
                product.push(data);
            })
            this.setState({
                products: product,
                sorted: product
            });
            setTimeout(()=>{
                this.setState({
                    loading: false
                })
            }, 1000);
        })
        .catch( error => console.log(error));
    }

    
    // handle filtering
    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:value
        },
        this.sortData);
    }

    // sort data
    sortData = () => {
        const { products, sorted, price, type, search } = this.state;

        let  tempProducts = [...products];

        // filtering based on type
        if(type !== "Տեսակ") {
            tempProducts = tempProducts.filter(item => item.type === type);
        }
        if(price !== "Գին") {
            tempProducts = tempProducts.filter(item => item.price <= parseInt(price));
        }

        if(search.length > 0){
            tempProducts = tempProducts.filter(item => {
                let tempSearch = search.toLowerCase();
                let tempTitle = item.title.toLowerCase().slice(0, search.length);
                if(tempSearch === tempTitle){
                    return item;
                }
            })
        }

        this.setState({ 
            sorted: tempProducts
        });
    }

    render(){
        return(
            <ProductContext.Provider
            value={{
                ...this.state,
                handleChange: this.handleChange
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer};