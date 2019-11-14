import React, { useState } from 'react';

function newUser (props) {
        
        
    return(
        <div>
            {props.users.map(user => (
                <div className='user' key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default newUser