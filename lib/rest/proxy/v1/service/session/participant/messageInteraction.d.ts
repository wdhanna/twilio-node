/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../../../base/Page');
import Response = require('../../../../../../http/response');
import V1 = require('../../../../V1');
import serialize = require('../../../../../../base/serialize');
import { ListEachOptions, ListOptions, PageOptions } from '../../../../../../interfaces';
import { SerializableClass } from '../../../../../../interfaces';

/**
 * @description Initialize the MessageInteractionList
 * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
 *
 * @param version - Version of the resource
 * @param serviceSid - Service Sid.
 * @param sessionSid - Session Sid.
 * @param participantSid - Participant Sid.
 */
declare function MessageInteractionList(version: V1, serviceSid: string, sessionSid: string, participantSid: string): MessageInteractionListInstance;

interface MessageInteractionResource {
  account_sid: string;
  data: string;
  date_created: Date;
  date_updated: Date;
  inbound_participant_sid: string;
  inbound_resource_sid: string;
  inbound_resource_status: MessageInteractionResourceStatus;
  inbound_resource_type: string;
  inbound_resource_url: string;
  outbound_participant_sid: string;
  outbound_resource_sid: string;
  outbound_resource_status: MessageInteractionResourceStatus;
  outbound_resource_type: string;
  outbound_resource_url: string;
  participant_sid: string;
  service_sid: string;
  session_sid: string;
  sid: string;
  type: MessageInteractionType;
  url: string;
}

interface MessageInteractionPayload extends MessageInteractionResource, Page.TwilioResponsePayload {
}

interface MessageInteractionSolution {
  participantSid?: string;
  serviceSid?: string;
  sessionSid?: string;
}

interface MessageInteractionListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): MessageInteractionContext;
  /**
   * create a MessageInteractionInstance
   *
   * @function create
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts?: object, callback?: function);
  /**
   * Streams MessageInteractionInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Function to process each record
   */
  each(opts?: object, callback?: Function);
  /**
   * Constructs a message_interaction
   *
   * @function get
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
   * @instance
   *
   * @param sid - The sid
   */
  get(sid: string);
  /**
   * Retrieve a single target page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function getPage
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
   * @instance
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: function);
  /**
   * @description Lists MessageInteractionInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  list(opts?: object, callback?: function);
  /**
   * Retrieve a single page of MessageInteractionInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionList
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle list of records
   */
  page(opts?: object, callback?: function);
}


declare class MessageInteractionPage extends Page {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionPage
   * @augments Page
   * @description Initialize the MessageInteractionPage
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Proxy.V1, response: Response<string>, solution: object);

  /**
   * Build an instance of MessageInteractionInstance
   *
   * @function getInstance
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class MessageInteractionInstance {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionInstance
   * @description Initialize the MessageInteractionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @property sid - A string that uniquely identifies this Message Interaction.
   * @property sessionSid - Session Sid.
   * @property serviceSid - Service Sid.
   * @property accountSid - Account Sid.
   * @property data - Message body
   * @property type - The Type of this Message Interaction
   * @property participantSid - Participant Sid.
   * @property inboundParticipantSid - Always empty for Message Interactions.
   * @property inboundResourceSid - Always empty for Message Interactions.
   * @property inboundResourceStatus - Always empty for Message Interactions.
   * @property inboundResourceType - Always empty for Message Interactions.
   * @property inboundResourceUrl - Always empty for Message Interactions.
   * @property outboundParticipantSid - Outbound Participant Sid.
   * @property outboundResourceSid - Outbound message resource Sid.
   * @property outboundResourceStatus - The Outbound Resource Status of this Message Interaction
   * @property outboundResourceType - Message
   * @property outboundResourceUrl - The URL of the Twilio message resource.
   * @property dateCreated - The date this Message Interaction was created
   * @property dateUpdated - The date this Message Interaction was last updated
   * @property url - The URL of this resource.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - Service Sid.
   * @param sessionSid - Session Sid.
   * @param participantSid - Participant Sid.
   * @param sid - The sid
   */
  constructor(version: Twilio.Proxy.V1, payload: object, serviceSid: sid, sessionSid: sid, participantSid: sid, sid: sid);

  _proxy?: MessageInteractionContext;
  /**
   * fetch a MessageInteractionInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the MessageInteractionInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionInstance
   * @instance
   */
  toJSON();
}


declare class MessageInteractionContext {
  /**
   * @constructor Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionContext
   * @description Initialize the MessageInteractionContext
   * PLEASE NOTE that this class contains beta products that are subject to change. Use them with caution.
   *
   * @param version - Version of the resource
   * @param serviceSid - The service_sid
   * @param sessionSid - The session_sid
   * @param participantSid - The participant_sid
   * @param sid - The sid
   */
  constructor(version: Twilio.Proxy.V1, serviceSid: sid, sessionSid: sid, participantSid: sid, sid: sid);

  /**
   * fetch a MessageInteractionInstance
   *
   * @function fetch
   * @memberof Twilio.Proxy.V1.ServiceContext.SessionContext.ParticipantContext.MessageInteractionContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { MessageInteractionContext, MessageInteractionInstance, MessageInteractionList, MessageInteractionListInstance, MessageInteractionPage, MessageInteractionPayload, MessageInteractionResource, MessageInteractionSolution }