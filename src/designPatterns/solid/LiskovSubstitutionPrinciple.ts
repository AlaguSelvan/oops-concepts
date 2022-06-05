class Bird {
		fly() {
				console.log('bird flying');
		}
		swim() {
			console.log('bird swimming');
		}
}

class FlyingBird {
	fly() {

	}
}

class SwimmingBird {
	swim() {

	}
}

class Penguin extends Bird {
	fly() {
		throw new Error("Penguin cannot fly")
	}
	swim() {
		console.log("Penguin is swimming")
	}
}

class Duck extends Bird {
	fly() {
		console.log("duck can Fly")
	}
	swim() {
		console.log("Duck is swimming")
	}
}

// Above is Liskov Subs Ppl
