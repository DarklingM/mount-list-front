"use client";
import { useState } from "react";
import MountItem from "@/components/MountItem";
import { mounts as initialMounts } from "@/app/data/mounts";
import type{ Mount } from "@/types/Mount"

export default function Home(){
  const [mounts, setMounts] = useState<Mount[]>(initialMounts);
  const [newMount, setNewMount] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingMount, setEditingMount] = useState<Mount | null>(null);

  {/* ADICIONAR MONTARIAS */}
  function handleAddMount() {
        if (
          newMount.trim() === "" ||
          mounts.some((m) => m.name === newMount)
        )
        return;

        const slug = newMount.toLowerCase().replace(/\s+/g, "-");

        setMounts([
          ...mounts,
          {
            name: newMount,
            slug: slug,
            description: "",
            obtain: "",
          },
        ]);
        setNewMount("");
      }

  {/* DELETAR MONTARIAS */}
  function handleRemoveMount(indexToRemove: number) {
    const updatedMounts = mounts.filter((_, index) => index !== indexToRemove);
    setMounts(updatedMounts);
  }

  {/* EDITAR MONTARIAS */}
  function handleEditMount(index: number) {
    setEditingIndex(index);
    setEditingMount({...mounts[index]});
  }

  {/* SALVAR EDIÇÃO */}
  function handleSaveEdit() {
    if (!editingMount)return;

    const updatedMounts = [...mounts];
    updatedMounts[editingIndex!] = editingMount;
    
    setMounts(updatedMounts);
    setEditingIndex(null);
    setEditingMount(null);
  }

  return (
    <div className="
    min-h-screen
    bg-gradient-to-b from-zinc-900 to-black
    text-white
    px-6 py-10
    ">
      <div className="mx-w-2xl mx-auto">
      <h1 className="
      text-4xl font-bold mb-6
      text-yellow-400
      tracking-wide
      ">
        Mount List
      </h1>


    <div className="flex gap-2 mb-6">
      <input
        value = {newMount}
        onChange = {(e) => setNewMount(e.target.value)}
        placeholder = "Mount name"
        className="
          flex-1
          p-3
          rounded-lg
          bg-zinc-800
          border border-zinc-600
          text-white
          placeholder:text-zinc-400
          focus:outline-none
          focus:border-yellow-400
        "/>

      <button onClick = {handleAddMount}
      className="
        shine-effect
        px-4 py-3
        bg-yellow-500
        text-black
        font-semibold
        rounded-lg
        hover:bg-yellow-400
        transition
        shadow
      ">
        Adicionar Montaria
      </button>
      </div>
    </div>

    <ul style={{ listStyle: "none", padding: 0}}>
        {mounts.map((mount, index) => (
          <MountItem
          key={index}
          mount={mount}
          index={index}
          editingIndex={editingIndex}
          editingMount={editingMount}
          setEditingMount={setEditingMount}
          handleEditMount={handleEditMount}
          handleRemoveMount={handleRemoveMount}
          handleSaveEdit={handleSaveEdit}
          />
        ))}
      </ul>
    </div>
    
  );
}