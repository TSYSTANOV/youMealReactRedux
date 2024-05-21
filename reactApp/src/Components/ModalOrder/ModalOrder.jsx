import { submitForm, updateFormValue } from "../../redux/FormSlice";
import { closeModal } from "../../redux/ModalOrderSlice";
import styles from "./Modal.module.css";
import { useDispatch, useSelector } from "react-redux";
function ModalOrder() {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.modalOrder);
  const { orderList } = useSelector((state) => state.order);
  const form = useSelector((state) => state.form);
  function updateValues(e) {
    dispatch(updateFormValue({ field: e.target.name, value: e.target.value }));
  }
  function handleSubmitForm() {
    dispatch(submitForm({ ...form, order: orderList }));
  }
  return (
    <div
      className={`${
        !isOpen
          ? `${styles.modal} ${styles.modal_non_display}`
          : `${styles.modal}`
      }`}
    >
      <div className={`${styles.modal__card} ${styles.modal__card_color}`}>
        <div className={styles["modal__card-form-size"]}>
          <div className={styles["modal__card-title__item"]}>
            <h2>Доставка</h2>
          </div>

          <div className={styles["modal__card-form"]}>
            <div className={styles["modal__card-form-name-phone"]}>
              <form>
                <input
                  type="text"
                  placeholder="Ваше имя"
                  name="name"
                  value={form.name}
                  onChange={updateValues}
                />
                <input
                  type="text"
                  placeholder="Телефон"
                  name="phone"
                  value={form.phone}
                  onChange={updateValues}
                />
              </form>
            </div>
            <div className={styles["modal__card-delivery"]}>
              <form>
                <label htmlFor="#first">
                  <input
                    className={styles.radio_input}
                    type="radio"
                    id="first"
                    name="delivery"
                    value="bySelf"
                    checked={form.delivery === "bySelf"}
                    onChange={updateValues}
                  />
                  Самовывоз
                </label>
                <label htmlFor="#second">
                  <input
                    className={styles.radio_input}
                    type="radio"
                    id="second"
                    name="delivery"
                    value="toClient"
                    checked={form.delivery === "toClient"}
                    onChange={updateValues}
                  />
                  Доставка
                </label>
              </form>
            </div>
            {form.delivery === "toClient" && (
              <div className={styles["modal__card-address"]}>
                <form>
                  <input
                    type="text"
                    placeholder="Улица, дом, квартира"
                    name="addressStreet"
                    value={form.addressStreet}
                    onChange={updateValues}
                  />
                  <input
                    type="text"
                    placeholder="Этаж"
                    name="addressFloor"
                    value={form.addressFloor}
                    onChange={updateValues}
                  />
                  <input
                    type="text"
                    placeholder="Домофон"
                    name="addressDomofon"
                    value={form.addressDomofon}
                    onChange={updateValues}
                  />
                </form>
              </div>
            )}
          </div>
          <button
            disabled={!form.name || !form.phone}
            className={styles["modal__card-form-button"]}
            onClick={handleSubmitForm}
          >
            {!form.name || !form.phone
              ? "Имя и телефон обязательно нужно заполнить"
              : "Оформить"}
          </button>
        </div>
        <button
          className={styles["modal-close"]}
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentcolor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="5.07422"
              y="5.28249"
              width="1"
              height="20"
              transform="rotate(-45 5.07422 5.28249)"
            />
            <rect
              x="5.78125"
              y="19.4246"
              width="1"
              height="20"
              transform="rotate(-135 5.78125 19.4246)"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
export { ModalOrder };
