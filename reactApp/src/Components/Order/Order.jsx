import { Container } from "../Container/Container";
import styles from "./Order.module.css";
function Order() {
  return (
    <section className={styles.cart_section}>
      <Container>
        <section className={styles.catalog_start}>
          <div className={styles.cart_container}>
            <button className={styles.cart_container_title}>
              <h2 className={styles.cart_container_title_button}>Корзина</h2>
              <span className={styles.totalItems}>0</span>
            </button>
            <div className={styles.cart__open}>
              <div className={styles.cartGeneral__content}>
                <div className={styles.cart_container_content}>
                  <div className={styles.cart_container_content_card}>
                    <img src="../../images/Rectangle 2.png" alt="burger" />
                    <div className={styles.card_text}>
                      <h2>Супер сырный</h2>
                      <span>512г</span>
                      <p>
                        589<span>₽</span>
                      </p>
                    </div>
                    <div className={styles.card_number}>
                      <button className={styles.minus_number}>-</button>
                      <p>1</p>
                      <button className={styles.plus_number}>+</button>
                    </div>
                  </div>
                  <div className={styles.cart_container_content_card}>
                    <img src="../../images/Rectangle 2.png" alt="burger" />
                    <div className={styles.card_text}>
                      <h2>Супер сырный</h2>
                      <span>512г</span>
                      <p>
                        589<span>₽</span>
                      </p>
                    </div>
                    <div className={styles.card_number}>
                      <button className={styles.minus_number}>-</button>
                      <p>1</p>
                      <button className={styles.plus_number}>+</button>
                    </div>
                  </div>
                  <div className={styles.cart_container_content_card}>
                    <img src="../../images/Rectangle 2.png" alt="burger" />
                    <div className={styles.card_text}>
                      <h2>Супер сырный</h2>
                      <span>512г</span>
                      <p>
                        589<span>₽</span>
                      </p>
                    </div>
                    <div className={styles.card_number}>
                      <button className={styles.minus_number}>-</button>
                      <p>1</p>
                      <button className={styles.plus_number}>+</button>
                    </div>
                  </div>
                </div>
                <div className={styles.cart_container__footer__block}>
                  <div className={styles.cart_container_footer}>
                    <p>Итого</p>
                    <p>
                      1029 <span>₽</span>
                    </p>
                  </div>
                  <button className={styles.cart_container_footer_button}>
                    Оформить
                  </button>
                  <div className={styles.cart_container_footer_info}>
                    <p>Бесплатная доставка</p>
                    <button>Свернуть</button>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className={styles.cart_container_footer_info}>
            <p>Бесплатная доставка</p>
            <button>Свернуть</button>
          </div> */}
          </div>

          {/* <div className={styles.cards_items_card}>
          <div className={styles.cards_items_title}>
            <h2>Бургеры</h2>
          </div>
          <div className={styles.cards_items__products}>
            <div className={styles.item__product}>
              <img src="../../images/photo.png" alt="burger" />
              <p className={styles.item__product1}>
                689<span> ₽</span>
              </p>
              <p className={styles.product_name}>М'ясная бомба</p>
              <p className={styles.product_detail}>512г</p>
              <button>Добавить</button>
            </div>
            <div className={styles.item__product}>
              <img src="../../images/photo.png" alt="burger" />
              <p className={styles.item__product1}>
                689<span> ₽</span>
              </p>
              <p className={styles.product_name}>М'ясная бомба</p>
              <p className={styles.product_detail}>512г</p>
              <button>Добавить</button>
            </div>
            <div className={styles.item__product}>
              <img src="../../images/photo.png" alt="burger" />
              <p className={styles.item__product1}>
                689<span> ₽</span>
              </p>
              <p className={styles.product_name}>М'ясная бомба</p>
              <p className={styles.product_detail}>512г</p>
              <button>Добавить</button>
            </div>
            <div className={styles.item__product}>
              <img src="../../images/photo.png" alt="burger" />
              <p className={styles.item__product1}>
                689<span> ₽</span>
              </p>
              <p className={styles.product_name}>М'ясная бомба</p>
              <p className={styles.product_detail}>512г</p>
              <button>Добавить</button>
            </div>
            <div className={styles.item__product}>
              <img src="../../images/photo.png" alt="burger" />
              <p className={styles.item__product1}>
                689<span> ₽</span>
              </p>
              <p className={styles.product_name}>М'ясная бомба</p>
              <p className={styles.product_detail}>512г</p>
              <button>Добавить</button>
            </div>
            <div className={styles.item__product}>
              <img src="../../images/photo.png" alt="burger" />
              <p className={styles.item__product1}>
                689<span> ₽</span>
              </p>
              <p className={styles.product_name}>М'ясная бомба</p>
              <p className={styles.product_detail}>512г</p>
              <button>Добавить</button>
            </div>
          </div>
        </div> */}
        </section>
      </Container>
    </section>
  );
}
export { Order };
