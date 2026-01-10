describe("template spec", () => {
  it("passes", () => {
    cy.log("hello world");
  });
  it("Typescript", () => {
    let stringVariable: string = "9";
    let numberVariable: number = 0;
    let booleanVariable: boolean = true;
    let anyVariable: any = false;

    function addTowNumbers(a: number, b: number): number {
      return a + b;
    }

    interface User {
      username: string;
      password: string;
    }

    function returnUser(user: User): void {
      console.log("This is user name" + user.username);
      console.log("This is user name" + user.password);
    }
  });
});
