// greg hedin

export class Clipboard {
  static _data: string = '';

  constructor() {
    window.addEventListener('copy', function (e: ClipboardEvent) {
      e.clipboardData.setData('text/plain', this._data);
      e.preventDefault()
    });
  }

  static copy = (data: string): void => {
    Clipboard._data = data;
    document.execCommand('copy');
  }
}