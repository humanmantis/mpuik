const slugify = require("slugify");

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.cards) {
        data.cards.map((item) => (item.slug = slugify(item.title)));
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.cards) {
        data.cards.map((item) => (item.slug = slugify(item.title)));
      }
    },
  },
};
