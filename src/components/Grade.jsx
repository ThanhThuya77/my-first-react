export const Grade = ({ score = 0 }) => {
  let content = "";
  if (score >= 90) {
    content = "A 🏆";
  } else if (score >= 70 && score <= 89) {
    content = "B";
  } else if (score >= 50 && score <= 69) {
    content = "C";
  } else {
    content = "F ❌";
  }
  return <div>Grade: {content}</div>;
};
