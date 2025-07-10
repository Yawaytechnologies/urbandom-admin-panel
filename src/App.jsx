// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import AgentsTable from "../src/pages/Agents";
import OwnerTable from "./pages/Owners";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="agents" element={<AgentsTable />} />
          <Route path="owners" element={<OwnerTable />} />  {/* This renders on /agents */}
          {/* Add other routes like /owners, /users, etc. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
