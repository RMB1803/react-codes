import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href = "https://google.com" target = "_blank">Visit Google</a>
)

// WRONG SYNTAX ACCORDING TO REACT'S RENDER METHOD
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }


const anotherUser = "chai aur react"

const reactElement = React.createElement(
  // Syntax is to be followed while creating an element using React and rendering it using react.
  'a', // first parameter: tag
  {href: "https://google.com", target: '_blank'} , // second parameter: object(adds properties/attributes)
  'Click me to visit Google.', // third parameter: general text
  anotherUser // after the tree is formed, all the variable injections come at last
)


ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)
