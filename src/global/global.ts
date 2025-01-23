import { faker } from "@faker-js/faker";

export function generateDynamicData() {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const gender = faker.person.gender();
    const jobTitle = faker.person.jobTitle();

    return {
        firstName,
        lastName,
        gender,
        jobTitle,
    };
}
