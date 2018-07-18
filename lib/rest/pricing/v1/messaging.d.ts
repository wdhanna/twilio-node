/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import Response = require('../../../http/response');
import V1 = require('../V1');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the MessagingList
 *
 * @param version - Version of the resource
 */
declare function MessagingList(version: V1): MessagingListInstance;

interface MessagingResource {
  links: string;
  name: string;
  url: string;
}

interface MessagingPayload extends MessagingResource, Page.TwilioResponsePayload {
}

interface MessagingSolution {
}

interface MessagingListInstance {
  countries?: object;
}


declare class MessagingPage extends Page {
  /**
   * @constructor Twilio.Pricing.V1.MessagingPage
   * @augments Page
   * @description Initialize the MessagingPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Pricing.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of MessagingInstance
   *
   * @function getInstance
   * @memberof Twilio.Pricing.V1.MessagingPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessagingInstance {
  /**
   * @constructor Twilio.Pricing.V1.MessagingInstance
   * @description Initialize the MessagingContext
   *
   * @property name - The name
   * @property url - The url
   * @property links - The links
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: Twilio.Pricing.V1, payload: object);

  /**
   * Produce a plain JSON object version of the MessagingInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Pricing.V1.MessagingInstance
   * @instance
   */
  toJSON();
}

export { MessagingInstance, MessagingList, MessagingListInstance, MessagingPage, MessagingPayload, MessagingResource, MessagingSolution }
