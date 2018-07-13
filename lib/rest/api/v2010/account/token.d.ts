/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import V2010 = require('../../V2010');
import { SerializableClass } from '../../../../interfaces';

/**
 * @description Initialize the TokenList
 *
 * @param version - Version of the resource
 * @param accountSid - The unique sid that identifies this account
 */
declare function TokenList(version: V2010, accountSid: string): TokenListInstance;

interface TokenResource {
  account_sid: string;
  date_created: Date;
  date_updated: Date;
  ice_servers: string;
  password: string;
  ttl: string;
  username: string;
}

interface TokenListInstance {
  /* jshint ignore:start */
  /**
   * create a TokenInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.TokenList
   * @instance
   *
   * @param {object} [opts] - ...
   * @param {number} [opts.ttl] - The duration in seconds the credentials are valid
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TokenInstance
   */
  /* jshint ignore:end */
  TokenListInstance.create = function create(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({'Ttl': _.get(opts, 'ttl')});

    var promise = this._version.create({uri: this._uri, method: 'POST', data: data});

    promise = promise.then(function(payload) {
      deferred.resolve(new TokenInstance(this._version, payload));
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


declare class TokenPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.TokenPage
   * @augments Page
   * @description Initialize the TokenPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of TokenInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.TokenPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class TokenInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.TokenInstance
   * @description Initialize the TokenContext
   *
   * @property accountSid - The unique sid that identifies this account
   * @property dateCreated - The date this resource was created
   * @property dateUpdated - The date this resource was last updated
   * @property iceServers - An array representing the ephemeral credentials
   * @property password - The temporary password used for authenticating
   * @property ttl - The duration in seconds the credentials are valid
   * @property username - The temporary username that uniquely identifies a Token.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The unique sid that identifies this account
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid);

  /**
   * Produce a plain JSON object version of the TokenInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.TokenInstance
   * @instance
   */
  toJSON();
}

export { TokenInstance, TokenList, TokenListInstance, TokenPage, TokenResource }
