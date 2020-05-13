import React, { Component } from 'react';
import {Button} from 'antd';
import TextFileReader from './TextFileReader';


var myTxt=require("./deneme.txt");
var letters=[];
export default class Birkelime extends Component {
    state={
        howmany:0,
        stateletters:[],
        isVisible:true,
        sendbutton:false
    }
    
    
    getRandomLetters=(e)=>{
        var emptyString = "";
        
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
            this.setState({
                isVisible:false,
            })
        }
    }
    sendLetters=(e)=>{
        this.setState({
            sendbutton:true
        })
    }

    render() {
        return (
            <div>
              
                
              
                <header className="App-header">
                {   
                    
                        <ul className="menu">
                            {
                                    this.state.stateletters.map((value, index) => {
                                    return <li key={index}>{index + 1}. harf ={value}</li>
                                })}
                        </ul>

                     
                }


                        <TextFileReader
                            txt={myTxt}
                            letter={this.state.stateletters}
                            validation={this.state.sendbutton}
                        />    
                  
                    <Button disabled={this.state.isVisible ? "" : "{true}"} onClick={this.getRandomLetters.bind(this)}>Rastgele Harf Getir.</Button>
                    <Button disabled={this.state.isVisible ? "{true}" : ""} onClick={this.sendLetters}> Sonucu Bul</Button>
                </header> 
                   
            </div>
           
            
        )
    }
}
