import React from "react";
import { Pencil, Trash2, Plus } from "lucide-react";
import DynamicTable from "../components/table"; // adjust path as needed

const agents = [
  {
    id: 1,
    name: "Jane Smith",
    email: "jane@example.com",
    phone: "987-654-3210",
    status: "Active",
  },
  {
    id: 2,
    name: "Robert Johnson",
    email: "robert@example.com",
    phone: "555-123-4567",
    status: "Inactive",
  },
];

export default function AgentsTable() {
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
    <button key="edit" className="p-2 text-blue-600 hover:text-blue-800">
      <Pencil size={18} />
    </button>,
    <button key="delete" className="p-2 text-red-600 hover:text-red-800">
      <Trash2 size={18} />
    </button>,
  ];

  return (
    <div className="p-6 bg-white rounded shadow">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold">Agents</h2>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          <Plus size={18} />
          Add Agent
        </button>
      </div>

      <DynamicTable columns={columns} data={agents} actions={renderActions} />
    </div>
  );
}
