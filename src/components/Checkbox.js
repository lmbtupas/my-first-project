import React from 'react'

const Checkbox= ({ checked, onChange }) => {
  return (
    <div>
        <input type='checkbox' checked={checked} onChange={onChange}/>
        <span> Only show products in stock </span>
    </div>
  )
}

export default Checkbox