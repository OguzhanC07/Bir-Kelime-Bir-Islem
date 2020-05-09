import React, { Component } from 'react'
import { Button } from 'antd'
import './onenumber.css'



let firstholder = [];
let bestFar = 0;
let target = 0;

export default class Birislem extends Component {
    state = {
        random: 1,
        howmany: 0,
        targetnum: 0,
        stateholder: [],
        statesolution: '',
        isVisible: true,
        isVisibleTar: true
    }
    getRandomNumbers = (e) => {
        var rand = Math.floor(Math.random() * 9) + 1;
        if (this.state.howmany === 5) {
            rand = (Math.floor(Math.random() * 9) + 1) * 10;
            this.setState({
                isVisible: false
            });
        }
        firstholder[this.state.howmany] = rand;

        this.setState({
            stateholder: firstholder,
            howmany: this.state.howmany + 1
        });
    }

    getTargetNum = (e) => {
        target = Math.floor(Math.random() * 898) + 101;
        this.setState({
            targetnum: target,
            isVisibleTar: false
        });
    }
    getAnswer = (e) => {    //brute Force algoritması kullanılmıştır. Not : Her denemede sayılar tekrar kullanılmıştır.
        //10 saniye deneme süresi sonunda bulunamazsa en yakın sonucu getirir.
        let label='Date.now()';
        console.time(label);
        let end= Date.now()+5000;
        //10 saniye deneme süresi sonunda bulunamazsa en yakın sonucu getirir
        while(Date.now()<end)
        {

            //FARKLI DENEMELER İÇİN SAYILARI KARIŞTIRIYORUZ.
            let number = Math.floor(Math.random() * 6);
            let temp = firstholder[number];
            firstholder[number] = firstholder[0];
            firstholder[0] = temp;
            //FARKLI DENEMELER İÇİN SAYILARI KARIŞTIRIYORUZ.

            let total = firstholder[0]; //toplamı tutuyor

            let solution = firstholder[0].toString(); //burada tüm çözümler tutuluyor.

            let usingNums = Math.floor(Math.random() * 6) + 1; //çoğu işlemde hepsi kullanılmayacağı için rastgele kaç sayı kullanılacağı seçiyor.


            for (let i = 1; i < usingNums; i++) {
                let operation = Math.floor(Math.random() * 4); //Rastgele operand seçimi


                //İşlemler Kısmı
                if (operation === 0) {
                    total += firstholder[i];
                    solution += "+" + firstholder[i].toString();
                }
                if (operation === 1) {
                    total -= firstholder[i];
                    solution += "-" + firstholder[i].toString();
                }
                if (operation === 2) {
                    total *= firstholder[i];
                    solution += "*" + firstholder[i].toString();
                }
                if (operation === 3) {
                    if (total % firstholder[i] !== 0) continue;
                    total /= firstholder[i];
                    solution += " / " + firstholder[i].toString();
                }
                //İşlemler Kısmı                      
            }
            solution += "=" + total.toString(); //her denemeyi solution'a yazdırıyoruz

            if (Math.abs(target - total) < Math.abs(target - bestFar)) { //hedef sayı bulunmadığı zaman en yakın sayıyı sonuca yazdırıyor.
                bestFar = total;
                this.setState({
                    statesolution:"İşlem bulunamadı! En yakın sonuç " + solution
                })
                console.log(solution);
            }

            if (total === target) {
                this.setState({
                    statesolution: "İşlem bulundu!\n" + solution
                })
                break;
            }
        }
    }

    render() {
        return (
            <div>
                <header className="App-header">

                    {
                        <ul className="menu">
                            {
                                this.state.stateholder.map((value, index) => {
                                    return <li key={index}>{index + 1}. sayi ={value}</li>
                                })}
                        </ul>
                    }
                    {this.state.isVisibleTar ? null :
                        <p>
                            Hedef Sayı={this.state.targetnum}
                        </p>
                    }

                    <Button disabled={this.state.isVisible ? "" : "{true}"} onClick={this.getRandomNumbers.bind(this)}>Rastgele sayı getir.</Button>
                    <Button disabled={this.state.isVisibleTar ? "" : "{true}"} onClick={this.getTargetNum}  >Hedef sayıyı getir.</Button>
                    <Button disabled={this.state.isVisibleTar || this.state.isVisible ? "{true}" : ""} onClick={this.getAnswer}> Gerekli İşlemi bul!</Button>


                    {
                        <p>{this.state.statesolution}</p>
                    }


                </header>
            </div>
        )
    }
}
