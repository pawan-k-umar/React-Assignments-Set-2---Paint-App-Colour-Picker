
import React,{useState} from 'react'

const Selection = (props) =>{

        const [state, setState ]=useState({ background: "red" })
        
        return(
            
        <div style={{background : state}} className='fix-box' onClick={()=>setState(props.applyColor())}>
                <h2 className='subheading'>Selection</h2>
            </div>
        )
}

export default Selection;