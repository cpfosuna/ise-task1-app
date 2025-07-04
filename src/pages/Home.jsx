import React from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">ISE I Task 1 Practice</h1>
      <button onClick={() => navigate("/menu")} className="bg-blue-500 text-white px-4 py-2 rounded">
        Start Practicing
      </button>
    </div>
  );
}
