import React from 'react';
import './App.scss';

// 使用props接收属性
const ProductCard = (props) => {
  const { imageURL, productName, productPrice, productOrigin } = props;
  return (
    <div>
      <img src={imageURL} alt="alternate" />
      <p>{productName}</p>
      <p>{productPrice}</p>
      <p>{productOrigin}</p>
    </div>
  );
}

// 使用props接收属性
const DisplayBox = (props) => {
  const { productCards } = props;
  return (
    <div>
      {
        productCards.map((item, index) => (
          <ProductCard 
            key={index}
            imageURL={item.imageURL}
            productName={item.productName}
            productPrice={item.productPrice}
            productOrigin={item.productOrigin}
          />
        ))
      }
    </div>
  );
}

function App() {
  const fakeProducts = [
    {imageURL: "abc.com", productName: "switch", productPrice: "299", productOrigin: "Amazon"},
    {imageURL: "cde.com", productName: "watch", productPrice: "29", productOrigin: "Ebay"},
    {imageURL: "def.com", productName: "catTree", productPrice: "89", productOrigin: "Shop"}
  ]

  return (
    <div className="App">
      <header className="App-header">
      Competitor Price Analysis
      </header>
      <input type="text" className="input-box" />
      <div className='buttons'>
        <button className="display-button">DISPLAY COMPARISON RESULTS</button>
        <button className="trigger-button">TRIGGER COLLECTOR</button>
      </div>
      <div className='show-result'>
        <DisplayBox productCards={fakeProducts} />
      </div>
    </div>
  );
}

export default App;
