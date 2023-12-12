import React from "react";
export default class TodoItem extends React.Component{
    constructor(){
        super()
    }

    render(){
        let {element,index,updateItem,deleteItem,buttonStyles} = this.props
        return (
            <div className="input" key={index}>
            <input type="text" onChange={(event)=>{
              updateItem(event.target.value,index)
            }} value={element}/>
            <button style={buttonStyles} onClick={()=>{
              deleteItem(index)
            }}>D E L E T E</button>
          </div>
        )
    }
}