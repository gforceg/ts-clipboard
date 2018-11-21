// greg hedin

export class Clipboard {
  private static _data: string = null;
  // MSIE boolean
  private static POS = !!window['clipboardData'];

  public static init() {
    window.addEventListener('copy', (e: ClipboardEvent) => {
      if (Clipboard._data) {
        e.clipboardData.setData('text/plain', Clipboard._data);
        e.preventDefault(); // this disables 'ctrl + c'
        Clipboard._data = null;
      }
    });
  }

  public static copy = (data: string): void => {
    Clipboard._data = data;
    if (!Clipboard.POS) {
      document.execCommand('copy');
    }
    //  POS browsers
    else if (!!window['clipboardData']) {
      window['clipboardData'].setData('Text', Clipboard._data);
      Clipboard._data = null;
    }
  }
}

Clipboard.init();