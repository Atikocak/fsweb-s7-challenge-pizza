describe("Test For Submitting Order", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/order");
  });
  // Size Component Test
  it("Size - Radio buttons works properly", () => {
    // If no radio button is selected, an error should be shown
    cy.get('[cy-data="size"] [cy-data="error"]').should("exist");
    // Button selection works properly
    cy.get('[cy-data="size"] input[type="radio"]')
      .check()
      .then((radioButtons) => {
        radioButtons.each((index, radioButton) => {
          cy.wrap(radioButton).check();
          cy.wrap(radioButton).should("be.checked");

          radioButtons.each((otherIndex, otherRadioButton) => {
            if (index !== otherIndex) {
              cy.wrap(otherRadioButton).should("not.be.checked");
            }
          });
        });
      });
    cy.get('[cy-data="size"] [cy-data="error"]').should("not.exist");
  });
  // Dough Component Test
  it("Dough - Selection works properly", () => {
    // If no option is selected, an error should be shown
    cy.get('[cy-data="dough"] [cy-data="error"]').should("exist");

    // Dropdown selection works properly
    cy.get('[cy-data="dough"] select')
      .select("thin")
      .should("have.value", "thin");
    cy.get('[cy-data="dough"] select')
      .select("thick")
      .should("have.value", "thick");
    cy.get('[cy-data="dough"] [cy-data="error"]').should("not.exist");
  });
  // Ingredients Component Test
  it("Ingredients - Checkbox works properly", () => {
    // Checkbox selection and unselection works properly
    cy.get('[cy-data="ingredients"] input[type="checkbox"]')
      .first()
      .check()
      .should("be.checked");
    cy.get('[type="checkbox"]')
      .not(":first")
      .each(($el) => {
        cy.wrap($el).should("not.be.checked");
      });
    cy.get('[type="checkbox"]').first().uncheck().should("not.be.checked");
    // Selecting 4 checkboxes should not show any error
    cy.get('[type="checkbox"]').then(($checkboxes) => {
      for (let i = 0; i < 4; i++) {
        cy.wrap($checkboxes.eq(i)).check().should("be.checked");
      }
    });
    cy.get('[cy-data="ingredients"] [cy-data="error"]').should("not.exist");
    // Selecting 11 checkboxes should show an error
    cy.get('[type="checkbox"]').then(($checkboxes) => {
      for (let i = 4; i < 11; i++) {
        cy.wrap($checkboxes.eq(i)).check().should("be.checked");
      }
    });
    cy.get('[cy-data="ingredients"] [cy-data="error"]').should("exist");
  });
  // Customer Name and Message Components Test
  it("Customer Name and Message Fields works properly", () => {
    // If Customer Name Field is empty, an error should be shown
    cy.get('[cy-data="customer-name"] [cy-data="error"]').should("exist");
    // Customer Name Field
    cy.get('[cy-data="customer-name"] input')
      .type("John Doe")
      .should("have.value", "John Doe");
    cy.get('[cy-data="customer-name"] [cy-data="error"]').should("not.exist");
    // Message Field
    cy.get('[cy-data="order-message"] textarea')
      .type("This is a test message")
      .should("have.value", "This is a test message");
  });
  // Order Amount Component Test
  it("Order Amount - Buttons and Input works properly", () => {
    // Decrease Button
    cy.get('[cy-data="order-amount"] button').first().click();
    cy.get('[cy-data="order-amount"] input').should("have.value", "1");
    // Increase Button
    cy.get('[cy-data="order-amount"] button').last().click();
    cy.get('[cy-data="order-amount"] input').should("have.value", "2");
    // Input Field
    cy.get('[cy-data="order-amount"] input')
      .type("{selectall}5")
      .should("have.value", "5");
    // Input Field should not accept negative values or zero
    cy.get('[cy-data="order-amount"] input')
      .clear()
      .type("{selectall}-1")
      .should("have.value", "5");
    cy.get('[cy-data="order-amount"] input')
      .clear()
      .type("{selectall}0")
      .should("have.value", "5");
  });

  // Form submission should work properly
  it("Form Submission works properly", () => {
    // Size
    cy.get('[cy-data="size"] input[type="radio"]').first().check();
    // Dough
    cy.get('[cy-data="dough"] select').select("thin");
    // Ingredients - Select 4 checkboxes
    cy.get('[type="checkbox"]').then(($checkboxes) => {
      for (let i = 0; i < 4; i++) {
        cy.wrap($checkboxes.eq(i)).check();
      }
    });
    // Customer Name
    cy.get('[cy-data="customer-name"] input').type("John Doe");
    // Message
    cy.get('[cy-data="order-message"] textarea').type("This is a test message");
    // Order Amount
    cy.get('[cy-data="order-amount"] button').last().click();
    // Submit Button enabled and there should be no error
    cy.get('[cy-data="submit"] button').should("not.be.disabled");
    cy.get('[cy-data="error"]').should("not.exist");
    // Submit Button
    cy.get('[cy-data="submit"] button').click();
  });
});
