import "./App.css";
import React from "react";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { Order } from "./Components/Order/Order";
import { Catalog } from "./Components/Catalog/Catalog";

function App() {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <section className="catalog">
          <Order />
          <Catalog />
        </section>
      </main>
    </>
  );
}

export default App;
