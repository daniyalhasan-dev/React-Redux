import React from "react";
import products from "./product.json";
import Card from "./components/Card";
import Cart from "./components/Cart";

const App = () => {
  return (
    <>
    <Cart />
    <div className="min-h-screen bg-slate-950 py-10 px-4 sm:px-6 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default App;
