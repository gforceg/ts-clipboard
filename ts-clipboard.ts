// greg hedin

export class Clipboard {
  static _data: string = null;
  // MSIE boolean
  static POS = !!window['clipboardData'];
  
  static init() {
    window.addEventListener('copy', function (e: ClipboardEvent) {
      if (Clipboard._data) {
        e.clipboardData.setData('text/plain', Clipboard._data);
        e.preventDefault() // this disables 'ctrl + c'
        Clipboard._data = null;
      }
    });
  }

  static copy = (data: string): void => {
    Clipboard._data = data;    
    if (!Clipboard.POS) {
      document.execCommand('copy')
    } 
    //  POS browsers
    else if (!!window['clipboardData']) {
      window['clipboardData'].setData('Text', Clipboard._data);
      Clipboard._data = null;
    }
  }
}

Clipboard.init();