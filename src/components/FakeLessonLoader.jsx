import { useState } from "react";

const defaultData = [
  { title: "Lesson 1", level: "beginner", minutes: 10, isFree: true },
  { title: "Lesson 2", level: "beginner", minutes: 15, isFree: false },
  { title: "Lesson 3", level: "beginner", minutes: 20, isFree: true },
];

export const FakeLessonLoader = () => {
  const [status, setStatus] = useState("idle");
  const [data, setData] = useState([]);

  const handleLoad = async (type) => {
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (type === "success") {
      console.log("Load success");
      setStatus("success");
      setData(defaultData);
    } else if (type === "empty") {
      console.log("Load empty");
      setStatus("empty");
      setData([]);
    } else if (type === "error") {
      console.log("Load error");
      setStatus("error");
      setData([]);
    }
  };
  return (
    <div>
      <div>Status: {status}</div>
      {status === "loading" && <div>Loading...</div>}
      {status === "error" && <div>Error loading data</div>}
      {status === "empty" && <div>No data available</div>}
      {status === "success" &&
        data.length > 0 &&
        data.map((lesson, index) => (
          <div key={index}>
            <h4>{lesson.title}</h4>
            <p>Level: {lesson.level}</p>
            <p>Minutes: {lesson.minutes}</p>
            <p>Free: {lesson.isFree ? "Yes" : "No"}</p>
          </div>
        ))}
      <button onClick={() => handleLoad("success")}>Load (success)</button>
      <button onClick={() => handleLoad("empty")}>Load (empty)</button>
      <button onClick={() => handleLoad("error")}>Load (error)</button>
    </div>
  );
};
