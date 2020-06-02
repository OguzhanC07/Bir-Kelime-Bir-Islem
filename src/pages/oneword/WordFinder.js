import React, { Component } from 'react'
import {Button} from 'antd'
let alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
let wordmap=[],lettermap=[];
for(var i=0;i<alphabet.length;i++){
	lettermap[i]=0;
	wordmap[i]=0;
}




export default class WordFinder extends Component {
	// compWords=()=>{				
	// 	var wordmap=[],lettermap=[];		
	// 	for(var i=0;i<alphabet.length;i++){
	// 		lettermap[i]=0;
	// 		wordmap[i]=0;
	// 	}				
	// 	for(i=0;i<word.length;i++){
	// 		for(var k=0;k<alphabet.length;k++){
	// 			if(word[i]===alphabet[k]){
	// 				wordmap[k]++;
	// 			}
	// 		}
	// 	}
	// 		console.log(wordmap);

	// 		for(i=0;i<this.props.letter.length;i++){
	// 			for(k=0;k<alphabet.length;k++){
	// 				if(this.props.letter[i]===alphabet[k]){
	// 					lettermap[k]++;
	// 				}
	// 			}
	// 		}

	// 		var bulundu=0;
	// 		for(i=0;i<alphabet.length;i++){
	// 			if(lettermap[i]===2 && wordmap[i]===2){
	// 				bulundu=bulundu+2;
	// 			}
	// 			else if(alphabet[i]===1 && wordmap[i]===1){//değişecek
	// 				bulundu=bulundu+1;
	// 			}
	// 			else if(lettermap[i]===3 && wordmap[i]===3){
	// 				bulundu=bulundu+3;
	// 			}
	// 		}

	// 		if(bulundu===word.length && word.length>3){
	// 			wordslist.push(word);
	// 		}
	// 	}
	bestMatch=()=>{
		var letters=this.props.stringletters;
		var i,l=0;
		for(i=0;i<alphabet.length;i++){
			lettermap[i]=0;
			wordmap[i]=0;
		}
		for(i=0;i<letters.length;i++){
			for(l=0;l<29;l++){
				if(alphabet[l]===letters[i]){
					lettermap[l]++;
				}
			}
		}
		console.log(letters);
		
		let bulundu,word;
		/*Herşey burada başlıyor.!.*/
		for(l=0;l<1/*this.props.words.length*/;l++){
			bulundu=0;
			
			word=this.props.words[l];
			for(i=0;i<alphabet.length;i++){
				wordmap[i]=0;
			}
				
				for(i=0;i<word.length;i++){
					for(var k=0;k<alphabet.length;k++){
						if(word[i]===alphabet[k]){
							wordmap[k]++;
						}
					}
				}

			for(i=0;i<alphabet.length;i++){
				if(lettermap[i]<=wordmap[i] && wordmap[i]>=1 && lettermap[i]>=1){
					bulundu+=lettermap[i];
				}
			}
			
			console.log(wordmap);
			console.log(lettermap);
			console.log(bulundu);
			console.log(word);
			
		}
	}

    render() {
        return (
            <div>
				 <Button disabled={this.props.letters === "" ? "{true}" : ""} onClick={this.bestMatch.bind(this)}>Sonuçları Bul</Button>
				 <div></div>
			</div>
        )
    }
}
