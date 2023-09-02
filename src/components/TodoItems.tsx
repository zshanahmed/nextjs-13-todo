"use client";
import Link from "next/link";

type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  toggleTodo: (id: string, complete: boolean) => void;
  deleteTodo: (id: string) => void;
};

export function TodoItem({
  id,
  title,
  complete,
  toggleTodo,
  deleteTodo,
}: TodoItemProps) {
  return (
    <li className="flex gap-1 my-1 items-center justify-between">
      <div className="flex items-center gap-1">
        <input
          id={id}
          type="checkbox"
          defaultChecked={complete}
          className="cursor-pointer peer"
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <label
          htmlFor={id}
          className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500"
        >
          {title}
        </label>
      </div>
      <div className="flex gap-3">
        <button
          className="bg-red-500 hover:bg-red-700 focus-within:bg-red-700 text-white px-2 py-1 rounded outline-none"
          onClick={() => deleteTodo(id)}
        >
          Delete
        </button>
        <Link
          className="bg-slate-500 hover:bg-slate-700 focus-within:bg-slate-700 text-white px-2 py-1 rounded outline-none"
          href={`/update/${id}`}
        >
          Update
        </Link>
      </div>
    </li>
  );
}
