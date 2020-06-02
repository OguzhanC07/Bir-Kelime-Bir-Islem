import React, { Component } from 'react'
import {Button,Table,Row,Col} from 'antd'
let alphabet=["a","b","c","ç","d","e","f","g","ğ","h","ı","i","j","k","l","m","n","o","ö","p","r","s","ş","t","u","ü","v","y","z"];
let wordmap=[],lettermap=[],dorthafler=[],besharfler=[],anothers=[];
for(var i=0;i<alphabet.length;i++){
	lettermap[i]=0;
	wordmap[i]=0;
}
let columns=[],columns2=[],columns3=[];



export default class WordFinder extends Component {
	state={
		dortstate:[],
		besstate:[],
		digerstate:[]
	}
	tableView=()=>{
		columns = [
			{
			  title: '4 Harfli Kelimeler',
			  dataIndex: 'name',
			  width: 150,
			},
		  ];

		columns2 = [
			{
			  title: '5 Harfli Kelimeler',
			  dataIndex: 'name',
			  width: 150,
			},
		  ];
		columns3 = [
			{
			  title: '6 ve daha fazla Harfli Kelimeler',
			  dataIndex: 'name',
			  width: 150,
			},
		  ];
		  const data = [];
		  for (let i = 0; i < dorthafler.length; i++) {
			data.push({
			  key: i,
			  name: dorthafler[i]
			});	
		  }
		  const data2 = [];
		  for (let i = 0; i < besharfler.length; i++) {
			data2.push({
			  key: i,
			  name: besharfler[i]
			});	
		  }
		  const data3 = [];
		  for (let i = 0; i < anothers.length; i++) {
			data3.push({
			  key: i,
			  name: anothers[i]
			});	
		  }

		 
		return  <Row style={{padding:"30px"}} gutter={[16, 16]}>
					<Col span={8}><Table columns={columns} dataSource={data} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} /></Col>
      				<Col span={8}><Table columns={columns2} dataSource={data2} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} /></Col>
					<Col span={8}><Table columns={columns3} dataSource={data3} pagination={{ pageSize: 50 }} scroll={{ y: 240 }} /></Col>
		  		</Row> 
	   
	}
	
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
		
		let bulundu,word;
		for(l=0;l<this.props.words.length;l++){
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
			
			if(bulundu>=word.length-1){
				if(word.length===4){
					dorthafler.push(word);
				}
				if(word.length===5){
					besharfler.push(word);
				}
				if(word.length>5){
					anothers.push(word)
				}
			}
			
		}
		console.log(dorthafler,besharfler,anothers);
		this.setState({
			dortstate:dorthafler,
			besstate:besharfler,
			digerstate:anothers
		})
	}


    render() {
        return (
            <div>
				 <Button disabled={this.props.validation  ? "" : "{true}"} onClick={this.bestMatch.bind(this)}>Sonuçları Bul</Button>
				 <div>
						{ 
							this.props.validation ? this.tableView() : null 
						}
				 </div>
			</div>
        )
    }
}
