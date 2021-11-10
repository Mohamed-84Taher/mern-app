const express=require('express')
const { addContact, getAllContacts, deleteContact, updateContact, getContact } = require('../controllers/contact')
const router=express.Router()



// test
// path  /api/contacts/test
// router.get('/test',(req,res)=>{
//     res.send('Hello world')
// })



// @desc add new contact
// @method post
// @req.body
router.post('/',addContact)

// @desc get all contacts
// @method get
router.get('/',getAllContacts)
// desc delete contact
// @method delete
// @req.params
router.delete('/:ID',deleteContact)

// @desc update contact
// @method put 
//@req.body
// @ req.params
router.put('/:ID',updateContact)
// desc get contact
// @method get
// @req.params
router.get('/:ID',getContact)



module.exports=router