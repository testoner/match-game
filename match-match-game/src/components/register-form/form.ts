import './form.scss';

export default class GameForm {
  generateForm = (): void => {
    const main = document.querySelector('main');
    if (!main) throw Error('404');
    main.classList.add('main-form');
    main.innerHTML = `
    <div class="form-wrapper">
    <form class="form">
      <div class="form-name">
        <label>First name</label>
        <input type="text" id="name">
      </div>
      <div class="form-sname">
        <label>Second name</label>
        <input type="text" id="sname">
      </div>
      <div class="form-email">
        <label>Email</label>
        <input type="email" id="mail">
      </div>
      <div class="form-img">
        <label>Type of images</label>
        <select id="image">
          <option>animals</option>
        </select>
      </div>
      <div class="form-level">
        <label>Level</label>
        <select id="level">
          <option>
            5*5
          </option>
        </select>
      </div>
      <div class="form-button">
        <input type="submit" value="submit">
      </div>
    </form>
  </div>
    `;
  };
}
