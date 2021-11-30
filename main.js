const html_to_pdf = require("html-pdf-node");
const Handlebars = require("handlebars");
const fs = require("fs");

(async () => {
  const compiledTemplate = await fs.readFileSync("templates/pdf.hbs", {
    encoding: "utf8",
  });
  const cssCode = await fs.readFileSync("css/main.css", {
    encoding: "utf8",
  });
  const template = Handlebars.compile(compiledTemplate);
  const options = {
    format: "A4",
  };
  const file = {
    content: template({
      cssCode,
      firstName: "Rafael",
      lastName: "Sene",
      list: ["AAAA", "BBB"],
    }),
  };

  const pdfBuffer = await html_to_pdf.generatePdf(file, options);

  if (pdfBuffer) {
    fs.writeFileSync("document.pdf", pdfBuffer);
  }
})();
