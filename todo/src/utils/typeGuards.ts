import { TodoItem } from "../models/todoItem";
import type { TodoContent } from "../models/todoItem";


export function isSimpleTodo(content: TodoContent): content is string {
    return typeof content === "string";
}

export function isScheduledTodo(content: TodoContent): content is { message: string; dueDate: Date } {
    return typeof content === "object" && content !== null && "message" in content && "dueDate" in content;
}