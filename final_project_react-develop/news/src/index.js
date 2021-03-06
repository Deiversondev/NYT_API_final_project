import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
// Olá Caros Alunos.
// Gostaria de  manter nossa equipe atualizada, com as notícias mais importantes em ciências e tecnologia, saúde, política e mundo. Para isso precisamos de sua ajuda de forma que você crie uma página na web que contenha estas informações. Nossa sugestão é que você consulte o The New York Times, http://developer.nytimes.com/, e obtenha suas informações a partir de um fetch na top_stories api. Sua página deve conter os seguintes requisitos:
// 1. Gostaríamos que sua página possuísse 4 setores de notícias: Ciência & Tecnologia, Saúde, Política e Mundo. Conforme os setores do The New York Times science, technology, health, politics e world.
// 2. Ao navegarmos por setor, não devemos ver as notícias de outros setores.
// 3. As notícias devem possuir um highlight que contém o título da notícia (com destaque), quando foi criada e a autora. Respectivamente title, published_date, e byline.
// O objetivo deste exercício é nos permitir avaliar seu grau de conhecimento e profundidade técnica no desenvolvimento front-end. Para isso este exercício conta com um problema e diversos requisitos.
//  
// Os requisitos obrigatórios são:
// * A url que queremos que você exponha é http://localhost:3000/nyttop.
// Além disso, queremos avaliar sua capacidade técnica e para isso queremos ver seu entendimento de:
// * Clareza do código.
// * Boas práticas.