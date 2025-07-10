import React from "react";
import { User, Building, Settings, Users } from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const menuItems = [
  { name: "Owners", icon: <User />, key: "owners", path: "/owners" },
  { name: "Agents", icon: <Users />, key: "agents", path: "/agents" },
  { name: "Properties", icon: <Building />, key: "properties", path: "/properties" },
  { name: "Users", icon: <User />, key: "users", path: "/users" },
  { name: "Settings", icon: <Settings />, key: "settings", path: "/settings" },
];

export default function Sidebar({ collapsed, setCollapsed, activeKey, setActiveKey }) {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "bg-gray-800 text-white transition-all duration-300 h-full",
        collapsed ? "w-12" : "w-48"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <h1 className="text-lg font-bold">Urbandom</h1>}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-400 hover:text-white"
        >
          {collapsed ? ">" : "<"}
        </button>
      </div>
      <nav className="mt-4">
        {menuItems.map((item) => (
          <div
            key={item.key}
            className={clsx(
              "flex items-center gap-3 px-4 py-2 cursor-pointer hover:bg-gray-700",
              activeKey === item.key ? "bg-gray-700" : ""
            )}
            onClick={() => {
              setActiveKey(item.key);
              navigate(item.path);
            }}
          >
            <span className="text-xl">{item.icon}</span>
            {!collapsed && <span>{item.name}</span>}
          </div>
        ))}
      </nav>
    </div>
  );
}
