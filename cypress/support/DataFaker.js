import { faker } from "@faker-js/faker";

export default class DataFaker {
  static generateFakerFirstName() {
    return faker.person.firstName();
  }

  static generateFakerLastName() {
    return faker.person.lastName();
  }

  static generateFakerAddress() {
    return faker.location.streetAddress();
  }

  static generateFakerCity() {
    return faker.location.city();
  }

  static generateFakerState() {
    return faker.location.state();
  }

  static generateFakerZipCode() {
    return faker.location.zipCode();
  }

  static generateFakerPhone() {
    return faker.phone.number();
  }

  static generateFakerSSN() {
    return faker.number.int(1000000, 2000000);
  }

  static generateFakerUsername() {
    return faker.internet.userName();
  }

  static generateFakerPassword() {
    return faker.internet.password();
  }

  static generateFakerNumber() {
    return faker.number.int(10000, 99999);
  }

  static generateFakerUser() {
    const password = this.generateFakerPassword();

    return {
      firstName: this.generateFakerFirstName(),
      lastName: this.generateFakerLastName(),
      address: this.generateFakerAddress(),
      city: this.generateFakerCity(),
      state: this.generateFakerState(),
      zipCode: this.generateFakerZipCode(),
      phone: this.generateFakerPhone(),
      ssn: this.generateFakerSSN(),
      username: this.generateFakerNumber() + this.generateFakerUsername() + "*",
      password: password,
      confirmPassword: password,
    };
  }
}
