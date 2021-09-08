import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { search } from '../Actions/Actions'

function Search() {

    const dispatch = useDispatch()
    const [sx, setSx] = useState('')
const HandlChange=(e)=>{
    setSx(e.target.value)
    dispatch(search(sx))
}

   return (
        <div>
            {/* <input type="text" value={sx}onChange={HandlChange}/> */}

      <TextField id="standard-basic" label="Find Todo" 
      value={sx}
       onChange={HandlChange}/>
        </div>
    )
}

export default Search
