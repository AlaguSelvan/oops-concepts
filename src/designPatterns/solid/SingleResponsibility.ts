class CalorieTracker {
	caloriesConsumed: number;
	maxCalories: number;
	constructor(maxCalories: number) {
		this.maxCalories = maxCalories;
		this.caloriesConsumed = 0;
	}

	addCalories(calories: number) {
		this.caloriesConsumed += calories;
		if (this.caloriesConsumed > this.maxCalories){
			// The below line breaks single responsibility principle because it is not in the responsibility of the class to log the calorie surplus.
			// this.logCalorieSurplus()
			// To solve the above line we create a new class to keep the responsibility of logging the calorie surplus.
			Logger.log("Calorie Exceeded");
		}
	}
	logCalorieSurplus() {
		console.log("Calorie Exceeded")
	}
}

class Logger {
	static log(message: string) {
		console.log(message);
	}
}