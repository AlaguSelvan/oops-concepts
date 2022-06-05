import Logger from "./Logger";

class User {
	private name: string;
		constructor(name: string) {
				this.name = name;
		}

		public getName(): string {
			Logger.log(`User name is ${this.name}`);
			Logger.printLogCount();
			return this.name;
		}

		public setName(name: string): void {
			this.name = name;
		}
}

export default User;