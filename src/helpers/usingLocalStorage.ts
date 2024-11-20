import { CardProps } from "../components/Card/Card.props";

export function loadTasks(key: string): CardProps[] | [] {
    try {
        const data = localStorage.getItem(key);
        if (!data) {
            return []
        }   
        return JSON.parse(data);
    } catch (e) {
        console.error(e);
        return []
    }
}

export function saveTasks(key: string, data: CardProps[]) {
    localStorage.setItem(key, JSON.stringify(data))
}