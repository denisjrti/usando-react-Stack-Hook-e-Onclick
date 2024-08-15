'use client';
import { useState } from 'react';
import estilos from './page.module.css'

export default function Home() {

  const [estaAberto, setEstaAberto] = useState(true)
  const [texto, setTexto] = useState('Abrir');

  const mudarTextoBotao = () => {
    if(estaAberto) {
      setEstaAberto(false);
      setTexto('Fechar');
    } else {
      setEstaAberto(true);
      setTexto('Abrir');
    }
  };

  return (
    <main className={estilos.main}>
      <div>
        <button onClick={mudarTextoBotao}>{texto}</button>
      </div>
    </main>
  );
}

