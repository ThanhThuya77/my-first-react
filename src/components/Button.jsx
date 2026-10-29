export const Button = ({ children, type = "button", ...rest }) => {
  return (
    <button type={type} {...rest}>
      {children}
    </button>
  );
};

// One improvement for Lesson 8: give it a safe default type, so it never submits a form by accident:

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

answer: The direction is right, but the real danger is bigger than “the wrong type”: "false" is a non-empty string, and from Stage 0, Lesson 7, every non-empty string is truthy. So isFree="false" behaves as TRUE, and the card shows “Free”. Fix: minutes={30} isFree={false}.

// c
function Page() {
  function Header() {
    return <h1>Hi</h1>;
  }
  return <Header />;
}
// We should not declare a function component inside a function and use it directly, because every render will generate a new component instead of reuse the previous instance with new props.

answer: A component inside a component ✅ correct. To connect it to what you’ve learned since: on every render, Header is a new function (a new address in the heap). React compares types, sees a different type at that position, and destroys and recreates the instance. Its state is lost every time.

// d
Avatar.defaultProps = { size: 64 };
// React 19 no longer supports these on function components; they're silently ignored. Currently: use destructuring defaults, and use TypeScript to type props

6. Thinking question: what’s the difference between props and state? (Make your best guess; we cover state next lesson.)
// Props are value that we pass to children components and they are read-only.

*/
