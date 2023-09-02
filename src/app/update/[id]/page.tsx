import prisma from "@/db";
import { redirect } from "next/navigation";

async function getTitle(id: string) {
  const todo = await prisma.todo.findFirst({ where: { id } });
  return todo?.title;
}

async function updateTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  const id = data.get("id")?.valueOf();
  await prisma.todo.update({ where: { id }, data: { title } });
  redirect("/");
}

export default async function Page({ params }: { params: { id: string } }) {
  const title = await getTitle(params.id);
  return (
    <>
      <h1 className="text-2xl">Update</h1>
      <form className="flex justify-between my-2" action={updateTodo}>
        <input
          type="text"
          name="title"
          className="border text-slate-300 border-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 px-2 py-1 bg-transparent outline-none rounded cursor-pointer w-full"
          defaultValue={title}
        />
        <input type="text" name="id" className="invisible" value={params.id} />
        <button
          className="border text-slate-300 border-slate-300 hover:bg-slate-700 focus-within:bg-slate-700 px-2 py-1 bg-transparent outline-none rounded cursor-pointer"
          type="submit"
        >
          Update
        </button>
      </form>
    </>
  );
}
