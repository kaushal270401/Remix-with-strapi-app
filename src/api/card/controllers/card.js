"use strict";

/**
 * card controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::card.card")
//  ({ strapi }) => ({
    // async findOne(slug) {
    //     const entity = await strapi.db.query("api::card.card").findOne({
    //       where: {
    //         $or: [{ slug }, { id: slug }],
    //       },
    //     });
  
    //     return entity;
    //   },
// }));
