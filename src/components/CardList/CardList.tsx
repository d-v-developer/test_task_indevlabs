import { Card } from "../Card/Card"
import { CardListProps } from "./CardList.props"
import styles from './CardList.module.css';

export const CardList = ({cards, deleteTask, changeStatus}: CardListProps): JSX.Element => {
    return(
        <div className={styles.cards}>
            {cards.map((c) => <Card key={c.idTask} idTask={c.idTask} task={c.task} isDone={c.isDone} deleteTask={deleteTask} changeStatus={changeStatus}/>)}
        </div>
    )
}