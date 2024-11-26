const Header = (props) => {
  return(
    <>
      <h1>{props.course}</h1>
    </>
  )
}
const Part = ({part}) =>{
  return(
    <>
      <p>
        {part.name} {part.exercises}
      </p>
    </>
  )
}
const Content = ({parts}) =>{
  let[part1, part2, part3] = parts
  return(
    <>
      <Part part={part1} />
      <Part part={part2} />
      <Part part={part3} />
    </>
  )
}
const Total = ({parts}) => {
  let [part1, part2, part3] = parts;
  return(
    <p>Number of exercises {part1.exercises + part2.exercises + part3.exercises}</p>
  )
}
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  let {name, parts} = course;
  return (
    
    <div>
      <Header course={name}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </div>
  )
}

export default App