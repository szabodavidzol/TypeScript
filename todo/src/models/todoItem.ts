export type TodoContent = string | { message: string; dueDate: Date };

export class TodoItem<T extends TodoContent> {
    constructor(
        public id: number,
        public content: T
    ) {}
}