class LoggerInstance {

	static instance: any;
	private logs: string[] = [];

	public constructor() {
		if (LoggerInstance.instance !== null) {
				this.logs = [];
				LoggerInstance.instance = this;
			}
		}

		public log(message: string): void {
			this.logs.push(message);
		}

		public getLogs(): string[] {
			return this.logs;
		}
		public printLogCount(): void {
			console.log("logs present:", this.logs.length);
		}
}

const Logger = new LoggerInstance();
Object.freeze(Logger)
export default Logger;