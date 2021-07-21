import react from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Stays = () => {
    const sessionUser = useSelector(state => state.session.user);
    

    return (

        <div> Stays/:id</div>
    )
}

export default Stays; 