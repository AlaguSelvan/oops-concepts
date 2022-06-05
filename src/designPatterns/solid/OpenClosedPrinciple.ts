interface Question {
	type: string;
	description: string;
	options?: string[];
}

function printQuiz(questions: Question[]) {
	questions.forEach((question: Question) => {
		console.log(question.description);
		switch(question.type)	{
			case 'boolean':
				console.log("1. true");
				console.log("2. false");
				break;
			case 'multipleChoice':
				question.options?.forEach((option: string, index: number) => {
					console.log(index + 1 + ". " + option);
				});
				break;
			case 'text':
				console.log("Answer _____");
				break;
			case 'range':
				console.log("Minimum_____");
				console.log("Maximum_____");
				break;
		}
	})
}


const questions = [{
	type: 'boolean',
	description: 'Is TypeScript awesome?',
	options: ['true', 'false']
}, {
	type: 'multipleChoice',
	description: 'What is the best programming language?',
	options: ['JavaScript', 'TypeScript', 'C#', 'Java']
}, {
	type: 'text',
	description: 'What is your name?'
}, {
	type: 'range',
	description: 'What is your age?'
}];

printQuiz(questions);


// We are using Open closed principle here, Changes done are inside the class and not outside the class. We will be open to changes and closed to modifying entirely.
class boleanQuestion {
	description: string;
	options: string[] | undefined;
	constructor(description: string, options?: string[]) {
		this.description = description;
		this.options = options
	}
	printQuestionChoices() {
		console.log("1. true")
		console.log("2. false")
	}
}

class multipleChoiceQuestion {
	description: string;
	options: string[];
	constructor(description: string, options: string[]) {
		this.description = description;
		this.options = options;
	}
	printQuestionChoices() {
		this.options.forEach((option: string, index: number) => {
			console.log(index + 1 + ". " + option);
		});
	}
}

class textQuestion {
	description: string;
	constructor(description: string) {
		this.description = description;
	}
	printQuestionChoices() {
		console.log("1. true")
		console.log("2. false")
	}
}

class rangeQuestion {
	description: string;
	constructor(description: string) {
		this.description = description;
	}
	printQuestionChoices() {
		console.log("Minimum ___")
		console.log("Maximum ____")
	}
}

const questionsv1 = [
	new boleanQuestion("Is TypeScript awesome?", ['true', 'false']),
	new multipleChoiceQuestion("What is the best programming language?", ['JavaScript', 'TypeScript', 'C#', 'Java']),
	new textQuestion("What is your name?"),
	new rangeQuestion("What is your age?")
]

interface StartQuestions {
	description: string;
	options?: string[];
	printQuestionChoices(): void;
}




function printQuizV1(questions: StartQuestions[]) {
	questions.forEach((question) => {
		question.printQuestionChoices()
	})
}

