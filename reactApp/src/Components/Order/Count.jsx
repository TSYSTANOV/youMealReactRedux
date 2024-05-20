
import { useState } from "react";
import styles from "./Order.module.css";

function Count(){
  const [count, setCount] = useState(1)
  function handleIncreaseCount(){
    setCount(count+1)
  }
  function handleDecreaseCount(){
    setCount(count-1)
  }
  return   <div className={styles.card_number}>
              <button className={styles.minus_number} onClick={handleDecreaseCount}>-</button>
              <p>{count}</p>
              <button className={styles.plus_number} onClick={handleIncreaseCount}>+</button>
            </div>
}
export {Count}
