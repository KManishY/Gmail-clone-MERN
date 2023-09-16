
import email from '../model/email.js'

export const saveSentEmail = function (req,res){

    try {
        const newMail = new email(req.body)
        newMail.save();
        res.status(200).json('email saved successfully');
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}