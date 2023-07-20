'use strict';

/**
 * prompt service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::prompt.prompt');
