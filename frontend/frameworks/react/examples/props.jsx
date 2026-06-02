/* =====================================
   Destructuring
   ===================================== */

// No Destructuring
const Greeting_1 = (props) => {} // Use props.name, props.age

// With Destructuring
const Greeting_2 = ({ name, age }) => {} // Use name and age directly

/* =====================================
   Assigning a default value for a prop.
   ===================================== */

const Assigning_1 = (props) => {
  return <p>Hi {props.name}</p>
}

Assigning_1.defaultProps = {
  name: 'Some user',
}

// Assign a default value for a destructured property.
const Assigning_2 = ({ name = 'Some user' }) => {
  return <p>Hi {name}</p>
}

/* =====================================
   PropTypes
   ===================================== */

import PropTypes from 'prop-types'

export default function Button({ text }) {
  return <button>{text}</button>
}

//* Define the PropTypes for the 'Button' component */
Button.propTypes = {
  text: PropTypes.string,
  text: PropTypes.string.isRequired,
}
