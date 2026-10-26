import "./App.css";
import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";
import SkillList from "./components/SkillList";
import LessonCard from "./components/LessonCard";
import { Card } from "./components/Card";
import { Button } from "./components/Button";
import { Counter } from "./components/Counter";
import { LikeButton } from "./components/LikeButton";
import { ProfileEditor } from "./components/ProfileEditor";
import { MiniTodo } from "./components/MiniTodo";

function App() {
  const name = "Andy";
  const year = new Date().getFullYear();

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
      <LikeButton />
      <Button onClick={() => alert("Saved!")}>Save</Button>
      <Button disabled>Can't click</Button>
      <ProfileEditor />
      <MiniTodo />
      <LessonCard />
      <LessonCard title="Test 1" minutes={60} isFree={false} />
      <LessonCard title="Test 2" minutes={20} />
      <Footer />
    </div>
  );
}

export default App;
