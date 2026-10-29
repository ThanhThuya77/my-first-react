export const Alert = ({ message = "", type = "" }) => {
  const colorType = {
    success: "green",
    error: "red",
    warning: "yellow",
    info: "blue",
  };
  return message && <div style={{ color: colorType[type] }}>{message}</div>;
};
