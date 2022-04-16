import { Log } from "./log";

export class LoginView {
  private log: Log;

  constructor(log: Log) {
    this.log = log;
  }

  render() {
    this.log.event("screen", { name: "Login" });
  }
}
