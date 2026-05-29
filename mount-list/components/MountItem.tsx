"use client";
import { useState } from "react";
import Link from "next/link";
import type { Mount } from "@/types/Mount"

type Props = {
    mount: Mount;
    index: number;
    editingIndex: number | null;
    editingMount: {
        name: string;
        description: string;
        obtain: string;
    }| null;
    setEditingMount: (value: any) => void;
    handleEditMount: (index: number) => void;
    handleRemoveMount: (index: number) => void;
    handleSaveEdit: () => void;
};

export default function MountItem ({
    mount,
    index,
    editingIndex,
    editingMount,
    setEditingMount,
    handleEditMount,
    handleRemoveMount,
    handleSaveEdit,
}: Props) {
    const [isOpen, setIsOpen] = useState(false);
    const slug = mount.name.toLowerCase().replace(/\s+/g, "-");
    return (
        <li className="
            p-4
            rounded-xl
            bg-gradient-to-br from-zinc-8200 to-yellow-900
            border border-yellow-500/10
            border-1-4 border-l-yellow-500
            shadow
            text-white
            transition
            hover:border-yellow-500/40
            my-2
        ">
            {editingIndex === index ? (
                <>
                    <input
                        value = {editingMount?.name || ""}
                        onChange={(e) => setEditingMount({
                            ...editingMount!,
                            name: e.target.value
                        })
                    }
                    className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 text-white"
                    />
                    <textarea
                        value={editingMount?.description || ""}
                        onChange={(e) =>
                            setEditingMount({
                                ...editingMount!,
                                description: e.target.value
                            })
                        }
                        className="w-full p-2 rounded -bg-zinc-700 border border-zinc-600 text-white h-24 my-2"
                    />
                    <input
                        value = {editingMount?.obtain || ""}
                        onChange={(e) =>
                            setEditingMount({
                                ...editingMount!,
                                obtain: e.target.value
                            })
                        }
                        className="w-full p-2 rounded bg-zinc-700 border border-zinc-600 text-white"
                    />

                    <button 
                    onClick={handleSaveEdit}
                    className="
                    mt-2
                    px-4
                    py-2
                    rounded
                    bg-blue-500
                    text-white
                    hover:bg-blue-600
                    transition
                    shadow"
                    >Salvar</button>
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
                        <div className="mt-3 space-y-2 text-sm text-zinc-300">
                            <p className="mt-1">
                                <span className="font-semibold text-white">
                                    Description:
                                </span><br />
                                {mount.description || "N/A"}
                            </p>
                            <p className="mt-1">
                                <span className="font-semibold text-white">
                                    Obtain:
                                </span>{""}
                                {mount.obtain ? (
                                    <Link
                                        href={`/obtain/${mount.obtain.toLocaleLowerCase().replace(/\s+/g, "-")}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-yellow-400 hover:underline"
                                    >
                                    {mount.obtain}
                                    </Link>
                                ) : (
                                    "N/A"
                                )}
                            </p>

                        <div className="flex gap-2 mt-2">
                            <button onClick={() => handleEditMount(index)}
                                className="
                                    px-3 py-1
                                    rounded-md
                                    bg-green-700
                                    text-white
                                    text-sm
                                    hover:bg-green-500
                                    transition
                                "

                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                            >
                                Edit
                            </button>

                            <button onClick={() => handleRemoveMount(index)}
                                className="
                                    px-3 py-1
                                    rounded-md
                                    bg-red-600
                                    text-white
                                    text-sm
                                    hover:bg-red-500
                                    transition
                                "

                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.7")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>

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