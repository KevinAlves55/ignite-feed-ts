import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar/Avatar";
import Styles from "./Sidebar.module.css";

export const Sidebar = () => {
  return(
    <aside className={Styles.sidebar}>
      <img 
        src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
        className={Styles.cover}
      />

      <div className={Styles.profile}>
        <Avatar hasBorder={true} src="https://avatars.githubusercontent.com/u/89947057?v=4"/>

        <strong>Kevin Alves Da Silva</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar Perfil
        </a>
      </footer>
    </aside>
  );
};