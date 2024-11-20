import { CardProps } from "../Card/Card.props";

export interface CardListProps {
    cards: CardProps[],
    deleteTask: (id: string) => void,
    changeStatus: (id: string) => void
}