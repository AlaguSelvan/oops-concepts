interface BirdV1 {
	name: string;
	makeSound(): void;
}

interface FlyingBirdV1 {
	fly(): void;
}

interface SwimmingBirdV1 {
	swim(): void;
}

class PenguinV1 implements BirdV1, SwimmingBirdV1 {
	name: string;
	constructor() {
		this.name = "Penguin";
	}
	swim() {
		console.log("Penguin is swimming")
	}
	makeSound() {
		console.log("Penguin is making a sound")
	}
}

class DuckV1 implements BirdV1, FlyingBirdV1 {
	name: string;
	constructor() {
		this.name = "Duck";
	}
	makeSound() {
		console.log("Duck is quacking")
	}
	fly() {
		console.log("Duck is flying")
	}
}