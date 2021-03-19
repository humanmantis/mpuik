"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    beforeCreate: async (data) => {
      if (data.list) {
        data.list.map(
          (item) =>
            (item.short =
              item.title.length > 90
                ? item.title.substr(0, 90) + "..."
                : item.title)
        );
      }
    },
    beforeUpdate: async (params, data) => {
      if (data.list) {
        data.list.map(
          (item) =>
            (item.short =
              item.title.length > 90
                ? item.title.substr(0, 90) + "..."
                : item.title)
        );
      }
    },
  },
};
