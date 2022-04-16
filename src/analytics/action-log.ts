import { Log } from "../presentation/log";
import { Analytics } from "./analytics";

export class ActionLog implements Log {
  private analytics: Analytics;

  constructor(analytics: Analytics) {
    this.analytics = analytics;
  }

  event(type: Log.Type, data: Log.Data): void {
    this.analytics.save(type, data.name);
  }
}
