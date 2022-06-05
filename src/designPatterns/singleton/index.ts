import User from "./User";

function printAnswer() {
	const user1 = new User("John");
	const user2 = new User("doe");
	user1.getName();
	user2.getName();
	console.log("done")
}


printAnswer();