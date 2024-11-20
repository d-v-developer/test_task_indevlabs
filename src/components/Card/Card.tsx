import { CardProps } from "./Card.props"
import styles from './Card.module.css';
import cn from "classnames";
import { Button } from "../Button/Button";
import { CheckBox } from "../CheckBox/CheckBox";

export const Card = ({idTask, task, isDone, deleteTask, changeStatus, ...props}: CardProps): JSX.Element => {

    const onClick = () => {
        deleteTask(idTask);    
    }

    const onChange = () => {
        changeStatus(idTask);    
    }

    return(
        <div className={cn(styles.card,
            {
                [styles.isDone]: isDone
            }
        )} {...props}>
            <CheckBox isDone={isDone} onChange={onChange}/>
            <div className={styles.text}>{task}</div>
            <Button className={styles.btn} onClick={onClick}>Delete</Button>     
        </div>
    )
}