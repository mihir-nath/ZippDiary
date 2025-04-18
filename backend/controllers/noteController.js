const expressAsyncHandler = require("express-async-handler");
const Note = require("../models/noteModel");

const getNotes= expressAsyncHandler(async(req,res) => {
    const notes= await Note.find({user:req.user._id});
    //console.log(req.user._id);
    res.json(notes);
});

const createNote = expressAsyncHandler(
    async(req,res) => {
        const {title, content ,catagory } = req.body;

        if( !title || !content || !catagory){
            res.status(400);
            throw new Error(" please fill all")
        } else{
            const note = new Note({user:req.user._id,title, content, catagory});

            const createNote = await note.save();
            res.status(201).json(createNote);
        }
    }
);

const getNoteById =expressAsyncHandler(
    async (req,res) =>{
        const note= await Note.findById(req.params.id);
        if(note){
            res.json(note);
        }else{
            res.status(404).json({ message:"Note Not Found"});
        }
    }
);

const UpdateNote =expressAsyncHandler(
    async (req,res) =>{
        const { title, content, catagory } = req.body;
        const note= await Note.findById(req.params.id);
        if(note){
            note.title = title;
            note.content =content;
            note.catagory = catagory;

            const updatedNote = await note.save();
            res.json(updatedNote);
        }else{
            res.status(404).json({ message:"Note Not Found"});
        }
    }
);
const DeleteNote =expressAsyncHandler(
    async (req,res) =>{
        const note= await Note.findById(req.params.id);
        if(note){
            await note.remove();
            res.json({message: "Note Removed"});
        }else{
            res.status(404).json({ message:"Note Not Found"});
        }
    }
);

module.exports= {getNotes,createNote , getNoteById ,UpdateNote, DeleteNote};