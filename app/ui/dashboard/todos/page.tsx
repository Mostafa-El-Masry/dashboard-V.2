import prisma from "@/app/db";
import Link from "next/link";
import React from "react";

export default async function TodosPage() {
  const todos = await prisma.todo.findMany();
  // await prisma.todo.create({ data: { title: "test", complete: false } });
  return (
    <>
      <header className="flex justify-between items-center mb-4 w-3/4">
        <h1 className="text-2xl">Todos</h1>
        <Link href="/ui/dashboard/todos/new/">NEW</Link>
      </header>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
}
