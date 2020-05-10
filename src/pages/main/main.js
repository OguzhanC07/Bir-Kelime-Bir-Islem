import React from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';
import {Button} from 'antd';
import screenImg from '../../assets/hg.jpg'

function main() {
  return (

     <header className="App-header">
        <div className="box">
          <img src={screenImg} style={{height:"200px",width:"auto",margin:"20px"}} alt=""/>
            <p>
              <code>Bir Kelime Bir İşleme hoşgeldin</code>  
            </p>
              
            <p>Aşağıdan yapmak istediğin işlemi seç.</p>

            <div>
            <Button ghost style={{margin:"10px"}}><Link to="bir-kelime">Bir Kelime</Link></Button>
            <Button ghost style={{margin:"10px"}}><Link to="bir-islem">Bir İşlem</Link></Button>
        </div>
      </div>
    </header>
  );
}

export default main;
