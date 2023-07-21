import Logo from "../../assets/LogoBoraPizza.svg";
import styles from "./style.module.css";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Bora Pizza" />
               <p className="paragraph white">
                  Todos os direitos reservados - Kenzie Academy Brasil
               </p>
            </div>
         </div>
      </footer>
   );
};
