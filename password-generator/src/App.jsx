import {useCallback, useState, useEffect, useRef} from 'react'


function App() {
  const [length, setLength] = useState(8);
  const [numallowed, setNumallowed] = useState(false);
  const [charallowed, setCharallowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook
  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numallowed) {
      str += "0123456789"
    }
    if(charallowed) {
      str += "~!@#$%^&*()_-=+[]{}:;<>?/,."
    }

    for(let i =1; i <= length; i++) {
      let index = Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(index)
    }

    setPassword(pass)

  }, [length, numallowed, charallowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numallowed, charallowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-center text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value = {password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly 
          ref = {passwordRef}
          />
          
          <button 
          className='outline-none bg-blue-600 text-white px-3 py-0.5 shrink-0
           hover:bg-blue-900 hover:text-white hover:shadow-lg'
          onClick={copyPasswordToClipboard}
          >Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={50}
            value={length}
            className='cursor-pointer'
            onChange = {(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked = {numallowed}
            id = "numberinput"
            onChange={() => {setNumallowed((prev) => !prev)}} />
            <label>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox" 
            id="charInput"
            defaultChecked = {charallowed}
            onChange={() => {setCharallowed((prev) => !prev)}} />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
