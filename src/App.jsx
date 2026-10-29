// @ts-ignore CSS is handled by the bundler.
import { useState } from "react";
import "./App.css";
import { Alert } from "./components/Alert";
import { BadList } from "./components/BadList";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { CardButton } from "./components/CardButton";
import { ColorPicker } from "./components/ColorPicker";
import { ContactForm } from "./components/ContactForm";
import { Counter } from "./components/Counter";
import { FakeLessonLoader } from "./components/FakeLessonLoader";
import Footer from "./components/Footer";
import { Grade } from "./components/Grade";
import Header from "./components/Header";
import LessonCard from "./components/LessonCard";
import { LikeButton } from "./components/LikeButton";
import { LiveInput } from "./components/LiveInput";
import { LoginPanel } from "./components/LoginPanel";
import { MiniTodo } from "./components/MiniTodo";
import { NotificationBell } from "./components/NotificationBell";
import ProfileCard from "./components/ProfileCard";
import { ProfileEditor } from "./components/ProfileEditor";
import { ProfileForm } from "./components/ProfileForm";
import { SearchForm } from "./components/SearchForm";
import { SkillList } from "./components/SkillList";
import { StateResetExperiment } from "./components/StateResetExperiment";
import { StudentTable } from "./components/StudentTable";

const initialLessons = [
  {
    title: "JSX Rules",
    level: "beginner",
    minutes: 0,
    isFree: true,
    isDone: false,
  },
  {
    title: "Lesson 1",
    level: "beginner",
    minutes: 10,
    isFree: true,
    isDone: false,
  },
  {
    title: "Lesson 2",
    level: "beginner",
    minutes: 15,
    isFree: false,
    isDone: false,
  },
  {
    title: "Lesson 3",
    level: "beginner",
    minutes: 20,
    isFree: true,
    isDone: false,
  },
];

function App() {
  const [lessonCards, setLessonCards] = useState(initialLessons);
  const completeLessons = lessonCards.filter((lesson) => lesson.isDone).length;

  const name = "Andy";
  const year = new Date().getFullYear();

  const handleToggleDone = (index) => {
    const newLessonCards = lessonCards.map((lesson, i) => {
      if (i === index) {
        return { ...lesson, isDone: !lesson.isDone };
      }
      return lesson;
    });
    setLessonCards(newLessonCards);
  };

  return (
    <div>
      <Header />
      <h1>Hello, I'm {name}</h1>
      <p>I started learning React in {year}</p>
      <Card title="Lesson 1">
        <ProfileCard />
        <SkillList />
      </Card>
      <Counter />
      <Counter />
      <ColorPicker />
      <LikeButton />
      <LiveInput />
      <Button onClick={() => alert("Saved!")}>Save</Button>
      <Button disabled>Can't click</Button>
      <ProfileEditor />
      <MiniTodo />
      <CardButton />
      <SearchForm />
      <LoginPanel />
      <NotificationBell />
      <Grade score={85} />
      <Grade score={45} />
      <Grade score={95} />
      <Alert message="This is a success message!" type="success" />
      <Alert message="This is an error message!" type="error" />
      <Alert message="This is a warning message!" type="warning" />
      <Alert message="This is an info message!" type="info" />
      <Alert message="" type="info" />
      <FakeLessonLoader />
      <StateResetExperiment />
      <StudentTable />
      <BadList />
      <ProfileForm />
      <ContactForm />
      <p>{`Completed: ${completeLessons}/${lessonCards.length} lessons`}</p>
      {lessonCards.map((lesson, index) => (
        <LessonCard
          key={index}
          index={index}
          title={lesson.title}
          level={lesson.level}
          minutes={lesson.minutes}
          isFree={lesson.isFree}
          isDone={lesson.isDone}
          onToggleDone={handleToggleDone}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
