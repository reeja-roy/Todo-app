import axios from 'axios'
export const createTodo = async (text) => {
    try {
        const response = await axios.post("http://localhost:4000/api/add", { text })
        return response.data

    } catch(err){
        return console.log(err)
    }

}

export const getTodo = async () => {

    try {
        const response = await axios.get("http://localhost:4000/api")
        return response.data
    }
    catch(err){
        console.log(err)


    }
}
export const deleteTodo = async (id) => {

    try{
          const response = await axios.delete(`http://localhost:4000/api/${id}`)
          return response.data
    }catch(err){

 return console.log(err)
    }
} 