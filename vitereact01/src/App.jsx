import Chai from './chai'

function App() {
  const username = "chai aur code"

  return (
    <>
    <h1>Ice Tea {username}</h1>
    <Chai />
    </>
  )
}

export default App

/*
{username} -> This is an evaluated expression, we only write final outcome of JS in this
any evalutaion should be done outside of the return method.
 */