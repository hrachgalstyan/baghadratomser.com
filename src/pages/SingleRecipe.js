import React from 'react'
import { useParams } from 'react-router-dom'
import {RecipesConsumer} from '../context/recipes'
import Loading from '../components/Loading';

export default function SingleRecipe() {
    const {id} = useParams();
    const newId = id.slice(4);
    const [loading, setLoading] = React.useState(false);
    const [recipe, setRecipe] = React.useState({});

    React.useEffect(()=>{
        setLoading(true);
        async function getRecipe(){
            try {
                const response = await fetch(`https://firestore.googleapis.com/v1/projects/baghadratomser/databases/(default)/documents/Ցուցադրված/${newId}`);
                const data = await response.json();
                const {image, title} = data.fields;
                if(data.fields){
                    const {image, title, type} = data.fields;
                    let newRecipe = {image: image.stringValue, title: title.stringValue, type: type.stringValue};
                    setRecipe(newRecipe);
                }
                else{
                    setRecipe({});
                }
                // if(data.drinks){
                //     const {strDrink: name, strDrinkThumb: image,strAlcoholic: info, strCategory: category, strGlass: glass, strInstructions: instructions, strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5} = data.drinks[0];
                //     const ingredients = [strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5];
                //     const newCocktail = {name, image,info,category, glass, instructions, ingredients};
                //     setRecipe(newCocktail);
                // }
                // else{
                //     setRecipe([]);
                // }
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        getRecipe();
    },[]);
    if(loading){
        return <Loading />
    }
    else{
        return (
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="single-post w-75 mx-auto text-center">
                            <h3 className="post-category font-weight-light p-3 text-center">{recipe.title}</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="single-post mx-auto text-center">
                            <img src={recipe.image} className="img-fluid" width="280" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="single-post w-75 mx-auto text-center">
                            <h3 className="post-category font-weight-light p-3 text-center">Պատրաստման եղանակը</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="single-post w-75 mx-auto text-center">
                            <p className="post-category font-weight-light p-3 text-center">30 վայրկյան խառնեք ձմերուկը, ելակը և նարնջի հյութը հարիչով: Հյութի խառնուրդին ավելացրեք Cointreau- ն ,սպիտակ գինին և խառնեք, որպեսզի համատեղվեն: Մատուցելուց սառեցնել առնվազն մեկ ժամ: Մատուցել մանրացված սառույցով:</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
