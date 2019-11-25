import React from 'react'
import './Home.css';
import ApiRequestService from "../services/services"
import Header from '../components/header/Header'
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
//import {getProducts} from '../redux/actions/Products'

class Home extends React.Component{
    state ={
        products: [],
        query:""
    }
    componentDidMount(){
        this.Products()
        
    }

    Products=()=>{
        ApiRequestService.getProducts()
        .then(data =>{this.setState({
            products: data})
            console.log ({data})
        })
        
    }
    handleKeyPress=(event)=>{
        if(event.key==='Enter'){
           
            this.setState({query: event.target.value})
            console.log(event.target.value)
        
    }
    }


    render(){
        let filterProducts= this.state.products.filter(
            (product)=>{
                return product.title.toLowerCase().indexOf(this.state.query.toLowerCase()) !==-1
            }
        );
        return(
            <div>
                <Header/>
                <div className="serchRug">
                    <input type="text" onKeyPress={this.handleKeyPress} placeholder="Search a product"/>                   
                </div>
                <div className="homeTiltle">
                    <h1>Wonderful Rugs</h1>
                </div>
                
                <div className="home">
                
                {filterProducts.map(product =>(
                    <div className='home-page'>

                        <div  key={product.id}>
                            <Link to={'/productDetails/' + product.id}>
                                <img className="imageHome" src={product.imagePath} alt="no foto"/>
                            </Link>
                            <div className="productAttributs">
                                <div>
                                    {product.title}
                                </div>
                                <div>
                                    <span>{product.price}€</span>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
            
            </div>
            
            
        )
    }
}
const mapStateToProps = ({ products }) => ({ products });

export default connect(mapStateToProps)(Home);