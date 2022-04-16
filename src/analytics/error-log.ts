import { Log } from "../presentation/log";
import { ErrorAnalytics } from "./error-analytics";

export class ErrorLog implements Log {
  private errorAnalytics: ErrorAnalytics;

  constructor(errorAnalytics: ErrorAnalytics) {
    this.errorAnalytics = errorAnalytics;
  }

  event(type: Log.Type, data: Log.Data): void {
    this.errorAnalytics.save(data.error);
  }
}
