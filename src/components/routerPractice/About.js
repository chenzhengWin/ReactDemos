import React from "react";

export default function About() {
  const [level, setLevel] = React.useState("good");
  return(
  <div>
    我是About
    <span>水平:{level}</span>
  </div>)
};
