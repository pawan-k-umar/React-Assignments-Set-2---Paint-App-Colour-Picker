
import React,{useState} from 'react'

const Selection = (props) =>{

        const [state, setState ]=useState({ background: '' })
        return(
            
        <div style={state} className='fix-box' onClick={()=>{setState({background:props.applyColor})}}>
                <h2 className='subheading'>Selection</h2>
            </div>
        )
}

export default Selection;