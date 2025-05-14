import React from 'react'

import './message.css'
function FruitList() {
    const Fruits = [
        {'id':'1' , 'name' : 'apple'},
        {'id':'2' , 'name': 'Banana'},
        {'id':'3', 'name':'Orange'},
        {'id':'4','name':'Graphes'}
    ]
  return (
    <div className='user'>
        <h2>Fruits List</h2>
      <ol>
        {Fruits.map((Fruit) => (
            <li key={Fruit.id}>{Fruit.name}</li>
        ) )}
      </ol>
    </div>
  )
}

export default FruitList
