import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
let post_data = [
  { author: "Dan", title: "hello", content: "Не следует, однако забывать, что дальнейшее развитие различных форм деятельности способствует подготовки и реализации форм развития.", bool_image: true, id: 1 },
  { author: "Bob", title: "i buy cat", content: "Товарищи! постоянное информационно-пропагандистское обеспечение нашей деятельности позволяет выполнять важные задания по разработке модели развития.", bool_image: false, id: 2 },
  { author: "Mat", title: "прив", content: "Идейные соображения высшего порядка, а также укрепление и развитие структуры играет важную роль в формировании существенных финансовых и административных условий.", bool_image: false, id: 3 },
  { author: "Jack", title: "лол", content: "Товарищи! консультация с широким активом позволяет выполнять важные задания по разработке систем массового участия.", bool_image: false, id: 4 },
  { author: "Oscar", title: "норм", content: "Равным образом постоянный количественный рост и сфера нашей активности играет важную роль в формировании системы обучения кадров, соответствует насущным потребностям.", bool_image: false, id: 5 }
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App post_data={post_data} />
  </HashRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
