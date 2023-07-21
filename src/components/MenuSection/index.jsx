import { PizzaCard } from "./PizzaCard";
import { pizzas } from "../../data/pizzas";
import styles from "./style.module.css";

// PascalCase
export const MenuSection = () => {
   return (
      <section className={styles.pizzaSection}>
         <div className="container">
            <h2 className="title one orange">Confira o cardápio</h2>
            {/* //Ela precisa ser um identificador único (NUNCA SE REPETE DE ITEM A ITEM) */}
            <ul className={styles.pizzaList}>
               {pizzas.map((pizza) => (
                  <PizzaCard key={pizza.id} title={pizza.title} img={pizza.img} />
               ))}
            </ul>
         </div>
      </section>
   );
};
