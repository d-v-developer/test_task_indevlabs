import { ChangeEvent, FormEvent, useState } from "react"
import { Button } from "../Button/Button"
import styles from './FormNewTask.module.css'

export const FormNewTask = ({ addTask }) => {
    const [todoText, setTodoText] = useState<string>('');

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTodoText(e.target.value);
    }

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        addTask({
            idTask: Date.now().toString(), 
            task: todoText, 
            isDone: false})
        setTodoText('');
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}>
            <textarea rows={4} name='task' value={todoText} onChange={onChange} placeholder="input new task..."/>
            <Button>add task</Button>
        </form>    
    )
}