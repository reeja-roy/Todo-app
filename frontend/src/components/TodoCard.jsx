import React from 'react'
import { deleteTodo } from '../service/todo.service'

const TodoCard = ({ value, index , id ,onDelete }) => {
  const handleDelete = async () => {
    console.log("Delete it")
    try{
          await deleteTodo(id)
          onDelete(id)

    }catch(err){

      console.log(err)
    }




  }

  return (
    <div className="bg-white border shadow-sm rounded-xl p-4 flex items-center justify-between hover:shadow-md transition">

      
      <p className="text-gray-700">{value}</p>
      <button className='text-red-400' onClick={() => handleDelete(id)}>delete</button>


    </div>
  )
}

export default TodoCard
