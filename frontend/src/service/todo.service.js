import axios from 'axios'
export const createTodo = async (text) => {
    try {
        const response = await axios.post("https://todo-app-9zf6.onrender.com/api/add", { text })
        return response.data

    } catch(err){
        return console.log(err)
    }

}

export const getTodo = async () => {

    try {
        const response = await axios.get("https://todo-app-9zf6.onrender.com/api")
        return response.data
    }
    catch(err){
        console.log(err)


    }
}
export const deleteTodo = async (id) => {

    try{
          const response = await axios.delete(`https://todo-app-9zf6.onrender.com/api/${id}`)
          return response.data
    }catch(err){

 return console.log(err)
    }
} 