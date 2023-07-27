'use strict';

/**
 * mobile-force service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mobile-force.mobile-force');
