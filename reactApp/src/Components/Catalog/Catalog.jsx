function Catalog() {
  return (
    <section className="cards_items">
      <div className="container">
        <div className="cards_items_card">
          <div className="cards_items_title">
            <h2>Бургеры</h2>
          </div>
          <div className="cards_items__products">
            <div className="item__product">
              <img src="img/0245702138.jpg" alt="burger" />
              <p className="item__product1">
                689<span> ₽</span>
              </p>
              <p className="product_name">М'ясная бомба</p>
              <p className="product_detail">512г</p>
              <button>Добавить</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { Catalog };
