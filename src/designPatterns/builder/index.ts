class Address {
	private zip: number;
	private street: string;
	constructor(zip: number, street: string) {
		this.zip = zip;
		this.street = street;
	}
}

interface IUser {
	name: string;
	age: number | undefined;
	phone: number | undefined;
	address: Address | undefined;
}

interface IUserProps {
	age?: number | undefined;
	phone?: number | undefined;
	address?: Address | undefined;
}


class UserB implements IUser {
	public name: string;
	public age: number | undefined;
	public phone: number | undefined;
	public address: Address | undefined;
	constructor(name: string, { age, phone, address }: IUserProps = {}) {
		this.name = name;
		this.age = age;
		this.phone = phone;
		this.address = address;
	}
	setAge(age: number) {
		this.age = age;
	}
}

class UserBuilder{
	user: UserB;
	constructor(name: string) {
		this.user = new UserB(name)
	}

	public setAge(age: number) {
		this.user.age = age;
		return this.user;
	}

}


const address = new Address(123, 'Main Street');
const userB = new UserB("John", {address, age:30, phone: 1234567890});
const userBuild = new UserBuilder("John");
userBuild.setAge(50)
console.log(userBuild)