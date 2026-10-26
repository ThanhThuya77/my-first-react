export const Button = ({ children, ...rest }) => {
  return <button {...rest}>{children}</button>;
};

/*

// a
function Badge(props) {
  props.label = props.label.toUpperCase();
  return <span>{props.label}</span>;
}
// Props are read-only, we should not change in place, we should create a new variable to update or format.

// b
<LessonCard minutes="30" isFree="false" />;
// LessonCard has minutes and isFree variables are number not string.

// c
function Page() {
  function Header() {
    return <h1>Hi</h1>;
  }
  return <Header />;
}
// We should not declare a function component inside a function and use it directly, because every render will generate a new component instead of reuse the previous instance with new props.

// d
Avatar.defaultProps = { size: 64 };
// React 19 no longer supports these on function components; they're silently ignored. Currently: use destructuring defaults, and use TypeScript to type props

6. Thinking question: what’s the difference between props and state? (Make your best guess; we cover state next lesson.)
// Props are value that we pass to children components and they are read-only.

*/
