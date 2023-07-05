describe("Cookies", () => {
    beforeEach(() => {
        cy.session("login", () => {
            cy.visit("/");
            cy.setCookie("nombre", "efren");
        });
    });
    it("Obtener una cookie en especifico", () => {
        cy.getCookie("nombre").should("have.property", "value", "efren");
    });
});
