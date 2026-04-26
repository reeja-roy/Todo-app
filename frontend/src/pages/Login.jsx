import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: ""
  })

const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) return alert("enter name")
    if (!formData.password.trim()) return alert("enter password")
    console.log("loginData:", formData)

    alert("login data successfull added")
    localStorage.setItem("isLoggedIn",true)
    navigate('/')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200">

      <div className="bg-white w-full max-w-sm p-8 rounded-2xl shadow-lg">

        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">
          Welcome Back
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">Username</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={formData.name}
                name='name'
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                name='password'
                value={formData.password}
                placeholder="Enter your password"
                onChange={handleChange}
                className="w-full mt-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <button type='submit' className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-lg hover:from-blue-500 hover:to-blue-700 transition"  >
              Login
            </button>

          </div>

        </form>

      </div>

    </div>
  )
}

export default Login