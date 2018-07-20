/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../base/Page');
import Response = require('../../../../../http/response');
import V1 = require('../../../V1');
import { SerializableClass } from '../../../../../interfaces';

/**
 * @description Initialize the EngagementContextList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param flowSid - The flow_sid
 * @param engagementSid - The engagement_sid
 */
declare function EngagementContextList(version: V1, flowSid: string, engagementSid: string): EngagementContextListInstance;

interface EngagementContextResource {
  account_sid: string;
  context: string;
  engagement_sid: string;
  flow_sid: string;
  url: string;
}

interface EngagementContextPayload extends EngagementContextResource, Page.TwilioResponsePayload {
}

interface EngagementContextSolution {
  engagementSid?: string;
  flowSid?: string;
}

interface EngagementContextListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): EngagementContextContext;
  /**
   * Constructs a engagement_context
   */
  get(): EngagementContextContext;
}


declare class EngagementContextPage extends Page<V1, EngagementContextPayload, EngagementContextResource, EngagementContextInstance> {
  /**
   * Initialize the EngagementContextPagePLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: EngagementContextSolution);

  /**
   * Build an instance of EngagementContextInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: EngagementContextPayload): EngagementContextInstance;
}


declare class EngagementContextInstance extends SerializableClass {
  /**
   * Initialize the EngagementContextContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property accountSid - The account_sid
   * @property context - The context
   * @property engagementSid - The engagement_sid
   * @property flowSid - The flow_sid
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   */
  constructor(version: V1, payload: EngagementContextPayload, flowSid: string, engagementSid: string);

  private _proxy: EngagementContextContext;
  accountSid: string;
  context: string;
  engagementSid: string;
  /**
   * fetch a EngagementContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EngagementContextInstance) => any): void;
  flowSid: string;
  /**
   * Produce a plain JSON object version of the EngagementContextInstance for serialization.
   * Removes any circular references in the object.
   */
  toJSON(): any;
  url: string;
}


declare class EngagementContextContext {
  /**
   * Initialize the EngagementContextContextPLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param flowSid - The flow_sid
   * @param engagementSid - The engagement_sid
   */
  constructor(version: V1, flowSid: string, engagementSid: string);

  /**
   * fetch a EngagementContextInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: EngagementContextInstance) => any): void;
}

export { EngagementContextContext, EngagementContextInstance, EngagementContextList, EngagementContextListInstance, EngagementContextPage, EngagementContextPayload, EngagementContextResource, EngagementContextSolution }
