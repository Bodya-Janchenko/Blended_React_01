type Callback = (message: string) => void;

function sendDoneStatus(callback: Callback) {
  callback("done");
}
