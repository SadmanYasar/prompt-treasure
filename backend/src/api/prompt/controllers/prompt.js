'use strict';

/**
 * prompt controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::prompt.prompt');
