import { CheckBoxProps } from "./CheckBox.props"
import styles from './CheckBox.module.css'

export const CheckBox = ({isDone, onChange, ...props}: CheckBoxProps) => {
    return(
        <label className={styles.label}>
            {isDone ? 'done' : 'complete task'}
            <input type="checkbox" checked={isDone} onChange={onChange} {...props}/>
        </label>
    )
}