import { API_URI } from '../../Utils/const'
import styles from './Catalog.module.css'

function CatalogProduct({category,id,title, weight, price, image}){

  return <div className={styles.item__product}>
          <img src={API_URI+'/'+ `${image}`} alt={category} />
          <p className={styles.item__product1}>
          {price}<span> ₽</span>
          </p>
          <p className={styles.product_name}>{title}</p>
          <p className={styles.product_detail}>{weight}г</p>
          <button>Добавить</button>
          </div>
}
export {CatalogProduct}
