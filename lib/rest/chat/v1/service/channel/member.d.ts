/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V1 = require('../../../V1');
import serialize = require('../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../interfaces';
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the MemberList
 *
 * @param version - Version of the resource
 * @param serviceSid - The unique id of the Service this member belongs to.
 * @param channelSid - The unique id of the Channel for this member.
 */
declare function MemberList(version: V1, serviceSid: string, channelSid: string): MemberListInstance;

export interface MemberResource {
  account_sid: string;
  channel_sid: string;
  date_created: Date;
  date_updated: Date;
  identity: string;
  last_consumed_message_index: number;
  last_consumption_timestamp: Date;
  role_sid: string;
  service_sid: string;
  sid: string;
  url: string;
}

interface MemberListInstance {
  /* jshint ignore:start */
  /**
   * create a MemberInstance
   *
   * @function create
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.identity -
   *          A unique string identifier for this User in this Service.
   * @param {string} [opts.roleSid] - The Role assigned to this member.
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed MemberInstance
   */
  /* jshint ignore:end */
  MemberListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.identity)) {
      throw new Error('Required parameter "opts.identity" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({'Identity': _.get(opts, 'identity'), 'RoleSid': _.get(opts, 'roleSid')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MemberInstance(
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
   * Streams MemberInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string|list} [opts.identity] -
   *          A unique string identifier for this User in this Service.
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
  MemberListInstance.each = function each(opts, callback) {
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
   * Retrieve a single target page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberList
   * @instance
   *
   * @param {string} [targetUrl] - API-generated URL for the requested results page
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MemberListInstance.getPage = function getPage(targetUrl, callback) {
    var deferred = Q.defer();

    var promise = this._version._domain.twilio.request({method: 'GET', uri: targetUrl});

    promise = promise.then(function(payload) {
      deferred.resolve(new MemberPage(this._version, payload, this._solution));
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
   * @description Lists MemberInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string|list} [opts.identity] -
   *          A unique string identifier for this User in this Service.
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
  MemberListInstance.list = function list(opts, callback) {
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
   * Retrieve a single page of MemberInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {string|list} [opts.identity] -
   *          A unique string identifier for this User in this Service.
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  MemberListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Identity': serialize.map(_.get(opts, 'identity'), function(e) { return e; }),
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({uri: this._uri, method: 'GET', params: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new MemberPage(this._version, payload, this._solution));
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
 * @property roleSid - The Role assigned to this member.
 * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
 */
export interface UpdateOptions {
  lastConsumedMessageIndex?: number;
  roleSid?: string;
}

/**
 * Options to pass to update
 *
 * @property roleSid - The Role assigned to this member.
 * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
 */
export interface UpdateOptions {
  lastConsumedMessageIndex?: number;
  roleSid?: string;
}


declare class MemberPage extends Page {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MemberPage
   * @augments Page
   * @description Initialize the MemberPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Chat.V1, response: object, solution: object);

  /**
   * Build an instance of MemberInstance
   *
   * @function getInstance
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MemberInstance {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MemberInstance
   * @description Initialize the MemberContext
   *
   * @property sid - A 34 character string that uniquely identifies this resource.
   * @property accountSid - The unique id of the Account responsible for this member.
   * @property channelSid - The unique id of the Channel for this member.
   * @property serviceSid - The unique id of the Service this member belongs to.
   * @property identity - A unique string identifier for this User in this Service.
   * @property dateCreated - The date that this resource was created.
   * @property dateUpdated - The date that this resource was last updated.
   * @property roleSid - The Role assigned to this member.
   * @property lastConsumedMessageIndex - An Integer representing index of the last Message this Member has read within this Channel
   * @property lastConsumptionTimestamp - An ISO8601 based timestamp string representing the datetime of the last Message read event for this Member within this Channel
   * @property url - An absolute URL for this member.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The unique id of the Service this member belongs to.
   * @param channelSid - The unique id of the Channel for this member.
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, payload: object, serviceSid: sid, channelSid: sid, sid: sid);

  _proxy?: MemberContext;
  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MemberInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the MemberInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberInstance
   * @instance
   */
  toJSON();
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}


declare class MemberContext {
  /**
   * @constructor Twilio.Chat.V1.ServiceContext.ChannelContext.MemberContext
   * @description Initialize the MemberContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param channelSid - The channel_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Chat.V1, serviceSid: sid, channelSid: sid_like, sid: sid);

  /**
   * fetch a MemberInstance
   *
   * @function fetch
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a MemberInstance
   *
   * @function remove
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * update a MemberInstance
   *
   * @function update
   * @memberof Twilio.Chat.V1.ServiceContext.ChannelContext.MemberContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  update(opts?: object, callback?: function);
}

export { MemberContext, MemberInstance, MemberList, MemberListInstance, MemberPage, MemberResource }
