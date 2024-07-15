import { PencilLine } from 'phosphor-react'

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div className={styles.profile}>
                
            <Avatar src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=300&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/> 

               <strong>Gabriel Lima</strong>
               <span>Web Developer</span> 
            </div>

            <footer>
                <a href="#">
                    <PencilLine
                     size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )    
}