import { Log } from "../presentation/log";
import { ActionLog } from "./action-log";
import { ErrorLog } from "./error-log";
import { ScreenLog } from "./screen-log";

export class LogStrategy implements Log {
  private errorLog: ErrorLog;
  private actionLog: ActionLog;
  private screenLog: ScreenLog;

  constructor(errorLog: ErrorLog, actionLog: ActionLog, screenLog: ScreenLog) {
    this.errorLog = errorLog;
    this.actionLog = actionLog;
    this.screenLog = screenLog;
  }

  event(type: Log.Type, data: Log.Data): void {
    switch (type) {
      case "action":
        this.actionLog.event(type, data);
        break;
      case "screen":
        this.screenLog.event(type, data);
        break;
      case "error":
        this.errorLog.event(type, data);
        break;
    }
  }
}
