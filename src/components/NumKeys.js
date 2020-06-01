import React from 'react'
const Numkeys = (props) => {
  
  return (
    <button className={props.class} value={props.ele}>
      {props.ele}
    </button>
  )
}

export default Numkeys