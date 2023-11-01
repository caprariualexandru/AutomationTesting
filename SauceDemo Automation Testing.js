describe('Site SauceDemo.com', ()=>{
//Test nr 1
it('login with wrong', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('username_gresit');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="error"]').should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 2
it('login with standard username', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('.shopping_cart_link').should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 3
it('logout', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#logout_sidebar_link').click();
    cy.get('#login_button_container').should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 4
it('working burger button', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#react-burger-menu-btn').click();
    cy.get('#react-burger-cross-btn').click().should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 5
it('add an item to cart', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('.cart_item_label').should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 6
it('delete an item from cart', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="remove-sauce-labs-backpack"]').click();
    cy.get('.cart_list').should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 7
it('order an item', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('.shopping_cart_link').click();
    cy.get('[data-test="checkout"]').click();
    cy.get('[data-test="firstName"]').type('Caprariu')
    cy.get('[data-test="lastName"]').type('Alexandru')
    cy.get('[data-test="postalCode"]').type('499393')
    cy.get('[data-test="continue"]').click();
    cy.get('[data-test="finish"]').click();
    cy.get('.complete-text').should('exist');
})
})

describe('Site SauceDemo.com', ()=>{
//Test nr 8
it('item details', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#item_4_title_link > .inventory_item_name').click();
    cy.get('.inventory_details_desc').should('exist');
})
})


describe('Site SauceDemo.com', ()=>{
//Test nr 9
it('back to producs button', ()=>{
    cy.visit('https://saucedemo.com',); 
    cy.get('[data-test="username"]').type('standard_user');
    cy.get('[data-test="password"]').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();
    cy.get('#item_4_title_link > .inventory_item_name').click();
    cy.get('[data-test="back-to-products"]').click();
    cy.get('.app_logo').should('exist');
})
})