
import styles from "./Order.module.css";
import { Count } from "./Count";

function OrderGoods(){
  return <div className={styles.cart_container_content_card}>
  <img src="../../images/Rectangle 2.png" alt="burger" />
  <div className={styles.card_text}>
    <h2>Супер сырный</h2>
    <span>512г</span>
    <p>
      589<span>₽</span>
    </p>
  </div>
  <Count/>
</div>
}
export {OrderGoods}
