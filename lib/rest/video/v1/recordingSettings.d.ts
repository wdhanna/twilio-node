/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../base/Page');
import V1 = require('../V1');
import serialize = require('../../../base/serialize');
import { SerializableClass } from '../../../interfaces';

/**
 * @description Initialize the RecordingSettingsList
 * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
 *
 * @param version - Version of the resource
 */
declare function RecordingSettingsList(version: V1): RecordingSettingsListInstance;

interface RecordingSettingsResource {
  account_sid: string;
  aws_credentials_sid: string;
  aws_s3_url: string;
  aws_storage_enabled: boolean;
  encryption_enabled: boolean;
  encryption_key_sid: string;
  friendly_name: string;
  url: string;
}

interface RecordingSettingsListInstance {
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Friendly name of the configuration to be shown in the console
 * @property awsCredentialsSid - SID of the Stored Credential resource CRxx
 * @property encryptionKeySid - SID of the Public Key resource CRxx
 * @property awsS3Url - Identity of the external location where the recordings should be stored. We only support DNS-compliant URLs like http://<my-bucket>.s3-<aws-region>.amazonaws.com/recordings, where recordings is the path where you want recordings to be stored.
 * @property awsStorageEnabled - true|false When set to true, all Recordings will be written to the AwsS3Url specified above. When set to false, all Recordings will be stored in Twilio's cloud.
 * @property encryptionEnabled - true|false When set to true, all Recordings will be stored encrypted.
 */
export interface CreateOptions {
  awsCredentialsSid?: string;
  awsS3Url?: string;
  awsStorageEnabled?: boolean;
  encryptionEnabled?: boolean;
  encryptionKeySid?: string;
  friendlyName: string;
}

/**
 * Options to pass to create
 *
 * @property friendlyName - Friendly name of the configuration to be shown in the console
 * @property awsCredentialsSid - SID of the Stored Credential resource CRxx
 * @property encryptionKeySid - SID of the Public Key resource CRxx
 * @property awsS3Url - Identity of the external location where the recordings should be stored. We only support DNS-compliant URLs like http://<my-bucket>.s3-<aws-region>.amazonaws.com/recordings, where recordings is the path where you want recordings to be stored.
 * @property awsStorageEnabled - true|false When set to true, all Recordings will be written to the AwsS3Url specified above. When set to false, all Recordings will be stored in Twilio's cloud.
 * @property encryptionEnabled - true|false When set to true, all Recordings will be stored encrypted.
 */
export interface CreateOptions {
  awsCredentialsSid?: string;
  awsS3Url?: string;
  awsStorageEnabled?: boolean;
  encryptionEnabled?: boolean;
  encryptionKeySid?: string;
  friendlyName: string;
}


declare class RecordingSettingsPage extends Page {
  /**
   * @constructor Twilio.Video.V1.RecordingSettingsPage
   * @augments Page
   * @description Initialize the RecordingSettingsPage
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: Twilio.Video.V1, response: object, solution: object);

  /**
   * Build an instance of RecordingSettingsInstance
   *
   * @function getInstance
   * @memberof Twilio.Video.V1.RecordingSettingsPage
   * @instance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: object);
}


declare class RecordingSettingsInstance {
  /**
   * @constructor Twilio.Video.V1.RecordingSettingsInstance
   * @description Initialize the RecordingSettingsContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @property accountSid - The Twilio Account SID associated with this item
   * @property friendlyName - Friendly name of the configuration to be shown in the console
   * @property awsCredentialsSid - SID of the Stored Credential resource CRxx
   * @property awsS3Url - URL of the S3 bucket where the recordings should be stored. We only support DNS-compliant URLs like http://<my-bucket>.s3-<aws-region>.amazonaws.com/recordings, where recordings is the path where you want recordings to be stored.
   * @property awsStorageEnabled - true|false When set to true, all Recordings will be written to the AwsS3Url specified above. When set to false, all Recordings will be stored in Twilio's cloud.
   * @property encryptionKeySid - SID of the Public Key resource CRxx
   * @property encryptionEnabled - true|false When set to true, all Recordings will be stored encrypted.
   * @property url - The url
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   */
  constructor(version: Twilio.Video.V1, payload: object);

  _proxy?: RecordingSettingsContext;
  /**
   * create a RecordingSettingsInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.RecordingSettingsInstance
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * fetch a RecordingSettingsInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RecordingSettingsInstance
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
  /**
   * Produce a plain JSON object version of the RecordingSettingsInstance for serialization.
   * Removes any circular references in the object.
   *
   * @function toJSON
   * @memberof Twilio.Video.V1.RecordingSettingsInstance
   * @instance
   */
  toJSON();
}


declare class RecordingSettingsContext {
  /**
   * @constructor Twilio.Video.V1.RecordingSettingsContext
   * @description Initialize the RecordingSettingsContext
   * PLEASE NOTE that this class contains preview products that are subject to change. Use them with caution. If you currently do not have developer preview access, please contact help@twilio.com.
   *
   * @param version - Version of the resource
   */
  constructor(version: Twilio.Video.V1);

  /**
   * create a RecordingSettingsInstance
   *
   * @function create
   * @memberof Twilio.Video.V1.RecordingSettingsContext
   * @instance
   *
   * @param opts - ...
   * @param callback - Callback to handle processed record
   */
  create(opts: object, callback?: function);
  /**
   * fetch a RecordingSettingsInstance
   *
   * @function fetch
   * @memberof Twilio.Video.V1.RecordingSettingsContext
   * @instance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: function);
}

export { RecordingSettingsContext, RecordingSettingsInstance, RecordingSettingsList, RecordingSettingsListInstance, RecordingSettingsPage, RecordingSettingsResource }
