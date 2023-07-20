'use strict';

/**
 * prompt router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::prompt.prompt');
