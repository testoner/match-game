import BaseComponent from '../base-component';
import './timer.scss';

export default class Timer extends BaseComponent {
  timer = (): number => {
    const main = document.querySelector('body');
    main?.insertAdjacentHTML('beforeend', `
  <div class="canvas-container" >
  <canvas id="canvas"></canvas>
  </div>
`);
    let timerValue = 0;
    const canvas = <HTMLCanvasElement>document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const start = new Date().getTime();
    if (ctx) {
      ctx.font = '500 48px roboto,sans-serif';

      setTimeout(() => {
        setInterval(() => {
          timerValue += 1000;
          const date = new Date(timerValue);
          ctx.fillStyle = '#C7DFF7';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#2196F3';
          ctx.fillText(`${date.getUTCMinutes()}:${date.getUTCSeconds()}`, 120, 85);
        }, 1000);
      }, 4500);
    }
    return (start);
  };

  endCounter = (): number => (new Date().getTime());
}
