import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyInfo() {
  return (
    <div>
      <h1 className='Title'>Nahomi Garcia</h1>
      <p>Oi sou a Na, tenho 27 anos,</p>
      <p>Sou Venezuelana, morando em São Paulo.</p>
      <p>Bilingue, iniciante no mundo da programação como Developer Front-End.</p>
      <ul>Gosto de:
        <li>Ler Livros</li>
        <li>Asistir Filmes e Series</li>
        <li>Ser Confeitera</li>
      </ul>
    </div>
  );
}
ReactDOM.render(<MyInfo />, document.getElementById("root"));
