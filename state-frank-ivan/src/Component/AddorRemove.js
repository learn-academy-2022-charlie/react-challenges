import { render } from '@testing-library/react'
import React, {Component} from 'react'


class Change extends Component{
    constructor(props){
        super(props)
        this.state= {

        }
    }

    removeBox =()=>{
document.getElementById("remove").onclick = function(){
    document.getElementById("Box").outerHTML ="";
}
    }

    addBox=()=>{

    }


render(){
    return(

    <>

    <button onClick={removeBox} id="Remove"
    style={{ height: "25", width: "100px", border: "3px dotted #ffffff", backgroundColor: "#ba1122", display:"inline-block",borderRadius:"5px",padding:"5px"}}> 
        Erase Color Box
    </button>

    <button onClick={addBox} className="Add"
    style={{ height: "25", width: "100px", border: "3px dotted #ffffff", backgroundColor: "#34ebdb", display:"inline-block",borderRadius:"5px", margin:" 10px",padding:"5px"}}> 
        Add Color Box
    </button>
    </>
    )
}
}

export default Change