import React from 'react'
import {Link} from 'react-router-dom'
import './ContactCard.css'
import editBtn from '../../Assets/edit.png'
import avatar from '../../Assets/avatar.png'
import deleteBtn from '../../Assets/delete.png'
import { deleteContact, getContact, toggleTrue } from '../../redux/actions/contactActions'
import { useDispatch } from 'react-redux'



const ContactCard = ({contact}) => {
const dispatch=useDispatch()
    return (
        <div className="contact-card">
            <img src={avatar} alt="avatar" className="avatar" />
            <h3>{contact.name}</h3>
            <span>{contact.email}</span>
            <span>{contact.age}</span>
            <div className="delete-edit-btns">
                <img src={deleteBtn}
                    alt="delete-icon"
                    onClick={()=>dispatch(deleteContact(contact._id))}
                />
                
                   <Link to='/editContact'>
                   <img src={editBtn}
                        alt="edit-icon"
                        onClick={()=>{dispatch(toggleTrue());dispatch(getContact(contact._id))}}
                    />
                </Link>
                
            </div>
        </div>
    )
}

export default ContactCard