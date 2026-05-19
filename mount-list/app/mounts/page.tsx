"use client";
import { useState } from "react";
import MountItem from "@/components/MountItem";
export default function Home(){
  const [mounts, setMounts] = useState([
    {
        name: "Wings of Ruin",
        description: "Calling to mind Valigarmanda, the dread creature dubbed the Skyruin, these magicked wings grant their wearer an aura of irrepressible might. Though they are said to manifest only for those who are worthy, the truth of their nature is shrouded in mystery.",
        obtain: "Worqor Lar Dor (Extreme)"
    },
    {
        name: "Chocobo",
        description: "Chicken",
        obtain: "Quest"
    }
  ]);
  const [newMount, setNewMount] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingValue, setEditingValue] = useState("");

  {/* ADICIONAR MONTARIAS */}
  function handleAddMount() {
        if (newMount.trim () === "" || mounts.some(m => m.name === newMount))return;

        setMounts([
            ...mounts,
            {
                name: newMount,
                description: "",
                obtain: ""
            }
        ])
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
    setEditingValue(mounts[index].name);
  }

  {/* SALVAR EDIÇÃO */}
  function handleSaveEdit() {
    if (editingValue.trim() === "")return;

    const updatedMounts = [...mounts];
    updatedMounts[editingIndex!] = {
        ...updatedMounts[editingIndex!],
        name: editingValue
    };
    setMounts(updatedMounts);
    setEditingIndex(null);
    setEditingValue("");
  }

  return (
    <div style={{
      maxWidth: "500px",
      margin: "0 auto",
      padding: "20px"
    }}>

      <h1 style ={{ marginBottom: "20px"}}>
        Mount List
      </h1>


    <div className="max-w-xl mx-auto p-5">
      <input
        value = {newMount}
        onChange = {(e) => setNewMount(e.target.value)}
        placeholder = "Nome da mount"
        className="
        flax-1
        p-2
        border
        border-gray-400
        rounded
        "/>

      <button onClick = {handleAddMount}
      className="
      px-3
      py-2
      cursor-pointer
      bg-blue--500
      text-white
      rounded
      hover:bg-blue-600
      "
      >
        Adicionar Montaria
      </button>

    </div>

    <ul style={{ listStyle: "none", padding: 0}}>
        {mounts.map((mount, index) => (
          <MountItem
          key={index}
          mount={mount}
          index={index}
          editingIndex={editingIndex}
          editingValue={editingValue}
          setEditingValue={setEditingValue}
          handleEditMount={handleEditMount}
          handleRemoveMount={handleRemoveMount}
          handleSaveEdit={handleSaveEdit}
          />
        ))}
      </ul>
    </div>
    
  );
}