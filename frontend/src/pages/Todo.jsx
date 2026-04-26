import React, { useEffect, useState } from 'react'
import TodoCard from '../components/TodoCard'
import { useNavigate } from 'react-router-dom'
import { createTodo, getTodo } from '../service/todo.service'




const Todo = () => {

  const navigate = useNavigate()
  useEffect(() => {
    const fetchList = async () => {
      try {
        const user = localStorage.getItem("isLoggedIn")
        if (!user) {
          navigate('/login')
        }
        const todo = await getTodo()
        console.log(todo.data)
        setList(todo.data)

      } catch (err) {

      }
    }
    fetchList()
  }, [])



  const [todo, setTodo] = useState('')

  const [list, setList] = useState([])

  const handleAdd = async () => {
    try {
      if (!todo.trim()) return alert("");

      setTodo('')
      window.location.reload();
      const res = await createTodo(todo)


    } catch (err) {

      alert("failed")

    }

  }

  const handleDeleteList = (id) => {
      setList((prev) => prev.filter((item) => item._id !== id))

    }

  console.log(list)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">

      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">
          Hey, welcome back 👋
        </h2>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Type your task..."
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleAdd()
              }
            }}
          />

          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition" onClick={handleAdd}>
            Add
          </button>
        </div>

   
        <div className="mt-4 space-y-2">

          {list.map((item, index) => (


            <TodoCard key={index} value={item.text} id={item._id} onDelete={handleDeleteList} />

          ))}


        </div>

      </div>

    </div>
  )
}

export default Todo