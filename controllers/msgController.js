const Chat=require('../models/ChatRoom')
const Message=require('../models/ChatMessage')
const allMessages=async(req,res)=>{
    const {id}=req.body;
    try{
        const messages=await Chat.findById(id).populate('messages');
        res.status(200).json(messages);
    }
    catch(err){
        res.status(400).send(err);
    }
}

const postMessages = async(req, res)=>{

    const {id,content}=req.body;
    let messages={
        content:content,
        sender:req.user._id
    }
    try{
        const newMsg=await Message.create(messages);
        await Chat.findByIdAndUpdate(id,{
            $push:{
                messages:newMsg._id
            }
        },{new:true})
        const formattedmsg=await Message.findById(newMsg._id).populate('sender');
        res.status(200).json(formattedmsg);
    }
    catch(err){
        res.status(400).send(err);
    }
}

module.exports={
    allMessages,
    postMessages
}