import mongoose from 'mongoose'

const dbConnect = async () =>{
  try{
    const connect =  await mongoose.connect(process.env.MONGODB_URL)
    console.log("mongodb connected succesfull")

  }
  catch(err){
    console.log(err)

  }

}

export default dbConnect