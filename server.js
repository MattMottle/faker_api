const { faker } = require('@faker-js/faker');
const  express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.database.mongodbObjectId(),
        name: faker.company.name(),
        address: [faker.location.street(), faker.location.city(), faker.location.state(),faker.location.zipCode(), faker.location.country()]
    };
    return newFake;
};

const newFakeUser = createUser();
const newFakeCompany= createCompany();

app.get("/api/users/new", (req, res) => {
    res.json({newFakeUser});
});

app.get("/api/companies/new", (req, res) => {
    res.json({newFakeCompany});
});

app.get("/api/user/company", (req, res) => {
    res.json({newFakeUser, newFakeCompany});
});

app.listen( port, () => console.log(`Listening on port: ${port}`));