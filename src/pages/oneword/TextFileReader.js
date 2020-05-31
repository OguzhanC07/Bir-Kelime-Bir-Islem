import React from "react";
import WordFinder from "./WordFinder";
//import _ from "underscore";
let wordslist=[];
class TextFileReader extends React.Component {	
	state={
		text:"",
		statewords:[0]
    }

	componentDidMount() {
		this.readTextFile(this.props.txt);
	}

	readTextFile = file => {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", file, false);
		rawFile.onreadystatechange = () => {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status === 0) {
					var allText = rawFile.responseText;
					this.setState({
						text: allText
					});
				}
			}
		};
		rawFile.send(null);
	};


	render() {
		return (
			<div>
				{
					this.state.text.split(',').map((item,key)=>{
						if(this.props.validation===true){
							if(item[0]===this.props.letter[0] || item[0]===this.props.letter[1] || item[0]===this.props.letter[2] || item[0]===this.props.letter[3] 
								|| item[0]===this.props.letter[4] || item[0]===this.props.letter[5] || item[0]===this.props.letter[6] || item[0]===this.props.letter[7]){
									wordslist.push(item);
								}
						}
					})	

				}
				
				<WordFinder
					words={wordslist}
				/>
			</div>
		);
	}
}

export default TextFileReader;