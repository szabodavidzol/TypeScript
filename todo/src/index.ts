import { TodoList } from "./services/todoList";
import { TodoItem } from "./models/todoItem";
import type { TodoContent } from "./models/todoItem";

//létrehozunk egy TodoList példányt
const mytodoList = new TodoList<TodoContent>();

//példányosítunk néhány TodoItem-t
const simpleTodo = new TodoItem<TodoContent>(1, "Egyszerű Todo elem");
const scheduledTodo = new TodoItem<TodoContent>(2, { message: "Házifeladat", dueDate: new Date() });

//hozzáadjuk a TodoItem-eket a listához
mytodoList.addItem(simpleTodo);
mytodoList.addItem(scheduledTodo);

//kiírjuk a TodoItem-eket
mytodoList.printItems();

//eltávolítunk egy TodoItem-et a listából
mytodoList.removeItem(1);
mytodoList.printItems();