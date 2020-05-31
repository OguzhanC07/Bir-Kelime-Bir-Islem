import React, { Component } from 'react'
/*      let alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
    	compWords=(word)=>{	
		if(this.props.validation===true){
			if(word[0]===this.props.letter[0] || word[0]===this.props.letter[1] || word[0]===this.props.letter[2] || word[0]===this.props.letter[3] 
				|| word[0]===this.props.letter[4] || word[0]===this.props.letter[5] || word[0]===this.props.letter[6] || word[0]===this.props.letter[7]){
					var wordmap=[],lettermap=[];
				
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
				console.log(wordmap);

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
					else if(alphabet[i]===1 && wordmap[i]===1){//değişecek
						bulundu=bulundu+1;
					}
					else if(lettermap[i]===3 && wordmap[i]===3){
						bulundu=bulundu+3;
					}
				}

				if(bulundu===word.length && word.length>3){
					wordslist.push(word);
				}
			}
		}
	}


*/
export default class WordFinder extends Component {
    render() {
        return (
            <div>
                <p>{this.props.words}</p>
            </div>
        )
    }
}
