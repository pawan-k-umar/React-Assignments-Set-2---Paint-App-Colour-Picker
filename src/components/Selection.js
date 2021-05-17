
import React,{useState} from 'react'

const Selection = (props) =>{
        // const {apply} = props;
        const [state, setState ]=useState({ background: '' })
        return(
         

        <div style={state} className='fix-box' onClick={()=>props.applyColor(setState)}>
                <h2 className='subheading'>Selection</h2>
            </div>
        )
}

export default Selection;