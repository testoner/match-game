import './header.scss';

const head = document.querySelector('body');
export default class Header {
  generateHeader = (): void => {
    if (!head) throw Error('404');
    head.innerHTML = `
    <header class="header">
      <h1>Match-match game</h1>
      <nav class="nav__wrapper">
       <ul class="nav">
         <li><a id="about">About</a></li>
         <li><a id="gameStart">New game</a></li>
       </ul>
      </nav>
    </header>
    <main></main>
    `;
  };
}
