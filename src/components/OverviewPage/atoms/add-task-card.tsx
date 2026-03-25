"use client";

export const AddTaskCard = () => {
  return (
    <div className="mt-4 mb-4 bg-white w-fit p-5 rounded-lg border-2 border-blue-250">
      Adicionar tarefa:
      <div className="flex h-full flex-col">
        <div />
        <button className="mt-auto self-start mb-4 bg-cyan-600 rounded-lg text-white p-2">
          Adicionar
        </button>
      </div>
    </div>
  );
};
