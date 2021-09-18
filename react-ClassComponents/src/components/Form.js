import React from "react";

export default class Form extends React.Component{

    state = {
        title : '',
        comment : '',
        library : 'React',
        isAwesome : true,
    };

    handleChange = (e) =>{
        if(e.target.type === 'text'){
            this.setState({
                title: e.target.value,
            })
        } else if(e.target.type === 'textarea'){
            this.setState({
                comment: e.target.value,
            })
        } else if(e.target.type === 'select-one'){
            this.setState({
                library: e.target.value,
            })
            console.log(e.target.type)
        } else if(e.target.type === 'checkbox'){
            this.setState({
                isAwesome : e.target.checked,
            })
        }
    }
    handleSubmit = (e) =>{
        const {title, comment, library, isAwesome} = this.state;
        e.preventDefault()
        console.log(title,  comment, library, isAwesome)
    }
    render(){
        const {title, comment, library, isAwesome} = this.state;
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={title} onChange={this.handleChange}  placeholder='Enter text'/>
                    <br/>
                    <textarea name="text" value={comment} onChange={this.handleChange} placeholder='Comment Box'/>
                    <br/>
                    <select value={library} onChange={this.handleChange}>
                        <option value='React'>React</option>
                        <option value='Angular'>Angular</option>
                    </select>
                    <br/>
                    <input type='checkbox' checked={isAwesome} onChange={this.handleChange}/>
                    <br/>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }
}