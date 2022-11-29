import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
    const { id } = useParams()
    console.log(id)
    return (
        <div>
            <h1>Edit Profile</h1>
            <h3>ID: {id}</h3>
        </div>
    )
}

export default Edit