import { TodoItem } from "../models/todoItem";
import type { TodoContent } from "../models/todoItem";

export function isTodoItem<T>(item: any): item is TodoItem<T> {
    return item instanceof TodoItem;
}

export function isSimpleTodo(item: string): item is string {
    return typeof item === "string";
}

export function isScheduledTodo(content: TodoContent): content is { message: string; dueDate: Date } {
    return typeof content === "object" && content !== null && "message" in content && "dueDate" in content;
}