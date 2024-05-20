import styles from "./Catalog.module.css";
import { CatalogProduct } from "../CatalogProduct/CatalogProduct";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { productRequestAsync } from "../../redux/ProductSlice";
import { modalProductFetch, toggleModal } from "../../redux/ModalProductSlice";
function Catalog() {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.products);
  const { category, activeCategory } = useSelector((state) => state.category);
  useEffect(() => {
    if (category[activeCategory]) {
      dispatch(productRequestAsync(category[activeCategory].title));
    }
  }, [category, activeCategory]);
  function handleModal(e) {
    if (e.target.tagName !== "BUTTON") return;
    dispatch(modalProductFetch(e.target.dataset.id));
  }
  return (
    <section className={styles.cards_items}>
      <div className={styles.cards_items_card}>
        <div className={styles.cards_items_title}>
          <h2>{category[activeCategory]?.rus}</h2>
        </div>
        <div className={styles.cards_items__products} onClick={handleModal}>
          {products.length !== 0 ? (
            products.map((item) => {
              return <CatalogProduct key={item.id} {...item} />;
            })
          ) : loading === "success" ? (
            <h3>Товаров в данной категории нет!</h3>
          ) : (
            ""
          )}
        </div>
      </div>
    </section>
  );
}
export { Catalog };
