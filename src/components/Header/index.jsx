import Logo from "../../assets/LogoBoraPizza.svg";
import styles from "./style.module.css";

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Bora Pizza" />
            </div>
         </div>
      </header>
   );
};
