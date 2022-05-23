"use strict";

/**
 * page service.
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService("api::page.page", ({ strapi }) => ({
    async update(entityId, params) {
        strapi.log.info('UPDATE >>>>>>>>>>>>>', entityId, params);
        
        throw new Error(params)
        const result = super.update(entityId, params);

        return result;
    }
}));
