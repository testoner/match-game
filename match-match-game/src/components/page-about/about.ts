import './about.scss';

export default class PageAbout {
  generateAbout = (): void => {
    const main = document.querySelector('main');
    if (!main) throw Error('404');
    main.classList.add('main-about');
    main.innerHTML = `
    <div class="main-wrapper">
    <h2>How to play</h2>
    <section>
      <p>1. Click button "New game"</p>
      <img src="./htp1.png" alt="#">
    </section>
    <section>
      <p>2. Fill the form</p>
      <img src="./htp2.png" alt="#">
    </section>
    <section>
      <p>3. Start you new game! Remember card positions and match it before times up.</p>
      <img src="./htp3.png" alt="#">
    </section>
  </div>
    `;
  };
}
