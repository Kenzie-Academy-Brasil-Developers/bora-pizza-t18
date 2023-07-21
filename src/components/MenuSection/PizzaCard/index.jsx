import styles from "./style.module.css"

export const PizzaCard = ({ img, title }) => {
   return (
      <li className={styles.pizzaCard}>
         <img src={img} alt={title} />
         <div>
            <h3 className="title two">{title}</h3>
         </div>
      </li>
   );
};
