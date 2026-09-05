import { logAddition } from "../decorators/logAddition";
import { TodoItem } from "../models/todoItem";
import type { TodoContent } from "../models/todoItem";
import { isSimpleTodo, isScheduledTodo } from "../utils/typeGuards";

export class TodoList<T extends TodoContent> {
    private items: Map<number, TodoItem<T>> = new Map();
    
    @logAddition
    public addItem(item: TodoItem<T>): void {
        this.items.set(item.id, item);
        console.log(`Item hozzáadva: ${item.id}.`);
    }
    public removeItem(id: number): boolean {
        return this.items.delete(id);
    }
    public listItems(): TodoItem<T>[] {
        return Array.from(this.items.values());
    }

    printItems(): void {
        this.items.forEach((item) => {
            if (isSimpleTodo(item.content)) {
                console.log(`Egyszerű Todo: ${item.content}`);
            } else if (isScheduledTodo(item.content)) {
                console.log(`Határidős Todo: ${item.content.message}, Határidő: ${item.content.dueDate.toLocaleDateString()}`);
            } else {
                console.log(`Ismeretlen Todo típus: ${item.content}`);
            }
        });
    }
}