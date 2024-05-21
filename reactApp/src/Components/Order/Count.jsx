import styles from "./Order.module.css";
import { useDispatch } from "react-redux";
import { decreaseCount, increaseCount } from "../../redux/OrderSlice";

function Count({ count, id }) {
  const dispatch = useDispatch();
  function handleIncreaseCount() {
    dispatch(increaseCount({ id: id }));
  }
  function handleDecreaseCount() {
    dispatch(decreaseCount({ id: id }));
  }
  return (
    <div className={styles.card_number}>
      <button className={styles.minus_number} onClick={handleDecreaseCount}>
        -
      </button>
      <p>{count}</p>
      <button className={styles.plus_number} onClick={handleIncreaseCount}>
        +
      </button>
    </div>
  );
}
export { Count };
