import { useEffect } from "react";
import {
  categoryRequstAsync,
  changeActiveCategory,
} from "../../redux/CategorySlice";
import { Container } from "../Container/Container";
import styles from "./Navigation.module.css";
import { useDispatch, useSelector } from "react-redux";
import { API_URI } from "../../Utils/const";
function Navigation() {
  const dispatch = useDispatch();
  const { category, activeCategory } = useSelector((state) => state.category);
  function handleChangeCategory(e) {
    if (e.target.tagName !== "BUTTON") return;
    dispatch(changeActiveCategory(+e.target.dataset.id));
  }

  useEffect(() => {
    dispatch(categoryRequstAsync());
  }, []);
  return (
    <nav className={styles.navigation}>
      <Container classNameName={"navigation__container"}>
        <ul className={styles.navigation__list} onClick={handleChangeCategory}>
          {category?.map((item, i) => {
            return (
              <li key={item.title} className={styles.navigation__item}>
                <button
                  style={{
                    backgroundImage: `url(${API_URI + "/" + item.image})`,
                  }}
                  className={`${styles.navigation__button} ${
                    i === activeCategory ? styles.navigation__button_active : ""
                  }`}
                  data-id={i}
                >
                  {item.rus}
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
export { Navigation };
