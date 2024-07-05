const jsdom = require("jsdom");
const { JSDOM } = jsdom;

describe("Application 3DVP", () => {
  let button;
  let message;

  beforeAll(() => {
    const dom = new JSDOM(
      `
                    <!DOCTYPE html>
                    <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Application 3DVP</title>
              <link rel="stylesheet" href="styles.css">
          </head>
          <body>
              <div class="container">
                  <h1>Bienvenue sur mon application 3DVP!</h1>
                  <button id="actionButton">Cliquez-moi!</button>
                  <p id="message"></p>
              </div>
              <script src="script.js"></script>
          </body>
          </html>

           
        `,
      { runScripts: "dangerously", resources: "usable" }
    );

    global.window = dom.window;
    global.document = dom.window.document;
    global.HTMLElement = dom.window.HTMLElement;
    require("../src/script.js");
    button = document.getElementById("actionButton");
    message = document.getElementById("message");
  });

  it("devrait mettre à jour le message lorsque le bouton est cliqué", () => {
    button.click();
    expect(message.textContent).toBe("Vous avez cliqué sur le bouton!");
  });
});
