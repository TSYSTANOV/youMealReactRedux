import "./App.css";
import React from "react";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { Order } from "./Components/Order/Order";
import { Catalog } from "./Components/Catalog/Catalog";
import { Footer } from "./Components/Footer/Footer";
import { Container } from "./Components/Container/Container";

function App() {
  return (
    <>
      <Header />
      <main>
        <Navigation />
        <section className="catalog">
          <Container>
          <section className="catalog_start">
          <Order />
          <Catalog />
          </section>
          </Container>
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
