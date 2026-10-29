import { useState } from "react";

const students = [
  { id: 1, name: "Andy", score: 85, lang: "JS" },
  { id: 2, name: "Linh", score: 45, lang: "Python" },
  { id: 3, name: "Minh", score: 92, lang: "JS" },
  { id: 4, name: "Trang", score: 67, lang: "Python" },
];

const langOptions = ["All", "JS", "Python"];

const defaultFilteredParams = {
  name: "",
  lang: "All",
  score: "ASC",
};

export const StudentTable = () => {
  const [filteredParams, setFilteredParams] = useState(defaultFilteredParams);

  let filteredStudents = students;

  if (filteredParams.lang !== "All") {
    filteredStudents = students.filter(
      (student) => student.lang === filteredParams.lang,
    );
  }
  filteredStudents = filteredStudents
    .filter((student) =>
      student.name?.toLowerCase().includes(filteredParams.name?.toLowerCase()),
    )
    .toSorted((a, b) =>
      filteredParams.score === "ASC" ? a.score - b.score : b.score - a.score,
    );

  const handleSetFilteredParams = (e) => {
    const target = e.target || {};
    setFilteredParams({ ...filteredParams, [target.name]: target.value });
  };
  const handleFilteredSort = () => {
    setFilteredParams({
      ...filteredParams,
      score: filteredParams.score === "ASC" ? "DESC" : "ASC",
    });
  };

  const groupByLang = Object.groupBy(students, (student) => student.lang);

  return (
    <div>
      <div>
        {Object.entries(groupByLang).map(([lang, students]) => (
          <div
            key={lang}
          >{`${lang}: ${students?.reduce((acc, student) => (acc += `${student.name},`), "")}`}</div>
        ))}
      </div>
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filteredParams.name}
        onChange={handleSetFilteredParams}
      />
      <select name="lang" onChange={handleSetFilteredParams}>
        {langOptions.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <button onClick={handleFilteredSort}>
        Sort by score: {filteredParams.score}
      </button>
      <button onClick={() => setFilteredParams(defaultFilteredParams)}>
        Reset
      </button>
      <div>{`Showing ${filteredStudents.length} of ${students.length}`}</div>
      {filteredStudents.length === 0 ? (
        <div>No students found</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Language</th>
              <th>Score</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                style={{ color: student.score >= 50 ? "green" : "red" }}
              >
                <td>{student.name}</td>
                <td>{student.lang}</td>
                <td>{student.score}</td>
                <td>{student.score >= 50 ? "Passed" : "Failed"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
