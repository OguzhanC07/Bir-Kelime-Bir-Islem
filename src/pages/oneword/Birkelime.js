import React, { Component } from 'react';
import {Button,Card} from 'antd';
import TextFileReader from './TextFileReader';


var myTxt=require("./deneme.txt");
var letters=[];
export default class Birkelime extends Component {
    state={
        howmany:0,
        stateletters:[],
        isVisible:true,
        sendbutton:false,
        stringletters:""
    }
    
    
    getRandomLetters=(e)=>{
        var emptyString = "";
        var birlesik="";
        var sessiz = "bçcdfgğhjklmnprsştvyz";
        var sesli="aeıioöuü"
        
        emptyString=sessiz[Math.floor(Math.random()*sessiz.length)];
        letters[this.state.howmany]=emptyString;
        if(this.state.howmany>=4){
            emptyString=sesli[Math.floor(Math.random()*sesli.length)];
            letters[this.state.howmany]=emptyString;
        }
        
        this.setState({
            howmany:this.state.howmany+1,
            stateletters:letters
        })

        if(this.state.howmany===7){
            for(var i=0;i<letters.length;i++){
                birlesik+=letters[i];
            }
           
           
            this.setState({
                isVisible:false,
                sendbutton:true,
                stringletters:birlesik
            }) 
        }
    }
    render() {
        return (
            <div>
                <header className="App-header">
                    <Card title="Kullanılacak Harfler">
                       {
                           this.state.stateletters.map((value,index)=>{
                           return <Card.Grid key={index}>{index+1}. Harf = {value}</Card.Grid>
                           })
                       }    
                       {
                           this.state.stateletters.length > 7 ? <Card.Grid>Bonus Harf=?</Card.Grid> : ""
                       }   
                    </Card>
               
                    <div style={{padding:"20px"}}></div>
                    <Button  disabled={this.state.isVisible ? "" : "{true}"} onClick={this.getRandomLetters.bind(this)}>Rastgele Harf Getir.</Button>

                        <TextFileReader
                            txt={myTxt}
                            letter={this.state.stateletters}
                            stringletter={this.state.stringletters}
                            validation={this.state.sendbutton}
                        />    
                  
                  
                </header> 
                   
            </div>
           
            
        )
    }
}
