export function Card({ title = "Lesson 0", children }) {
  return (
    <div style={{ border: "1px solid green" }}>
      <h3>{title}</h3>
      {children}
    </div>
  );
}
