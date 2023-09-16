'use strict';

/**
 * app-loger service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::app-loger.app-loger');
