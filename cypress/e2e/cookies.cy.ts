// Cypress.Cookies.defaults({
//     preserve: "nombre",
// });

describe("Cookies", () => {
    // before(() => {
    //     cy.clearCookies();
    // });
    // after(() => {
    //     cy.clearCookie("nombre");
    // });
    it("Obtener cookies", () => {
        cy.visit("/");
        cy.getCookies().should("be.empty");
    });
    it("Agregar una cookie", () => {
        // cy.visit("/");
        cy.setCookie("nombre", "efren");
        cy.getCookies().should("have.length", 1);
        cy.getCookie("nombre").should("have.property", "value", "efren");
    });
    it.skip("Obtener una cookie en especifico", () => {
        cy.visit("/");
        cy.getCookie("nombre").should("have.property", "value", "efren");
        cy.clearCookies();
    });
});
