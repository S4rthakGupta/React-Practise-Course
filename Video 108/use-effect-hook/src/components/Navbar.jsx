import React, {useEffect} from 'react'

const Navbar = ({color}) => {

  useEffect(() => {
    alert("Color was changed")

  }, [color])
  

  return (
    <div>This is a {color} coloured Navbar
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
    </div>
  )
}

export default Navbar