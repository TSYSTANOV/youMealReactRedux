import { useEffect, useRef, useState } from "react";
import styles from "./Order.module.css";
import { OrderGoods } from "./OrderGoods";
import { useDispatch, useSelector } from "react-redux";
import { orderProductsFetch, toggleCartOpen } from "../../redux/OrderSlice";
import { openModal } from "../../redux/ModalOrderSlice";

function Order() {
  const openCart = useSelector((state) => state.order.isOpen);
  const cartElem = useRef();
  const dispatch = useDispatch();
  const { totalCount, totalSum, orderList, orderGoods } = useSelector(
    (state) => state.order
  );
  const orderID = orderList.map((item) => item.id);
  useEffect(() => {
    dispatch(orderProductsFetch(orderID));
  }, [orderList.length]);
  function handleOpenCart() {
    dispatch(toggleCartOpen());
  }
  function handleOpenOrderModal() {
    dispatch(openModal());
  }
  return (
    <section className={styles.cart_section}>
      <div className={styles.cart_container}>
        <button
          className={styles.cart_container_title}
          onClick={handleOpenCart}
        >
          <h2 className={styles.cart_container_title_button}>Корзина</h2>
          <span className={styles.totalItems}>{totalCount}</span>
        </button>
        <div
          className={styles.cart__open}
          style={
            openCart
              ? { maxHeight: cartElem.current.scrollHeight + "px" }
              : { maxHeight: "0px" }
          }
        >
          <div className={styles.cartGeneral__content} ref={cartElem}>
            {orderGoods.length > 0 ? (
              <>
                <div className={styles.cart_container_content}>
                  {orderGoods.map((item) => {
                    return <OrderGoods key={item.id} {...item} />;
                  })}
                </div>
                <div className={styles.cart_container__footer__block}>
                  <div className={styles.cart_container_footer}>
                    <p>Итого</p>
                    <p>
                      {totalSum} <span>₽</span>
                    </p>
                  </div>
                  <button
                    className={styles.cart_container_footer_button}
                    onClick={handleOpenOrderModal}
                  >
                    Оформить
                  </button>
                  <div className={styles.cart_container_footer_info}>
                    <p>Бесплатная доставка</p>
                    <button onClick={handleOpenCart}>Свернуть</button>
                  </div>
                </div>
              </>
            ) : (
              <p
                style={{
                  padding: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Корзина пустая, добавьте товары
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Order };
