function fetchMessage(): Promise<string> {
  return new Promise<string>((resolve) => {
    resolve("Hello from server!");
  });
}

fetchMessage().then((message) => console.log(message));
