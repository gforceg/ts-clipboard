// greg hedin

export class Clipboard {
  static _data: string = '';

  static init() {
    window.addEventListener('copy', function (e: ClipboardEvent) {
      e.clipboardData.setData('text/plain', Clipboard._data);
      e.preventDefault()
    });
  }

  static copy = (data: string): void => {
    Clipboard._data = data;
    document.execCommand('copy');
  }
}

Clipboard.init();