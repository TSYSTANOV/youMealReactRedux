import styles from './Catalog.module.css'
import { CatalogProduct } from '../CatalogProduct/CatalogProduct';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { productRequestAsync } from '../../redux/ProductSlice';
function Catalog() {
  const dispatch = useDispatch()
  const {products} = useSelector((state)=>state.products)
  const {category, activeCategory} = useSelector((state)=>state.category)

  useEffect(()=>{
    if(category[activeCategory]){
      dispatch(productRequestAsync(category[activeCategory].title))
    }
  },[category, activeCategory])

  return (
    <section className={styles.cards_items}>
        <div className={styles.cards_items_card}>
          <div className={styles.cards_items_title}>
            <h2>{category[activeCategory]?.rus}</h2>
          </div>
          <div className={styles.cards_items__products}>
            {products.map((item)=>{
              return  <CatalogProduct key={item.id} {...item}/>
            })}
          </div>
        </div>
    </section>
  );
}
export { Catalog };
