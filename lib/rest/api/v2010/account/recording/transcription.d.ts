/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import V2010 = require('../../../V2010');
import deserialize = require('../../../../../base/deserialize');
import values = require('../../../../../base/values');



declare class TranscriptionPage extends Page {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionPage
   * @augments Page
   * @description Initialize the TranscriptionPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Api.V2010, response: object, solution: object);

  /**
   * Build an instance of TranscriptionInstance
   *
   * @function getInstance
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}

declare class TranscriptionInstance {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionInstance
   * @description Initialize the TranscriptionContext
   *
   * @property accountSid - The account_sid
   * @property apiVersion - The api_version
   * @property dateCreated - The date_created
   * @property dateUpdated - The date_updated
   * @property duration - The duration
   * @property price - The price
   * @property priceUnit - The price_unit
   * @property recordingSid - The recording_sid
   * @property sid - The sid
   * @property status - The status
   * @property transcriptionText - The transcription_text
   * @property type - The type
   * @property uri - The uri
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The account_sid
   * @param recordingSid - The recording_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, payload: object, accountSid: sid, recordingSid: sid, sid: sid);

  _proxy?: TranscriptionContext;
  /**
   * fetch a TranscriptionInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TranscriptionInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
  /**
   * Produce a plain JSON object version of the TranscriptionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionInstance
   * @instance
   */
  toJSON();
}

declare class TranscriptionContext {
  /**
   * @constructor Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionContext
   * @description Initialize the TranscriptionContext
   *
   * @param version - Version of the resource
   * @param accountSid - The account_sid
   * @param recordingSid - The recording_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Api.V2010, accountSid: sid, recordingSid: sid, sid: sid);

  /**
   * fetch a TranscriptionInstance
   *
   * @function fetch
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * remove a TranscriptionInstance
   *
   * @function remove
   * @memberof Twilio.Api.V2010.AccountContext.RecordingContext.TranscriptionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: function);
}

export { TranscriptionContext, TranscriptionInstance, TranscriptionList, TranscriptionPage }
