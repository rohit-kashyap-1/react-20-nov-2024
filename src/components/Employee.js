import React from 'react'


export default function Employee(props) {
  return (
    <div>
      <div style={{ width:'300px',border:'1px solid #ccc' }}>
        <img src={props.image} style={{ width:'100%' }} />
        <h2>{props.name}</h2>
        <p>{props.designation}</p>
      </div>
    </div>
  )
}
