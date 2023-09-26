import React from 'react'

function Header() {
  return (
    <tr style={{
        fontWeight: 'bold',
        color: 'red'
    }}>
        <td>Name</td>
        <td>Price</td>
        <td style={{paddingLeft: '50px'}}>Stock</td>
    </tr>
  )
}

export default Header