import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Sidebar from "./sidebar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState("owners");

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          activeKey={activeKey}
          setActiveKey={setActiveKey}
        />
        <main className="flex-1 p-4 overflow-y-auto bg-gray-100">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}
