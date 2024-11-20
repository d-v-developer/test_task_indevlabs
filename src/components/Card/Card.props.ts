import { HTMLAttributes } from "react";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
    idTask: string,
    task: string,
    deleteTask: (id: string) => void,
    changeStatus: (id: string) => void,
    isDone: boolean
}