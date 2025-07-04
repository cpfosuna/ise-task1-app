import React from "react";
import { Link } from "react-router-dom";

export function ActivitiesMenu() {
  const activities = [
    { name: "Multiple Choice", path: "/activity/multiple-choice" },
    { name: "Matching", path: "/activity/matching" },
    { name: "Drag & Drop", path: "/activity/drag-drop" },
    { name: "Image Select", path: "/activity/image-select" },
    { name: "Short Answer", path: "/activity/short-answer" },
  ];

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-semibold">Choose an activity:</h2>
      {activities.map((a) => (
        <Link key={a.name} to={a.path} className="block p-4 bg-gray-100 rounded-xl shadow">
          {a.name}
        </Link>
      ))}
    </div>
  );
}
