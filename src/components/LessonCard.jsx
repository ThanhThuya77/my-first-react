const defaultAuthor = { name: "Andy", city: "Saigon" };

function LessonCard({
  title = "JSX Rules",
  level = "beginner",
  minutes = 0,
  isFree = true,
  author = defaultAuthor,
}) {
  // missing parentheses and a container div for all.
  return (
    <div className="lessonCard">
      <title>{title}</title>
      {/* why do we use this title tag in a component ? */}
      <h2 className="card-title">{title}</h2>
      {/* className not class */}
      {level === "beginner" && <p>⭐ Recommended</p>}
      <p style={{ color: isFree ? "pink" : "brown" }}>
        {isFree ? "Free" : "Paid"}
      </p>
      <p style={{ color: "gray" }}>Level: {level.toUpperCase()}</p>
      {/* inline-style should be in double braces/curlies */}
      <img src="https://i.pravatar.cc/80" alt="avatar" />
      {/* it doesn't have close tag. */}
      <label htmlFor="done">Done?</label>
      {/* htmlFor instead of for */}
      <input id="done" type="checkbox" />
      {/* missing closing tag */}
      <p>Written by {author.name}</p>
      {/* can not display an object, it should be author.name */}
      <p>{!!minutes && `${minutes} minutes to read`}</p>
      {/* minutes is 0 so it will show 0 instead of the right side. It should be !!minutes */}
    </div>
  );
}

export default LessonCard;

// function LessonCard() {
//   const title = "JSX Rules";
//   const level = "beginner";
//   const minutes = 0;
//   const author = { name: "Andy", city: "Saigon" };

//   return
//     <h2 class="card-title">{title}</h2>
//     <p style="color: gray">Level: {level}</p>
//     <img src="https://i.pravatar.cc/80" alt="avatar">
//     <label for="done">Done?</label>
//     <input id="done" type="checkbox">
//     <p>Written by {author}</p>
//     <p>{minutes && `${minutes} minutes to read`}</p>
// }

// export default LessonCard;

// 4. Thinking question: why does JSX use className instead of class? Use what you learned in Part A to explain.
// I just remember that React want to keep their things first, in React also have their Class.
