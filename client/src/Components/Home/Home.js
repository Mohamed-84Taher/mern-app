import React from 'react'
import {useDispatch} from 'react-redux'
import './Home.css'
import {Link} from 'react-router-dom'
import { getContacts, toggleFalse } from '../../redux/actions/contactActions'




const Home = () => {

const dispatch=useDispatch()
    return (
        <div>
            {/* contact list button */}
           
                <Link to='/'>
                <button className="app-btn"
                onClick={()=>dispatch(getContacts())}
                >Contact List</button>
                </Link>
           

            {/* add contact button */}
           
               <Link to='/addContact'>
                <button className="app-btn" onClick={()=>dispatch(toggleFalse())} >Add Contact</button>
                </Link>
               
           
        </div >
    )
}

export default Home
