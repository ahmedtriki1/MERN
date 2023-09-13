
const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

// MIDDLEWARE ==============
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );
//============================

const createProduct = () => {
    const newFake = {
        name: faker.commerce.productName(),
        price: "$" + faker.commerce.price(),
        department: faker.commerce.department()
    };
    return newFake;
};
    
const newFakeProduct = createProduct();
console.log(newFakeProduct);

const createUser=()=>{
    const user={
        password:faker.internet.password(),
        email: faker.internet.email(),
        phoneNumber:faker.phone.number(),
        lastName:faker.person.lastName(),
        firstname: faker.person.firstName(),
        id:faker.string.uuid()
    };
    return user;
}
const newFakeUser = createUser();
console.log(newFakeUser)

const createCompany=()=>{
    const company={
        id:faker.string.uuid(),
        name:faker.company.name(),
    address :
        {street:faker.location.street(),
                city:faker.location.city(),
                state:faker.location.state(),
                zipCode:faker.location.zipCode(),
                country:faker.location.country()}
    };
    return company
}
//create user
app.get("/api/users/new", (req, res)=>{
    res.json(createUser())
})
//create company
app.get("/api/companies/new", (req, res)=>{
    res.json(createCompany())
})
 //create user company
app.get("/api/user/company", (req, res)=>{
    res.json({user:createUser(),company:createCompany()})
})
const newFakeCompany = createCompany();
console.log(newFakeCompany)



app.listen( port, () => console.log(`Listening on port: ${port}`) );