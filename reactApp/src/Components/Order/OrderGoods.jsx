import styles from "./Order.module.css";
import { Count } from "./Count";
import { API_URI } from "../../Utils/const";

function OrderGoods({ count, price, image, title, weight, id }) {
  return (
    <div className={styles.cart_container_content_card}>
      <img src={`${API_URI}/${image}`} alt={title} />
      <div className={styles.card_text}>
        <h2>{title}</h2>
        <span>{weight}г</span>
        <p>
          {price}
          <span>₽</span>
        </p>
      </div>
      <Count count={count} id={id} />
    </div>
  );
}
export { OrderGoods };
