import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import DynamicTable from "../components/table"; // adjust path as needed

const owners = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    phone: "123-456-7890",
    status: "Active",
  },
  {
    id: 2,
    name: "Emily Clark",
    email: "emily@example.com",
    phone: "987-654-3210",
    status: "Inactive",
  },
];

export default function OwnerTable() {
  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Email", accessor: "email" },
    { header: "Phone", accessor: "phone" },
    {
      header: "Status",
      accessor: "status",
      render: (row) => (
        <span
          className={`px-2 py-1 rounded text-sm ${
            row.status === "Active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const renderActions = (row) => [
    <button
      key="edit"
      className="p-2 text-blue-600 hover:text-blue-800"
      onClick={() => alert(`Edit ${row.name}`)}
    >
      <Pencil size={18} />
    </button>,
    <button
      key="delete"
      className="p-2 text-red-600 hover:text-red-800"
      onClick={() => alert(`Delete ${row.name}`)}
    >
      <Trash2 size={18} />
    </button>,
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Owners</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <Plus size={18} />
          Add Owner
        </button>
      </div>

      <DynamicTable columns={columns} data={owners} actions={renderActions} />
    </div>
  );
}
