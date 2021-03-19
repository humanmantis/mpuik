const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.publications) {
        data.publications.map((p) => (p.short = p.title.substr(0, 90) + "..."));
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.publications) {
        data.publications.map((p) => (p.short = p.title.substr(0, 90) + "..."));
      }
    },
  },
};
