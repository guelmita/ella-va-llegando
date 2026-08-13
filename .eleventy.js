module.exports = function (eleventyConfig) {
  // Archivos que se copian tal cual, sin procesar
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");

  // Fecha legible en español: "13 de agosto de 2026"
  eleventyConfig.addFilter("fechaBonita", (dateObj) => {
    if (!dateObj) return "";
    return new Intl.DateTimeFormat("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
      timeZone: "UTC"
    }).format(dateObj);
  });

  eleventyConfig.addGlobalData("anioActual", () => new Date().getFullYear());

  // Colección de escritos, del más nuevo al más viejo
  eleventyConfig.addCollection("escritos", (collectionApi) => {
    return collectionApi.getFilteredByGlob("content/escritos/*.md").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
