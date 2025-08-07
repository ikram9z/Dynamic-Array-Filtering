import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const productList = [{
    name : 'Wireless Mouse',
    category: 'Electronics',
    id: 1
  },
  {
    name: 'Keyboard',
    category: 'Electronics',
    id: 2
  },
  {
    name: 'T-shirt',
    category: 'Clothing',
    id: 3
  },
  {
    name: 'Jeans',
    category: 'Clothing',
    id: 4
  },
  {
    name: 'Python',
    category: 'Books',
    id: 5
  }
]

  const [selectedCategories,setSelectedCategories] = useState([]) 
  
  const handleChange = (e) => {
    e.target.checked ? setSelectedCategories([...selectedCategories,e.target.value]) : 
    setSelectedCategories(selectedCategories.filter((val)=> val != e.target.value))
    console.log(selectedCategories)
  }

  const filteredArr = productList.filter((val) => selectedCategories.includes(val.category))
  // Selected Categories = 'Electronic and Clothing'
  // val.category is a string
  // val.category = .includes()(Electronics and Clothing)
  
  return (
    <>
       <h1>Product List</h1>
       <h3>Filter by Category:</h3>
       <input type="checkbox" name = 'electronics' value = 'Electronics' onChange = {handleChange}/> Electronics
       <input type="checkbox" name="clothing" value = 'Clothing' onChange = {handleChange}/> Clothing
       <input type="checkbox" name="books" value = 'Books' onChange = {handleChange} /> Books
       <ul>
        { selectedCategories.length == 0 ? 
        
          productList.map((val) => (
            <li key = {val.id}>{val.category} - {val.name}</li>
          ))
          :
          filteredArr.map((val) => (
            <li key = {val.id}>{val.category} - {val.name} </li>
          ))  
        }
       </ul>
    </>
  )
}

export default App
