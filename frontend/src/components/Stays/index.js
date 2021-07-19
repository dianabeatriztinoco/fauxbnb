import react from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'


const Stays = () => {
    const sessionUser = useSelector(state => state.session.user);

    return (

        <h1> Stays/:id</h1>
    )
}

export default Stays; 