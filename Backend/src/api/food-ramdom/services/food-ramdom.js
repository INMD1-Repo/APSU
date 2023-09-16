'use strict';

/**
 * food-ramdom service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::food-ramdom.food-ramdom');
