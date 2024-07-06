"use client";
import Image from "next/image";
import { setRole } from "@/app/lib/actions";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { ClerkUser } from "@/app/admin/dashboard/usuarios/page";

export default function UsuariosCards({ usuarios }: { usuarios: ClerkUser[] }) {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredUsers, setFilteredUsers] = useState<ClerkUser[]>(usuarios);

  // Function to handle search input change
  const handleSearchChange = (e: any) => {
    setSearchTerm(e.target.value);
    filterUsers(e.target.value);
  };

  // Function to filter users based on search term
  const filterUsers = (query: any) => {
    const lowercasedQuery = query.toLowerCase();
    const filteredData = usuarios.filter((user: any) => {
      return user.fullName.toLowerCase().includes(lowercasedQuery);
    });
    setFilteredUsers(filteredData);
  };

  // Function to handle role change
  const handleRoleChange = async (userId: string, role: string) => {
    await setRole({ id: userId, role });
    // Update local state directly
    const updatedUsers = filteredUsers.map((user) => {
      if (user.id === userId) {
        return { ...user, role };
      }
      return user;
    });
    setFilteredUsers(updatedUsers);
  };

  function UserCard({ user }: { user: ClerkUser }) {
    return (
      <div className="border p-6 rounded-lg shadow-lg bg-white mb-4">
        <div className="mb-4 font-bold text-xl text-gray-800 flex justify-between items-center">
          <div>{user.fullName}</div>
          {user.hasImage && (
            <div className="ml-4">
              <Image
                src={user.imageUrl}
                alt={user.id}
                width={50}
                height={50}
                className="rounded-full"
              />
            </div>
          )}
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-medium">ID Usuario:</span> {user.id}
        </div>
        <div className="text-gray-600 mb-2">
          <span className="font-medium">Email:</span>{" "}
          {user.emailAddress || "No primary email"}
        </div>
        <div className="text-gray-600 mb-4">
          <span className="font-medium">Rol:</span>{" "}
          {user.role ? user.role : "Sin privilegios"}
        </div>

        <div className="flex space-x-2">
          <button
            onClick={() => handleRoleChange(user.id, "admin")}
            className="btn-primary bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Hacer administrador
          </button>
          <button
            onClick={() => handleRoleChange(user.id, "moderator")}
            className="btn-secondary bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Hacer moderador
          </button>
          <button
            onClick={() => handleRoleChange(user.id, "")}
            className="btn-secondary bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Remover privilegios
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl">Usuarios</h1>
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar por nombre..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
          />
          <div className="absolute left-3 top-3">
            <AiOutlineSearch className="text-gray-400 ml-1" />
          </div>
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-2 mt-6 ">
        {filteredUsers.map((user) => (
          <UserCard user={user} key={user.id} />
        ))}
      </div>
    </div>
  );
}
