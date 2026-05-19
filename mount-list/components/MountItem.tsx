"use client";
import { useState } from "react";

type Props = {
    mount: {
        name: string;
        description: string;
        obtain: string;
    };    
    index: number;
    editingIndex: number | null;
    editingValue: string;
    setEditingValue: (value: string) => void;
    handleEditMount: (index: number) => void;
    handleRemoveMount: (index: number) => void;
    handleSaveEdit: () => void;
};

export default function MountItem ({
    mount,
    index,
    editingIndex,
    editingValue,
    setEditingValue,
    handleEditMount,
    handleRemoveMount,
    handleSaveEdit,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <li className="
        flex flex-col items-start
        p-4 mb-3
        border rounded-lg
        bg-white
        text-zinc-900
        shadow
        animate-fadeIn
        ">
            {editingIndex === index ? (
                <>
                    <input
                        value = {editingValue}
                        onChange={(e) => setEditingValue(e.target.value)}
                    />

                    <button onClick={handleSaveEdit}>Salvar</button>
                </>
            ) : (
                <>
                    <span 
                        onClick={() => setIsOpen(!isOpen)}
                        className="
                        cursor-pointer
                        font-bold
                        text-base
                        ">
                        {mount.name}
                    </span>

                    {isOpen && ( 
                        <div style={{ marginTop: "10px"}}>
                            <p className="mt-1">
                                <strong>Description:</strong>
                                {mount.description || "N/A"}
                            </p>
                            <p className="mt-1">
                                <strong>Obtain:</strong> 
                                {mount.obtain || "N/A"}
                            </p>

                        <div className="flex gap-2 mt-2">
                            <button onClick={() => handleEditMount(index)}
                                className="
                                px-3
                                py-1
                                rounded
                                bg-green-700
                                text-white
                                hover:opacity-80
                                transition
                                "

                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Editar
                            </button>

                            <button onClick={() => handleRemoveMount(index)}
                                className="
                                px-3
                                py-1
                                rounded
                                bg-green-700
                                text-white
                                hover:opacity-80
                                transition
                                "

                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Deletar
                            </button>
                        </div>
                        </div>
                    )}
                </>
            )}
        </li>
    );
}