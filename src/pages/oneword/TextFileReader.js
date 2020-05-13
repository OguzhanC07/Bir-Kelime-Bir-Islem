import React from "react";
//import _ from "underscore";

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


	/*
		var alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
			var wordmap=[],lettermap=[];
			var wordslist=[];
			var trials=0;
			for(var i=0;i<alphabet.length;i++){
				lettermap[i]=0;
				wordmap[i]=0;
			}
			
			for(i=0;i<word.length;i++){
				for(var k=0;k<alphabet.length;k++){
					if(word[i]===alphabet[k]){
						wordmap[k]++;
					}
				}
			}

			for(i=0;i<this.props.letter.length;i++){
				for(k=0;k<alphabet.length;k++){
					if(this.props.letter[i]===alphabet[k]){
						lettermap[k]++;
					}
				}
			}
			
			var bulundu=0;
			for(i=0;i<alphabet.length;i++){
				if(lettermap[i]===2 && wordmap[i]===2){
					bulundu=bulundu+2;
				}
				else if(lettermap[i]===1 && wordmap[i]===1){
					bulundu=bulundu+1;
				}
				else if(lettermap[i]===3 && wordmap[i]===3){
					bulundu=bulundu+3;
				}
			}

			if(bulundu===word.length){
				wordslist.push(word);
			}
			trials++;
			console.log(trials);
	
	
	
	*/
	compWords=(word)=>{	
		if(this.props.validation===true){
			if(word[0]===this.props.letter[0] || word[0]===this.props.letter[1] || word[0]===this.props.letter[2] || word[0]===this.props.letter[3] 
				|| word[0]===this.props.letter[4] || word[0]===this.props.letter[5] || word[0]===this.props.letter[6] || word[0]===this.props.letter[7]){
				var alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
				var wordmap=[],lettermap=[];
				var wordslist=[];
				var trials=0;
				for(var i=0;i<alphabet.length;i++){
					lettermap[i]=0;
					wordmap[i]=0;
				}
				
				for(i=0;i<word.length;i++){
					for(var k=0;k<alphabet.length;k++){
						if(word[i]===alphabet[k]){
							wordmap[k]++;
						}
					}
				}

				for(i=0;i<this.props.letter.length;i++){
					for(k=0;k<alphabet.length;k++){
						if(this.props.letter[i]===alphabet[k]){
							lettermap[k]++;
						}
					}
				}
				
				var bulundu=0;
				for(i=0;i<alphabet.length;i++){
					if(lettermap[i]===2 && wordmap[i]===2){
						bulundu=bulundu+2;
					}
					else if(lettermap[i]===1 && wordmap[i]===1){
						bulundu=bulundu+1;
					}
					else if(lettermap[i]===3 && wordmap[i]===3){
						bulundu=bulundu+3;
					}
				}

				if(bulundu===word.length && word.length>3){
					wordslist.push(word);
					this.setState({
						statewords:wordslist
					})
				}
				trials++;
				console.log(trials);
			}
		}
	}
	render() {
		return (
			<div>
				{
					this.state.text.split(',').map((item,key)=>{
						if(key<100000){
							this.compWords(item);
						}
					})
				}
			</div>
		);
	}
}

export default TextFileReader;