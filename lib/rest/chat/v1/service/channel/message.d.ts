/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');

/**
 * @description Initialize the MessageList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this message belongs to.
 * @param channelSid - The channel_sid
 */
declare function MessageList(version: V1, serviceSid: string, channelSid: string): MessageListInstance;

interface MessageListInstance {
  /* jshint ignore:start */
  /**
   * create a MessageInstance
   *
   * @function create
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.body - The body
   * @param {string} [opts.from] - The from
   * @param {string} [opts.attributes] - The attributes
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed MessageInstance
   */
  /* jshint ignore:end */
  MessageListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.body)) {
      throw new Error('Required parameter "opts.body" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'Body': _.get(opts, 'body'),
      'From': _.get(opts, 'from'),
      'Attributes': _.get(opts, 'attributes')
    });

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MessageInstance(
        this._version,
        payload,
        this._solution.serviceSid,
        this._solution.channelSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Streams MessageInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {message.order_type} [opts.order] - The order
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         each() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         each() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   *         callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  MessageListInstance.each = function each(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    if (opts.callback) {
      callback = opts.callback;
    }
    if (_.isUndefined(callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var currentResource = 0;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done || (!_.isUndefined(opts.limit) && currentResource >= opts.limit)) {
            done = true;
            return false;
          }

          currentResource++;
          callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, _.merge(opts, limits)));
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single target page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MessageListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new MessagePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * @description Lists MessageInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {message.order_type} [opts.order] - The order
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MessageListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource, done) {
      allResources.push(resource);

      if (!_.isUndefined(opts.limit) && allResources.length === opts.limit) {
        done();
      }
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };
  /* jshint ignore:start */
  /**
   * Retrieve a single page of MessageInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {message.order_type} [opts.order] - The order
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MessageListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Order': _.get(opts, 'order'),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MessagePage(this._version, payload, this._solution));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };
}

/**
 * Options to pass to update
 *
 * @property body - The new message body string.
 * @property attributes - The new attributes metadata field you can use to store any data you wish.
 */
export interface UpdateOptions {
  attributes?: string;
  body?: string;
}

/**
 * Options to pass to update
 *
 * @property body - The new message body string.
 * @property attributes - The new attributes metadata field you can use to store any data you wish.
 */
export interface UpdateOptions {
  attributes?: string;
  body?: string;
}


declare class MessagePage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MessagePage
   * @augments Page
   * @description Initialize the MessagePage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: object, solution: object);

  /**
   * Build an instance of MessageInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessagePage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessageInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MessageInstance
   * @description Initialize the MessageContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this message.
   * @property attributes - An optional string metadata field you can use to store any data you wish.
   * @property serviceSid - The unique id of the Service this message belongs to.
   * @property to - The unique id of the Channel this message was sent to.
   * @property channelSid - The channel_sid
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property wasEdited - true if the message has been updated since it was created.
   * @property from - The identity of the message's author.
   * @property body - The contents of the message.
   * @property index - The index of the message within the Channel
   * @property url - An absolute URL for this message.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this message belongs to.
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: MessageContext;
  /**
   * fetch a MessageInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MessageInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MessageInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageInstance
   * @instance
   */
  toJSON();
  /**
   * update a MessageInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class MessageContext {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MessageContext
   * @description Initialize the MessageContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, serviceSid: sid, channelSid: sid, sid: sid);

  /**
   * fetch a MessageInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MessageInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a MessageInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MessageContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { MessageContext, MessageInstance, MessageList, MessageListInstance, MessagePage }
