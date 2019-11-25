import React from 'react'
import Login from '../components/Login'
import BackModal from '../components/backModal/BackModal'
import { connect } from 'react-redux';
import {getProductById} from '../redux/actions/Products'
import HeaderDos from "../components/header/HeaderDos"
import "./ProductDetails.css"


class ProductDetails extends React.Component{
    state={
        product: null,
        openLogin: false
    }
    constructor(props) {
    super(props);
    
    this.componentDidMount = this.getProduct;
  }
    
    async getProduct(){
        const productId = this.props.match.params.id;
        console.log(productId)
        const data = await getProductById(productId);
        
        this.setState({
            product: data.payload,
            productId
            })
            console.log(data.payload)        
    }
    
    
    purchasing =()=>{
        this.setState({openLogin: true})
    }

    render(){
        const {product} = this.state;
        console.log(product)
        
        return(
            <div>
                <HeaderDos/>
                {this.state.openLogin && <BackModal/>}
                {this.state.openLogin && <Login/>}
                <div className="productDetails">
                    {product &&( 
                    <div className="productData"  product={product}>
                        
                        {product.imagePath &&
                            <img src={product.imagePath} alt="rug-fot"/>
                        }
                
                        <br />
                        <div className="producttitleprice">
                            <div className="title"> 
                                {product.title}
                            </div>
                            <div className="price">
                                 {product.price}€
                            </div>
                        </div>
                    </div>
                    )}
                    <div className="selectSize">
                    <div>
                        <span>Select rug's size</span>
                    </div>
                        <div>
                            <label className="sizeRug">Large</label>
                            <input type="checkbox" required name="size" checked={this.state.size}/>
                        </div>
                        <div>
                            <label className="sizeRug">Small</label>
                            <input type="checkbox" required name="size" checked={this.state.size}/>
                        </div>
                    </div>
                    <div className="purchase">
                        <button onClick={this.purchasing}> Purchase</button> 
                    </div>
                         
                </div>
            </div>
        
        )
    }
}

const mapStateToProps = ({ product }) => ({ product });

export default connect(mapStateToProps)(ProductDetails);