import Todo from "../models/model.js";

export const createTodo = async (req, res) => {
    try {
        const { text } = req.body;

        if (!text) {
            return res.status(400).json({ message: "Text is required" });
        }

        const newTodo = await Todo.create({ text });

        return res.status(201).json({
            message: "Successfully added to DB",
            data: newTodo
        });

    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};

export const getList = async (req, res) => {

    try {
        const todos = await Todo.find()
        return res.status(200).json({ data: todos })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "internal server error" })

    }

}

export const removeItem = async (req,res) => {

    try {
        const { id } = req.params
        await Todo.findByIdAndDelete(id)
        return res.status(200).json({ message: "deleted successfully" })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "internal server error" })
    }
}