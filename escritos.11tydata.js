module.exports = {
  layout: "escrito.njk",
  permalink: "escritos/{{ page.fileSlug }}/",
  eleventyComputed: {
    // Escrito más viejo que este (para el botón "Anterior")
    anterior: (data) => {
      const items = (data.collections && data.collections.escritos) || [];
      const idx = items.findIndex((item) => item.fileSlug === data.page.fileSlug);
      return idx > -1 && items[idx + 1] ? items[idx + 1] : null;
    },
    // Escrito más nuevo que este (para el botón "Siguiente")
    siguiente: (data) => {
      const items = (data.collections && data.collections.escritos) || [];
      const idx = items.findIndex((item) => item.fileSlug === data.page.fileSlug);
      return idx > 0 ? items[idx - 1] : null;
    }
  }
};
