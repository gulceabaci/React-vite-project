import React from 'react';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Main from './components/Main';

export default function App() {
    return (
      <>
        <Header />
          <div className="container mt-3">
            <ProductList />
          </div>
        <Main />
      </>
    );
  }