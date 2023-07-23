import React from "react";
import "./App.css";
import Cart from "./Cart";
import Header from "./Header";
// import { collection, onSnapshot, addDoc, getDoc, setDoc } from "firebase/firestore";
import * as firebase from 'firebase/firestore';
import db from "./firebase_config";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      loading: true
    };
  }

  componentDidMount() {
    // onSnapshot adds a listener which updates our app anytime the data has been updated
    firebase.onSnapshot(firebase.collection(db, 'products'), (querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      this.setState({
        products: newData,
        loading: false
      });
    });

  }

  
  increaseQty = (product) => {
    const ref = firebase.doc(firebase.collection(db, 'products'), product.id);
    firebase.updateDoc(ref, {
      qty: product.qty +1
    })
  };


  /*
  arrow function automatically binds the value of 'this' to the function
  setState form 1, second argument can be callback function, asynchronous
   this.setState({
     products: products,
   });
  setState form 2, second argument can be callback function, asynchronous
           this.setState((prevState) =>{
               return {
                   qty: prevState.qty+1
               }
           })
  */

  decreaseQty = (product) => {
    if (product.qty > 0) {
      const ref = firebase.doc(firebase.collection(db, 'products'), product.id);
      firebase.updateDoc(ref, {
      qty: product.qty-1
      })
    }
  };
  deleteProduct = (product) => {
    const ref = firebase.doc(firebase.collection(db, 'products'), product.id);
    firebase.deleteDoc(ref);
    
  };
  cartCount = () => {
    const { products } = this.state;
    let count = 0;
    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  totalCost = () => {
    const { products } = this.state;
    let cost = 0;
    products.forEach((product) => {
      cost += product.price * product.qty;
    });
    return cost;
  };

  addProduct = () =>{
    firebase.addDoc(firebase.collection(db, 'products'), {
      img: 'https://www.energysistem.com/cdnassets/products/45305/principal_2000.jpg',
      title: 'Headphones',
      qty: 1,
      price: 5000
    })
  }




  render() {
    const { products, loading} = this.state;
    return (
      <div className="App">
        <Header cartCount={this.cartCount} />
        <div className="left-margin">
        <h1>My Cart</h1>
        {loading && <div className="load">Loading ...</div>}
        <button onClick={this.addProduct}>Add a Product</button>
        </div>
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
