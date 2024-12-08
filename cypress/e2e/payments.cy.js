describe('PaymentsComponent Tests', () => {
    beforeEach(() => {
        cy.visit('/payments');
    });
  
    it('should display the payments table when data is available', () => {
      cy.get('.table-config').should('be.visible');
      cy.contains('Usuário').should('be.visible');
      cy.contains('Ações').should('be.visible');
      cy.contains('Elliot Andrews').should('be.visible');    
    });
  
    it.only('should open the Add Payment dialog when the add button is clicked', () => {
      cy.contains('Adicionar').should('be.visible');
      cy.get('#add-btn').click();
      cy.get('mat-dialog-container').should('be.visible');
      cy.get('mat-dialog-container').contains('Adicionar Pagamento');
    });
    
    it('should open the Edit dialog when the Edit button is clicked', () => {
      cy.get('#edit-btn').click();
      cy.get('mat-dialog-container').should('be.visible');
      cy.get('mat-dialog-container').contains('Editar Pagamento');
    });
  
    it.only('should open the Delete dialog when the Delete button is clicked', () => {
      cy.get('#delet-btn').click();
      cy.get('mat-dialog-container').should('be.visible');
      cy.get('mat-dialog-container').contains('Deletar Pagamento');
    });
  });
  