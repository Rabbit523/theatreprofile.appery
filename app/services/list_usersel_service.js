/**
 * Module initializes rest service list_usersel_service
 */
define(['require'], function(require) {
    return [{
        type: 'service',
        name: 'list_usersel_service',
        deps: ['Apperyio', 'REST', list_usersel_serviceImpl]
    }];
    /**
     * @function list_usersel_serviceImpl
     */
    function list_usersel_serviceImpl(Apperyio, REST) {
        var REST = new REST();
        /**
         * REST options. Initial values of "headers", "params", "data" and "echo" store are stored in models.js.
         * @property {string} url                             - Absolute or relative URL of the resource that is being requested.
         * @property {string} method                          - HTTP method (e.g. 'GET', 'POST', etc)
         * @property {Object} headers                         - Map of strings or functions which return strings representing HTTP headers
                                                                to send to the server. If the return value of a function is null,
                                                                the header will not be sent.
         * @property {Object.<string, string|Object>} params  - Map of strings or objects which will be turned to ?key1=value1&key2=value2
                                                                after the url. If the value is not a string, it will be JSONified.
         * @property {string|Object} data                     - Data to be sent as the request message data.
         * @property {string} echo                            - If echo mode is on then service will return echo value instead of the rest response
         * @property {Object.<string, string>} aio_config     - Apperyio configuration object
         * @property {string} requestType                     - Request type
         * @property {string} responseType                    - Response type
         * @property {string} serviceName                     - Service name
         */
        this.config = {
            url: "https://api.appery.io/rest/1/code/9b5f2cff-d5b4-4e25-a98f-d75773790040/exec",
            method: "post",
            headers: Apperyio.EntityAPI("list_usersel_service.request.headers"),
            params: Apperyio.EntityAPI("list_usersel_service.request.query"),
            data: Apperyio.EntityAPI("list_usersel_service.request.body", undefined, true, true) || "",
            aio_config: {
                requestType: "data",
                responseType: "json",
                serviceName: "list_usersel_service"
            }
        };
        this.inst = REST.setDefaults(this.config);
        return this.inst.execute;
    }
});