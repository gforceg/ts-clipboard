// greg hedin

export class Clipboard {
  static _data: string = '';
  // MSIE boolean
  static POS = !!window.clipboardData;

  static init() {
    window.addEventListener('copy', function (e: ClipboardEvent) {
      e.clipboardData.setData('text/plain', Clipboard._data);
      e.preventDefault()
    });
  }

  static copy = (data: string): void => {
    Clipboard._data = data;    
    if (!POS) {
      document.execCommand('copy');
    } 
    //  POS browsers
    else if (!!window.clipboardData) {
      window.clipboardData.setData(Clipboard._data);
    }
}

Clipboard.init();