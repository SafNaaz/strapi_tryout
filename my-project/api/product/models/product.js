'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
    lifecycles: {
    async afterFind(results, params, populates){
        console.log('After fetch..')
        console.log(results)
    }
}
};
