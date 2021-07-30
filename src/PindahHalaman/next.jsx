import React from 'react'
import {useHistory} from 'react-router-dom'

function next(){
    const history = useHistory();
    return(
        <div>
            <p onClick={() => history.push('/back')}>next</p>
        </div>
    )
}

export default next;