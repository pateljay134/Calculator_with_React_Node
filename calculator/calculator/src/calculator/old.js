
	// state = {
	// 	bufferValue: null,
	// 	value: '0',
	// 	nextValue : false,
	// 	operator: null,
	// 	clearTask: '0'
	// }

	// clearDisplay(){
	// 	const {value, nextValue, operator, bufferValue, clearTask} = this.state
	// 	if(clearTask===0){
	// 		console.log(clearTask)
	// 		this.setState({
	// 			clearTask : 1
	// 		})
	// 	}
	// 	console.log(clearTask);
	// 	if(bufferValue!==null){
	// 		this.setState({
	// 			value : '0',
	// 			nextValue: false,
	// 		})
	// 	}
	// 	else {
	// 		this.setState({
	// 			value : '0',
	// 			nextValue: false,
	// 			operator: null,
	// 			clearTask: 0,
	// 			bufferValue: null
	// 		})
	// 	}
		
	// }

	// changeSign(){
	// 	const {value} = this.state
			
	// 	this.setState({
	// 		value : value.charAt(0) === '-' ? value.substr(1) : '-' + value
	// 	})
	// }

	// findPercentage(){
	// 	const {value} = this.state
			
	// 	this.setState({
	// 		value : String(parseFloat(value) / 100)
	// 	})
	// }

	// digit(digit){
	// 	const {value, nextValue} = this.state

	// 	if(nextValue){
	// 		this.setState({
	// 			value: String(digit),
	// 			nextValue: false
	// 		})
	// 	}
	// 	else{
	// 		this.setState({
	// 			value : value==='0' ? String(digit) : value + digit
	// 		})
	// 	}
	// }

	// dot(){
	// 	const {value, nextValue} = this.state

	// 	if(nextValue){
	// 		this.setState({
	// 			value: '.',
	// 			nextValue: false
	// 		})
	// 	}
	// 	else{
	// 		if(value.indexOf('.') === -1){
	// 			this.setState({
	// 				value : value + '.',
	// 				nextValue: false
	// 			})
	// 		}
	// 	}
	// }

	// operation(noperator){
	// 	const {value, operator, bufferValue} = this.state
	// 	const nextValue = parseFloat(value)

		

	// 	const operations = {
	// 		'+' : (prevValue, nextValue) => prevValue + nextValue,
	// 		'-' : (prevValue, nextValue) => prevValue - nextValue,
	// 		'*' : (prevValue, nextValue) => prevValue * nextValue,
	// 		'/' : (prevValue, nextValue) => prevValue / nextValue,
	// 		'=' : (prevValue, nextValue) => nextValue
	// 	}

	// 	if(bufferValue == null){
	// 		this.setState({
	// 			bufferValue : nextValue
	// 		})
	// 	}
	// 	else if(operator){
	// 		const existingValue = bufferValue || 0
	// 		const answer = operations[operator](existingValue, nextValue)

	// 		this.setState({
	// 			bufferValue : answer,
	// 			value: String(answer)
	// 		})
	// 	}

	// 	//const prevValue=null
		

	// 	//const answer = operations[operator](prevValue,nextValue)

	// 	this.setState({
	// 		nextValue : true,
	// 		operator: noperator
	// 	})
	// }