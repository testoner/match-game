import './style.scss';
import App from './app';
import Timer from './components/timer/timer';
import Header from './components/header/header';
import PageAbout from './components/page-about/about';
import GameForm from './components/register-form/form';

window.onload = () => {
  const appElement = document.querySelector('body');

  if (!appElement) throw Error('App root element not found');

  new Header().generateHeader();
  new PageAbout().generateAbout();

  const startGame = document.getElementById('gameStart');
  const aboutGame = document.getElementById('about');

  startGame?.addEventListener('click', () => {
    new GameForm().generateForm();
    const formPlayer = <HTMLFormElement>document.querySelector('.form');
    formPlayer.addEventListener('submit', (ev) => {
      ev.preventDefault();

      formPlayer.reset();
      formPlayer.remove();
      new App(appElement).start();
      new Timer().timer();
    });
  });

  aboutGame?.addEventListener('click', () => {
    new PageAbout().generateAbout();

    const gamePage = document.querySelector('.main');
    const gameCanvas = document.querySelector('.canvas-container');

    gamePage?.remove();
    gameCanvas?.remove();
  });
};
