import React from "react";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          price: 99900,
          title: "Phone",
          qty: 1,
          img: require('./images/phone.jpg'),
        },
        {
          id: 2,
          price: 20000,
          title: "Watch",
          qty: 1,
          img: require('./images/watch.jpg'),
        },
        {
          id: 3,
          price: 150000,
          title: "Laptop",
          qty: 1,
          img: require('./images/laptop.jpg'),
        },
      ],
    };
  }

  increaseQty = (product) => {
    const { products } = this.state;
    products[products.indexOf(product)].qty += 1;
    //arrow function automatically binds the value of 'this' to the function
    //setState form 1, second argument can be callback function, asynchronous
    this.setState({
      products: products,
    });
  };
  //setState form 2, second argument can be callback function, asynchronous
  //         this.setState((prevState) =>{
  //             return {
  //                 qty: prevState.qty+1
  //             }
  //         })
  decreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);
    if (products[index].qty > 0) {
      products[index].qty -= 1;
      this.setState({
        products: products,
      });
    }
  };
  deleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((items) => items.id !== id);
    this.setState({
      products: items,
    });
  };
  cartCount =() =>{
    const {products} = this.state;
    let count =0;
    products.forEach((product) =>{
      count+= product.qty;
    })
    return count;
  }
  totalCost=()=>{
    const {products} = this.state;
    let cost =0;
    products.forEach((product) =>{
      cost+= product.price * product.qty;
    })
    return cost;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Header 
          cartCount={this.cartCount}
        />
        <Cart
          products={products}
          increaseQty={this.increaseQty}
          decreaseQty={this.decreaseQty}
          deleteProduct={this.deleteProduct}
          totalCost={this.totalCost}
        />
      </div>
    );
  }
}

export default App;
