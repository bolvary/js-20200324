export default class NotificationMessage {
  element;

  constructor(text, {
    duration = 2000,
    type = 'success',
  } = {}) {
    const oldElement = document.getElementById('notification');

    if (oldElement) {
      oldElement.remove();
    }

    this.text = text || '';
    this.duration = duration;
    this.type = type;

    this.render();
  }

  show() {
    document.body.append(this.element);
    setTimeout(() => this.destroy(), this.duration);
  }

  get template () {
    return `
      <div class="notification ${this.type}" style="--value:${this.duration/1000}s" id="notification">
          <div class="timer"></div>
          <div class="inner-wrapper">
          <div class="notification-header">${this.type}</div>
          <div class="notification-body">${this.text}</div>
      </div>
      </div>
      `;
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = this.template;
    this.element = element.firstElementChild;
  }

  destroy() {
    this.element.remove();
  }

}

