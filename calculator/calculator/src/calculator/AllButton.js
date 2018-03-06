import React, {Component} from 'react';
import './calc.css';

class AllButton extends React.Component{
	render(){
		return(
			<input className = {this.props.id==='functionKeys' ? 'functionKeys' : 'digits'} type = {this.props.value === '=' ? "submit" : "button"}  onClick={this.props.handleClick}  value = {this.props.value} />
		)
	}
}



export default AllButton; 
