const Hello = (props) => {
  const bornYear = () => {
    const yearNow = new Date().getFullYear()
    const theYear = yearNow - props.age
    return theYear
  }

  const birthdayMonth = () => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ]
    const monthName = months[props.monthBirth - 1]
    return monthName
  }

  const actualDate = () => {

    const year = bornYear()
    const numberOfDays = new Date(year, props.monthBirth, 0).getDate()
    return numberOfDays
  }

  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
      <p>So you were probably born in {bornYear()}, in the month of {birthdayMonth()}</p>
      <p>The days of the month were {actualDate()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 25
  const monthBirth = 12

  return (
    <div>
      <h1>Greetings</h1>

      <Hello name={name} age={age} monthBirth={monthBirth} />
    </div>
  )
}


export default App