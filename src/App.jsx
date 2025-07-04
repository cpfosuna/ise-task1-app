import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ActivitiesMenu } from "./pages/ActivitiesMenu";
import { MultipleChoice } from "./pages/MultipleChoice";
import { Matching } from "./pages/Matching";
import { DragDrop } from "./pages/DragDrop";
import { ImageSelect } from "./pages/ImageSelect";
import { ShortAnswer } from "./pages/ShortAnswer";
import { Results } from "./pages/Results";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<ActivitiesMenu />} />
        <Route path="/activity/multiple-choice" element={<MultipleChoice />} />
        <Route path="/activity/matching" element={<Matching />} />
        <Route path="/activity/drag-drop" element={<DragDrop />} />
        <Route path="/activity/image-select" element={<ImageSelect />} />
        <Route path="/activity/short-answer" element={<ShortAnswer />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

