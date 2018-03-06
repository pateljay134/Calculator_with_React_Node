import React, { Component } from 'react';
// import ReactDom from 'react-dom'
import AllButton from './AllButton';
import Display from './Display';
import axios from 'axios';

class Calculator extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			value: '0',
			hasDot: '0'
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleClick(e){
		const received_value = e.target.value;
		
		switch(received_value){
			case 'AC' : 
				this.setState({
					value : '0',
					hasDot : '0'
				})
				break;
			case '+':
			case '-':
			case '*':
			case '/':
				debugger
				var last_data;
				var existing_data = this.state.value.split("")
				last_data = existing_data[existing_data.length-1]
				if( last_data === '+' || last_data === '-' || last_data === '*' || last_data === '/'){
					this.setState({
						hasDot : '0'
					})
					break;
				}
				else{
					this.setState({
						value : this.state.value + received_value,
						hasDot : '0'
					})
					break;
				}
			default : 
				debugger
				if(this.state.hasDot === '1' ){ 
					if(received_value!== '.'){ 
						this.setState({ 
							value : this.state.value + received_value
						}) 
					}
				}
				else{
					if(received_value === '.'){
						this.setState({ 
							value : this.state.value==='0' ? '0'+ String(received_value) : this.state.value + received_value,
							hasDot : '1'
						})
					}
					else{
						this.setState({ 
							value : this.state.value==='0' ? String(received_value) : this.state.value + received_value
						})
					}
				}
				break;
		}
	}
	handleSubmit(e){
		debugger
		e.preventDefault();
		var answer_data = this.state.value;
		var val = {text: this.state.value}
		var answer;
		debugger
		var self = this;
		axios.post('http://localhost:3001/calculate', val)
		.then(res => {
			debugger
			answer_data = res.data;
			console.log(answer_data);
			debugger
			self.setState({
				value : answer_data
			})
		});
		this.state.value.indexOf('.') !== -1
		// this.state.value = self.state.value;
	}

	render(){
		//const {value} =  this.state
		return(
			<form onSubmit ={this.handleSubmit}>
				<div className="calculator">
					<pre>{JSON.stringify(this.state,null,2)}</pre>
					<Display textBoxValue = {this.state.value} />
					<div className="keypad">
						<div>
							<AllButton value="AC"   id="functionKeys" handleClick= {this.handleClick}   />
							{/* <AllButton value="+/-"  id="functionKeys" handleClick= {this.handleClick}   /> */}
							<AllButton value="%"    id="functionKeys" handleClick= {this.handleClick}   />
							<AllButton value="+"    id="functionKeys" handleClick= {this.handleClick}   />
							<AllButton value="-"    id="functionKeys" handleClick= {this.handleClick}   />
							<AllButton value="*"    id="functionKeys" handleClick= {this.handleClick}   />
							<AllButton value="/"    id="functionKeys" handleClick= {this.handleClick}   />
							<AllButton value="="    id="functionKeys" handledClick= {this.handleSubmit} />
						</div> 
						<div>
							<AllButton value="1" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="2" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="3" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="4" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="5" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="6" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="7" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="8" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="9" id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="." id="digitKeys" handleClick= {this.handleClick} />
							<AllButton value="0" id="digitKeys" handleClick= {this.handleClick} />
						</div>
					</div>
				</div>
			</form>
		)
  }
}
export default Calculator;