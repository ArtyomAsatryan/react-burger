describe('service is available', function() {
   it('should be available on localhost:3000', function() {
     cy.visit('');
   });
 }); 

 describe('app works correctly with routes', () => {
  beforeEach(function () {
    cy.visit('/');
  });

  it('should open constructor page by default', function () {
    cy.contains('Соберите бургер');
  });

  it('should open feed page after feed button click', function () {
    cy.get('p').contains('Лента заказов').click();
    cy.contains('Готовы');
  });

  it('should open personal page after personal page click', () => {
    cy.get('a').contains("Личный кабинет").click();
    cy.contains("Вход")
  })
});

describe('constructor drag-and-drop works', () => {
  it('should handle drop from ingredients list to constructor and deletion of ingredient', () => {
    const dataTransfer = new DataTransfer();
    cy.visit('/');
    cy.get("div").contains("Соус Spicy-X").trigger('dragstart', {dataTransfer});
    cy.get('section[class^="burger-constructor_total__Ppsew"]').as('dropTarget');
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get('@dropTarget').should('contain', 'Соус Spicy-X');
    cy.get('span[class^="constructor-element__action"]').click();
    cy.get('@dropTarget').should('not.contain', 'Соус Spicy-X');
  })

  it('should handle drag and drop within constructor', () => {
    const dataTransfer = new DataTransfer();
    cy.visit('/');
    cy.get('section[class^="burger-constructor_total"]').as('dropTarget');
    cy.get("div").contains("Соус Spicy-X").trigger('dragstart', {dataTransfer});
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get("div").contains("Мясо бессмертных моллюсков Protostomia").trigger('dragstart', {dataTransfer});
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
    cy.get("div").contains("Биокотлета из марсианской Магнолии").trigger('dragstart', {dataTransfer});
    cy.get('@dropTarget').trigger('drop', {dataTransfer});
  })
})

describe('opening and closing ingredient details popup', () => {
  it('should handle opening and closing ingredient details popup', () => {
    cy.visit('/');
    cy.get('div').contains('Говяжий метеорит (отбивная)').click();
    cy.get("div[class^='modal_modal']").as("modalPopup");
    cy.get("@modalPopup").should('exist');
    cy.get("@modalPopup")
      .should('contain', "Говяжий метеорит (отбивная)")
      .and('contain', "Калории,ккал")
      .and('contain', "Белки, г");
  })
})