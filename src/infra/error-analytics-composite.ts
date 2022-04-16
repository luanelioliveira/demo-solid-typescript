import { ErrorAnalytics } from "../analytics/error-analytics";

export class ErrorAnalyticsComposite implements ErrorAnalytics {
  private errorAnalytics: ErrorAnalytics[];

  constructor(errorAnalytics: ErrorAnalytics[]) {
    this.errorAnalytics = errorAnalytics;
  }

  saveError(data: any): void {
    this.errorAnalytics.forEach((errorAnalytic) =>
      errorAnalytic.saveError(data.error)
    );
  }
}
