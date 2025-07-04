import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";

export function MultipleChoice() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      const querySnapshot = await getDocs(collection(db, "activities/task1/multipleChoice"));
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({ id: doc.id, ...doc.data() });
      });
      setQuestions(items);
    };
    fetchQuestions();
  }, []);

  const handleSelect = (qid, option) => {
    setAnswers({ ...answers, [qid]: option });
  };

  const handleSubmit = async () => {
    await setDoc(doc(db, "users", "testUser"), {
      progress: { task1: { answers } },
    }, { merge: true });
    setSubmitted(true);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Multiple Choice Questions</h2>
      {questions.map((q) => (
        <div key={q.id} className="mb-4">
          <p className="font-semibold">{q.question}</p>
          {q.options.map((opt) => (
            <button key={opt} onClick={() => handleSelect(q.id, opt)} className="m-1 px-3 py-1 bg-gray-200 rounded">
              {opt}
            </button>
          ))}
          {submitted && (
            <p className={answers[q.id] === q.correct ? "text-green-500" : "text-red-500"}>
              {answers[q.id] === q.correct ? "Correct" : `Wrong. Correct: ${q.correct}`}
            </p>
          )}
        </div>
      ))}
      {!submitted && <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>}
    </div>
  );
}
