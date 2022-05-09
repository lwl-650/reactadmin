class Socket {
  url: string;
  socket: any;

  constructor(url: any, key: any) {
    this.url = url + key;
    this.socket = "";
    this.init();
  }
  init() {
    //判断当前浏览器支持不支持WebSocket
    if ("WebSocket" in window) {
      this.socket = new WebSocket(this.url);
    } else {
      // alertTip("该浏览器不支持WebSocket，请切换浏览器或升级后再试");
      return;
    }
    this.onopen();
    this.onclose();
  }
  onopen() {
    this.socket.onopen = () => {
      // alert(1)
      console.log("链接成功！");
    };
  }
  onclose() {
    this.socket.onclose = () => {
      // alert(2)
      console.log("链接断开！");
    };
  }
  onmessage(callback: any) {
    this.socket.onmessage = (option: any) => {
      let data = option.data;
      if (data == "连接成功") {
        return;
      }
      console.log(data, "data");
      typeof data == "string" ? (data = data) : (data = JSON.parse(data));
      // data = eval("(" + data + ")");

      callback(data);
    };
  }
  send(option: any) {
    // console.log(option)
    this.socket.send(option);
  }
  close() {
    this.socket.close();
  }
}
export default Socket;
