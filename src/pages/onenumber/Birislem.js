import React, { Component } from 'react'
import {Button} from 'antd'
import './onenumber.css'



const firstholder=[];

export default class Birislem extends Component {
   state={
       random:1,
       howmany:0,
       targetnum:0,
       stateholder:[],
       isVisible:true,
       isVisibleTar:true
   }
    getRandomNumbers=(e)=>{
        let rand=Math.floor(Math.random() * 9) + 1;
        if(this.state.howmany===5){
            rand=(Math.floor(Math.random()*9)+1)*10;
            this.setState({
                isVisible:false
            });
        }
            firstholder[this.state.howmany]=rand;
            
            this.setState({
            stateholder:firstholder,
            howmany:this.state.howmany+1
        });
    }

   getTargetNum=(e)=>{
      let rand2=Math.floor(Math.random()*898)+101;
      this.setState({
          targetnum:rand2,
          isVisibleTar:false
      });
   }

   getAnswer=(e)=>{
       
   }

    render() {
        return (
            <div>
                <header className="App-header">
                    
                    {
                        <ul className="menu">
                        { 
                          this.state.stateholder.map((value, index) => {
                          return <li key={index}>{index+1}. sayi ={value}</li>
                        })}
                      </ul>
                    }
                    {
                        <p>
                            Hedef Sayı={this.state.targetnum}
                        </p>
                    }
                    
                    <Button disabled={this.state.isVisible ? "" : "{true}"}  onClick={this.getRandomNumbers.bind(this)}>Rastgele sayı getir.</Button>
                    <Button disabled={this.state.isVisibleTar ? "" : "{true}"} onClick={this.getTargetNum}  >Hedef sayıyı getir.</Button>                                     
                    <Button onClick={this.getAnswer}> Sonucu bul!</Button>
                
                </header>
            </div>
        )
    }
}
