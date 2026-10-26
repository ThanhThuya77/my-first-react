const SkillList = () => {
  const heading = "Skills I’m learning";
  const skills = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <div>{heading}</div>
      <div className="container">
        <ul>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillList;
