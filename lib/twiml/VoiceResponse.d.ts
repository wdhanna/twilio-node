/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import { HttpMethod, Url, PhoneNumber, Sid } from '../interfaces';

/**
 * <Response> TwiML for Voice
 */
declare class VoiceResponse {
  /**
   * <Response> TwiML for Voice
   */
  constructor();

  /**
   * <Dial> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param number - Phone number to dial
   *
   * @returns Dial
   */
  dial(attributes?: VoiceResponse.DialAttributes, number?: string): VoiceResponse.Dial;
  /**
   * <Echo> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  echo(attributes?: VoiceResponse.EchoAttributes): void;
  /**
   * <Enqueue> TwiML Noun
   *
   * @param attributes - TwiML attributes
   * @param name - Friendly name
   *
   * @returns Enqueue
   */
  enqueue(attributes?: VoiceResponse.EnqueueAttributes, name?: string): VoiceResponse.Enqueue;
  /**
   * <Gather> TwiML Verb
   *
   * @param attributes - TwiML attributes
   *
   * @returns Gather
   */
  gather(attributes?: VoiceResponse.GatherAttributes): VoiceResponse.Gather;
  /**
   * <Hangup> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  hangup(attributes?: VoiceResponse.HangupAttributes): void;
  /**
   * <Leave> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  leave(attributes?: VoiceResponse.LeaveAttributes): void;
  /**
   * <Pause> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  pause(attributes?: VoiceResponse.PauseAttributes): void;
  /**
   * <Play> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param url - Media URL
   */
  play(attributes?: VoiceResponse.PlayAttributes, url?: string): void;
  /**
   * <Queue> TwiML Noun
   *
   * @param attributes - TwiML attributes
   * @param name - Queue name
   */
  queue(attributes: VoiceResponse.QueueAttributes, name: string): void;
  /**
   * <Record> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  record(attributes?: VoiceResponse.RecordAttributes): void;
  /**
   * <Redirect> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param url - Redirect URL
   */
  redirect(attributes: VoiceResponse.RedirectAttributes, url: string): void;
  /**
   * <Reject> TwiML Verb
   *
   * @param attributes - TwiML attributes
   */
  reject(attributes?: VoiceResponse.RejectAttributes): void;
  /**
   * <Say> TwiML Verb
   *
   * @param attributes - TwiML attributes
   * @param message - Message to say
   */
  say(attributes: VoiceResponse.SayAttributes, message: string): void;
  /**
   * <Sms> TwiML Noun
   *
   * @param attributes - TwiML attributes
   * @param message - Message body
   */
  sms(attributes: VoiceResponse.SmsAttributes, message: string): void;
  /**
   * Convert to TwiML
   *
   * @returns TwiML XML
   */
  toString(): any;
}

declare namespace VoiceResponse {

  type GatherLanguage = 'af-ZA'|'id-ID'|'ms-MY'|'ca-ES'|'cs-CZ'|'da-DK'|'de-DE'|'en-AU'|'en-CA'|'en-GB'|'en-IN'|'en-IE'|'en-NZ'|'en-PH'|'en-ZA'|'en-US'|'es-AR'|'es-BO'|'es-CL'|'es-CO'|'es-CR'|'es-EC'|'es-SV'|'es-ES'|'es-US'|'es-GT'|'es-HN'|'es-MX'|'es-NI'|'es-PA'|'es-PY'|'es-PE'|'es-PR'|'es-DO'|'es-UY'|'es-VE'|'eu-ES'|'il-PH'|'fr-CA'|'fr-FR'|'gl-ES'|'hr-HR'|'zu-ZA'|'is-IS'|'it-IT'|'lt-LT'|'hu-HU'|'nl-NL'|'nb-NO'|'pl-PL'|'pt-BR'|'pt-PT'|'ro-RO'|'sk-SK'|'sl-SI'|'fi-FI'|'sv-SE'|'vi-VN'|'tr-TR'|'el-GR'|'bg-BG'|'ru-RU'|'sr-RS'|'uk-UA'|'he-IL'|'ar-IL'|'ar-JO'|'ar-AE'|'ar-BH'|'ar-DZ'|'ar-SA'|'ar-IQ'|'ar-KW'|'ar-MA'|'ar-TN'|'ar-OM'|'ar-PS'|'ar-QA'|'ar-LB'|'ar-EG'|'fa-IR'|'hi-IN'|'th-TH'|'ko-KR'|'cmn-Hant-TW'|'yue-Hant-HK'|'ja-JP'|'cmn-Hans-HK'|'cmn-Hans-CN';

  type DialTrim = 'trim-silence'|'do-not-trim';

  type ConferenceRegion = 'us1'|'ie1'|'sg1'|'br1'|'au1'|'jp1';

  type ConferenceTrim = 'trim-silence'|'do-not-trim';

  type DialRingTone = 'at'|'au'|'bg'|'br'|'be'|'ch'|'cl'|'cn'|'cz'|'de'|'dk'|'ee'|'es'|'fi'|'fr'|'gr'|'hu'|'il'|'in'|'it'|'lt'|'jp'|'mx'|'my'|'nl'|'no'|'nz'|'ph'|'pl'|'pt'|'ru'|'se'|'sg'|'th'|'uk'|'us'|'us-old'|'tw'|'ve'|'za';

  type SayVoice = 'man'|'woman'|'alice';

  type SayLanguage = 'da-DK'|'de-DE'|'en-AU'|'en-CA'|'en-GB'|'en-IN'|'en-US'|'ca-ES'|'es-ES'|'es-MX'|'fi-FI'|'fr-CA'|'fr-FR'|'it-IT'|'ja-JP'|'ko-KR'|'nb-NO'|'nl-NL'|'pl-PL'|'pt-BR'|'pt-PT'|'ru-RU'|'sv-SE'|'zh-CN'|'zh-HK'|'zh-TW';

  type ConferenceBeep = 'true'|'false'|'onEnter'|'onExit';

  type GatherInput = 'dtmf'|'speech';

  type RecordTrim = 'trim-silence'|'do-not-trim';

  type ClientEvent = 'initiated'|'ringing'|'answered'|'completed';

  type ConferenceRecordingEvent = 'started'|'stopped'|'paused'|'resumed'|'completed'|'failed';

  type DialRecordingEvent = 'in-progress'|'completed'|'failed';

  type ConferenceRecord = 'do-not-record'|'record-from-start';

  type NumberEvent = 'initiated'|'ringing'|'answered'|'completed';

  type SipEvent = 'initiated'|'ringing'|'answered'|'completed';

  type DialRecord = 'do-not-record'|'record-from-answer'|'record-from-ringing'|'record-from-answer-dual'|'record-from-ringing-dual';

  type RejectReason = 'rejected'|'busy';

  type ConferenceEvent = 'start'|'end'|'join'|'leave'|'mute'|'hold'|'speaker';

  /**
   * Attributes for <Response> TwiML for Voice
   */
  export interface VoiceResponseAttributes {
  }

  /**
   * Attributes for <Dial> TwiML Verb
   */
  export interface DialAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Preserve the ringing behavior of the inbound call until the Dialed call picks up
     */
    answerOnBridge?: boolean;
    /**
     * Caller ID to display
     */
    callerId?: string;
    /**
     * Hangup call on star press
     */
    hangupOnStar?: boolean;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Record the call
     */
    record?: DialRecord;
    /**
     * Recording status callback URL
     */
    recordingStatusCallback?: string;
    /**
     * Recording status callback events
     */
    recordingStatusCallbackEvent?: DialRecordingEvent;
    /**
     * Recording status callback URL method
     */
    recordingStatusCallbackMethod?: string;
    /**
     * Ringtone allows you to override the ringback tone that Twilio will play back to the caller while executing the Dial
     */
    ringTone?: DialRingTone;
    /**
     * Max time length
     */
    timeLimit?: number;
    /**
     * Time to wait for answer
     */
    timeout?: number;
    /**
     * Trim the recording
     */
    trim?: DialTrim;
  }

  /**
   * Attributes for <Echo> TwiML Verb
   */
  export interface EchoAttributes {
  }

  /**
   * Attributes for <Enqueue> TwiML Noun
   */
  export interface EnqueueAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Wait URL
     */
    waitUrl?: string;
    /**
     * Wait URL method
     */
    waitUrlMethod?: string;
    /**
     * TaskRouter Workflow SID
     */
    workflowSid?: string;
  }

  /**
   * Attributes for <Gather> TwiML Verb
   */
  export interface GatherAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Stop playing media upon speech
     */
    bargeIn?: boolean;
    /**
     * Finish gather on key
     */
    finishOnKey?: string;
    /**
     * Speech recognition hints
     */
    hints?: string;
    /**
     * Input type Twilio should accept
     */
    input?: GatherInput;
    /**
     * Language to use
     */
    language?: GatherLanguage;
    /**
     * Max allowed time for speech input
     */
    maxSpeechTime?: number;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Number of digits to collect
     */
    numDigits?: number;
    /**
     * Partial result callback URL
     */
    partialResultCallback?: string;
    /**
     * Partial result callback URL method
     */
    partialResultCallbackMethod?: string;
    /**
     * Profanity Filter on speech
     */
    profanityFilter?: boolean;
    /**
     * Time to wait to gather speech input and it should be either auto or a positive integer.
     */
    speechTimeout?: string;
    /**
     * Time to wait to gather input
     */
    timeout?: number;
  }

  /**
   * Attributes for <Hangup> TwiML Verb
   */
  export interface HangupAttributes {
  }

  /**
   * Attributes for <Leave> TwiML Verb
   */
  export interface LeaveAttributes {
  }

  /**
   * Attributes for <Pause> TwiML Verb
   */
  export interface PauseAttributes {
    /**
     * Length in seconds to pause
     */
    length?: number;
  }

  /**
   * Attributes for <Play> TwiML Verb
   */
  export interface PlayAttributes {
    /**
     * Play DTMF tones for digits
     */
    digits?: string;
    /**
     * Times to loop media
     */
    loop?: number;
  }

  /**
   * Attributes for <Queue> TwiML Noun
   */
  export interface QueueAttributes {
    /**
     * Action URL method
     */
    method?: string;
    /**
     * TaskRouter Activity SID
     */
    postWorkActivitySid?: string;
    /**
     * TaskRouter Reservation SID
     */
    reservationSid?: string;
    /**
     * Action URL
     */
    url?: string;
  }

  /**
   * Attributes for <Record> TwiML Verb
   */
  export interface RecordAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Finish recording on key
     */
    finishOnKey?: string;
    /**
     * Max time to record in seconds
     */
    maxLength?: number;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Play beep
     */
    playBeep?: boolean;
    /**
     * Status callback URL
     */
    recordingStatusCallback?: string;
    /**
     * Status callback URL method
     */
    recordingStatusCallbackMethod?: string;
    /**
     * Timeout to begin recording
     */
    timeout?: number;
    /**
     * Transcribe the recording
     */
    transcribe?: boolean;
    /**
     * Transcribe callback URL
     */
    transcribeCallback?: string;
    /**
     * Trim the recording
     */
    trim?: RecordTrim;
  }

  /**
   * Attributes for <Redirect> TwiML Verb
   */
  export interface RedirectAttributes {
    /**
     * Redirect URL method
     */
    method?: string;
  }

  /**
   * Attributes for <Reject> TwiML Verb
   */
  export interface RejectAttributes {
    /**
     * Rejection reason
     */
    reason?: RejectReason;
  }

  /**
   * Attributes for <Say> TwiML Verb
   */
  export interface SayAttributes {
    /**
     * Message langauge
     */
    language?: SayLanguage;
    /**
     * Times to loop message
     */
    loop?: number;
    /**
     * Voice to use
     */
    voice?: SayVoice;
  }

  /**
   * Attributes for <Sms> TwiML Noun
   */
  export interface SmsAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Number to send message from
     */
    from?: string;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Number to send message to
     */
    to?: string;
  }

  /**
   * Attributes for <Dial> TwiML Verb
   */
  export interface DialAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Preserve the ringing behavior of the inbound call until the Dialed call picks up
     */
    answerOnBridge?: boolean;
    /**
     * Caller ID to display
     */
    callerId?: string;
    /**
     * Hangup call on star press
     */
    hangupOnStar?: boolean;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Record the call
     */
    record?: DialRecord;
    /**
     * Recording status callback URL
     */
    recordingStatusCallback?: string;
    /**
     * Recording status callback events
     */
    recordingStatusCallbackEvent?: DialRecordingEvent;
    /**
     * Recording status callback URL method
     */
    recordingStatusCallbackMethod?: string;
    /**
     * Ringtone allows you to override the ringback tone that Twilio will play back to the caller while executing the Dial
     */
    ringTone?: DialRingTone;
    /**
     * Max time length
     */
    timeLimit?: number;
    /**
     * Time to wait for answer
     */
    timeout?: number;
    /**
     * Trim the recording
     */
    trim?: DialTrim;
  }

  /**
   * Attributes for <Echo> TwiML Verb
   */
  export interface EchoAttributes {
  }

  /**
   * Attributes for <Enqueue> TwiML Noun
   */
  export interface EnqueueAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Wait URL
     */
    waitUrl?: string;
    /**
     * Wait URL method
     */
    waitUrlMethod?: string;
    /**
     * TaskRouter Workflow SID
     */
    workflowSid?: string;
  }

  /**
   * Attributes for <Gather> TwiML Verb
   */
  export interface GatherAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Stop playing media upon speech
     */
    bargeIn?: boolean;
    /**
     * Finish gather on key
     */
    finishOnKey?: string;
    /**
     * Speech recognition hints
     */
    hints?: string;
    /**
     * Input type Twilio should accept
     */
    input?: GatherInput;
    /**
     * Language to use
     */
    language?: GatherLanguage;
    /**
     * Max allowed time for speech input
     */
    maxSpeechTime?: number;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Number of digits to collect
     */
    numDigits?: number;
    /**
     * Partial result callback URL
     */
    partialResultCallback?: string;
    /**
     * Partial result callback URL method
     */
    partialResultCallbackMethod?: string;
    /**
     * Profanity Filter on speech
     */
    profanityFilter?: boolean;
    /**
     * Time to wait to gather speech input and it should be either auto or a positive integer.
     */
    speechTimeout?: string;
    /**
     * Time to wait to gather input
     */
    timeout?: number;
  }

  /**
   * Attributes for <Hangup> TwiML Verb
   */
  export interface HangupAttributes {
  }

  /**
   * Attributes for <Leave> TwiML Verb
   */
  export interface LeaveAttributes {
  }

  /**
   * Attributes for <Pause> TwiML Verb
   */
  export interface PauseAttributes {
    /**
     * Length in seconds to pause
     */
    length?: number;
  }

  /**
   * Attributes for <Play> TwiML Verb
   */
  export interface PlayAttributes {
    /**
     * Play DTMF tones for digits
     */
    digits?: string;
    /**
     * Times to loop media
     */
    loop?: number;
  }

  /**
   * Attributes for <Queue> TwiML Noun
   */
  export interface QueueAttributes {
    /**
     * Action URL method
     */
    method?: string;
    /**
     * TaskRouter Activity SID
     */
    postWorkActivitySid?: string;
    /**
     * TaskRouter Reservation SID
     */
    reservationSid?: string;
    /**
     * Action URL
     */
    url?: string;
  }

  /**
   * Attributes for <Record> TwiML Verb
   */
  export interface RecordAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Finish recording on key
     */
    finishOnKey?: string;
    /**
     * Max time to record in seconds
     */
    maxLength?: number;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Play beep
     */
    playBeep?: boolean;
    /**
     * Status callback URL
     */
    recordingStatusCallback?: string;
    /**
     * Status callback URL method
     */
    recordingStatusCallbackMethod?: string;
    /**
     * Timeout to begin recording
     */
    timeout?: number;
    /**
     * Transcribe the recording
     */
    transcribe?: boolean;
    /**
     * Transcribe callback URL
     */
    transcribeCallback?: string;
    /**
     * Trim the recording
     */
    trim?: RecordTrim;
  }

  /**
   * Attributes for <Redirect> TwiML Verb
   */
  export interface RedirectAttributes {
    /**
     * Redirect URL method
     */
    method?: string;
  }

  /**
   * Attributes for <Reject> TwiML Verb
   */
  export interface RejectAttributes {
    /**
     * Rejection reason
     */
    reason?: RejectReason;
  }

  /**
   * Attributes for <Say> TwiML Verb
   */
  export interface SayAttributes {
    /**
     * Message langauge
     */
    language?: SayLanguage;
    /**
     * Times to loop message
     */
    loop?: number;
    /**
     * Voice to use
     */
    voice?: SayVoice;
  }

  /**
   * Attributes for <Sms> TwiML Noun
   */
  export interface SmsAttributes {
    /**
     * Action URL
     */
    action?: string;
    /**
     * Number to send message from
     */
    from?: string;
    /**
     * Action URL method
     */
    method?: string;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Number to send message to
     */
    to?: string;
  }

  /**
   * Attributes for <Client> TwiML Noun
   */
  export interface ClientAttributes {
    /**
     * Client URL Method
     */
    method?: string;
    /**
     * Status Callback URL
     */
    statusCallback?: string;
    /**
     * Events to trigger status callback
     */
    statusCallbackEvent?: ClientEvent;
    /**
     * Status Callback URL Method
     */
    statusCallbackMethod?: string;
    /**
     * Client URL
     */
    url?: string;
  }

  /**
   * Attributes for <Conference> TwiML Noun
   */
  export interface ConferenceAttributes {
    /**
     * Play beep when joining
     */
    beep?: ConferenceBeep;
    /**
     * End the conferenceon exit
     */
    endConferenceOnExit?: boolean;
    /**
     * Event callback URL
     */
    eventCallbackUrl?: string;
    /**
     * Maximum number of participants
     */
    maxParticipants?: number;
    /**
     * Join the conference muted
     */
    muted?: boolean;
    /**
     * Record the conference
     */
    record?: ConferenceRecord;
    /**
     * Recording status callback URL
     */
    recordingStatusCallback?: string;
    /**
     * Recording status callback events
     */
    recordingStatusCallbackEvent?: ConferenceRecordingEvent;
    /**
     * Recording status callback URL method
     */
    recordingStatusCallbackMethod?: string;
    /**
     * Conference region
     */
    region?: ConferenceRegion;
    /**
     * Start the conference on enter
     */
    startConferenceOnEnter?: boolean;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Events to call status callback URL
     */
    statusCallbackEvent?: ConferenceEvent;
    /**
     * Status callback URL method
     */
    statusCallbackMethod?: string;
    /**
     * Trim the conference recording
     */
    trim?: ConferenceTrim;
    /**
     * Wait URL method
     */
    waitMethod?: string;
    /**
     * Wait URL
     */
    waitUrl?: string;
    /**
     * Call whisper
     */
    whisper?: string;
  }

  /**
   * Attributes for <Number> TwiML Noun
   */
  export interface NumberAttributes {
    /**
     * TwiML URL method
     */
    method?: string;
    /**
     * DTMF tones to play when the call is answered
     */
    sendDigits?: string;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Events to call status callback
     */
    statusCallbackEvent?: NumberEvent;
    /**
     * Status callback URL method
     */
    statusCallbackMethod?: string;
    /**
     * TwiML URL
     */
    url?: string;
  }

  /**
   * Attributes for <Queue> TwiML Noun
   */
  export interface QueueAttributes {
    /**
     * Action URL method
     */
    method?: string;
    /**
     * TaskRouter Activity SID
     */
    postWorkActivitySid?: string;
    /**
     * TaskRouter Reservation SID
     */
    reservationSid?: string;
    /**
     * Action URL
     */
    url?: string;
  }

  /**
   * Attributes for <Sim> TwiML Noun
   */
  export interface SimAttributes {
  }

  /**
   * Attributes for <Sip> TwiML Noun
   */
  export interface SipAttributes {
    /**
     * Action URL method
     */
    method?: string;
    /**
     * SIP Password
     */
    password?: string;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Status callback events
     */
    statusCallbackEvent?: SipEvent;
    /**
     * Status callback URL method
     */
    statusCallbackMethod?: string;
    /**
     * Action URL
     */
    url?: string;
    /**
     * SIP Username
     */
    username?: string;
  }

  /**
   * Attributes for <Task> TwiML Noun
   */
  export interface TaskAttributes {
    /**
     * Task priority
     */
    priority?: number;
    /**
     * Timeout associated with task
     */
    timeout?: number;
  }

  /**
   * Attributes for <Say> TwiML Verb
   */
  export interface SayAttributes {
    /**
     * Message langauge
     */
    language?: SayLanguage;
    /**
     * Times to loop message
     */
    loop?: number;
    /**
     * Voice to use
     */
    voice?: SayVoice;
  }

  /**
   * Attributes for <Pause> TwiML Verb
   */
  export interface PauseAttributes {
    /**
     * Length in seconds to pause
     */
    length?: number;
  }

  /**
   * Attributes for <Play> TwiML Verb
   */
  export interface PlayAttributes {
    /**
     * Play DTMF tones for digits
     */
    digits?: string;
    /**
     * Times to loop media
     */
    loop?: number;
  }

  /**
   * Attributes for <Client> TwiML Noun
   */
  export interface ClientAttributes {
    /**
     * Client URL Method
     */
    method?: string;
    /**
     * Status Callback URL
     */
    statusCallback?: string;
    /**
     * Events to trigger status callback
     */
    statusCallbackEvent?: ClientEvent;
    /**
     * Status Callback URL Method
     */
    statusCallbackMethod?: string;
    /**
     * Client URL
     */
    url?: string;
  }

  /**
   * Attributes for <Conference> TwiML Noun
   */
  export interface ConferenceAttributes {
    /**
     * Play beep when joining
     */
    beep?: ConferenceBeep;
    /**
     * End the conferenceon exit
     */
    endConferenceOnExit?: boolean;
    /**
     * Event callback URL
     */
    eventCallbackUrl?: string;
    /**
     * Maximum number of participants
     */
    maxParticipants?: number;
    /**
     * Join the conference muted
     */
    muted?: boolean;
    /**
     * Record the conference
     */
    record?: ConferenceRecord;
    /**
     * Recording status callback URL
     */
    recordingStatusCallback?: string;
    /**
     * Recording status callback events
     */
    recordingStatusCallbackEvent?: ConferenceRecordingEvent;
    /**
     * Recording status callback URL method
     */
    recordingStatusCallbackMethod?: string;
    /**
     * Conference region
     */
    region?: ConferenceRegion;
    /**
     * Start the conference on enter
     */
    startConferenceOnEnter?: boolean;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Events to call status callback URL
     */
    statusCallbackEvent?: ConferenceEvent;
    /**
     * Status callback URL method
     */
    statusCallbackMethod?: string;
    /**
     * Trim the conference recording
     */
    trim?: ConferenceTrim;
    /**
     * Wait URL method
     */
    waitMethod?: string;
    /**
     * Wait URL
     */
    waitUrl?: string;
    /**
     * Call whisper
     */
    whisper?: string;
  }

  /**
   * Attributes for <Number> TwiML Noun
   */
  export interface NumberAttributes {
    /**
     * TwiML URL method
     */
    method?: string;
    /**
     * DTMF tones to play when the call is answered
     */
    sendDigits?: string;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Events to call status callback
     */
    statusCallbackEvent?: NumberEvent;
    /**
     * Status callback URL method
     */
    statusCallbackMethod?: string;
    /**
     * TwiML URL
     */
    url?: string;
  }

  /**
   * Attributes for <Queue> TwiML Noun
   */
  export interface QueueAttributes {
    /**
     * Action URL method
     */
    method?: string;
    /**
     * TaskRouter Activity SID
     */
    postWorkActivitySid?: string;
    /**
     * TaskRouter Reservation SID
     */
    reservationSid?: string;
    /**
     * Action URL
     */
    url?: string;
  }

  /**
   * Attributes for <Sim> TwiML Noun
   */
  export interface SimAttributes {
  }

  /**
   * Attributes for <Sip> TwiML Noun
   */
  export interface SipAttributes {
    /**
     * Action URL method
     */
    method?: string;
    /**
     * SIP Password
     */
    password?: string;
    /**
     * Status callback URL
     */
    statusCallback?: string;
    /**
     * Status callback events
     */
    statusCallbackEvent?: SipEvent;
    /**
     * Status callback URL method
     */
    statusCallbackMethod?: string;
    /**
     * Action URL
     */
    url?: string;
    /**
     * SIP Username
     */
    username?: string;
  }

  /**
   * Attributes for <Task> TwiML Noun
   */
  export interface TaskAttributes {
    /**
     * Task priority
     */
    priority?: number;
    /**
     * Timeout associated with task
     */
    timeout?: number;
  }

  /**
   * Attributes for <Say> TwiML Verb
   */
  export interface SayAttributes {
    /**
     * Message langauge
     */
    language?: SayLanguage;
    /**
     * Times to loop message
     */
    loop?: number;
    /**
     * Voice to use
     */
    voice?: SayVoice;
  }

  /**
   * Attributes for <Pause> TwiML Verb
   */
  export interface PauseAttributes {
    /**
     * Length in seconds to pause
     */
    length?: number;
  }

  /**
   * Attributes for <Play> TwiML Verb
   */
  export interface PlayAttributes {
    /**
     * Play DTMF tones for digits
     */
    digits?: string;
    /**
     * Times to loop media
     */
    loop?: number;
  }

  /**
   * <Gather> TwiML Verb
   */
  export class Gather {
    /**
     * <Gather> TwiML Verb
     *
     * @param gather - <Gather> TwiML Verb
     */
    constructor(gather: any);

    /**
     * <Pause> TwiML Verb
     *
     * @param attributes - TwiML attributes
     */
    pause(attributes?: VoiceResponse.PauseAttributes): void;
    /**
     * <Play> TwiML Verb
     *
     * @param attributes - TwiML attributes
     * @param url - Media URL
     */
    play(attributes?: VoiceResponse.PlayAttributes, url?: string): void;
    /**
     * <Say> TwiML Verb
     *
     * @param attributes - TwiML attributes
     * @param message - Message to say
     */
    say(attributes: VoiceResponse.SayAttributes, message: string): void;
  }

  /**
   * <Enqueue> TwiML Noun
   */
  export class Enqueue {
    /**
     * <Enqueue> TwiML Noun
     *
     * @param enqueue - <Enqueue> TwiML Noun
     */
    constructor(enqueue: any);

    /**
     * <Task> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param body - TaskRouter task attributes
     */
    task(attributes: VoiceResponse.TaskAttributes, body: string): void;
  }

  /**
   * <Dial> TwiML Verb
   */
  export class Dial {
    /**
     * <Dial> TwiML Verb
     *
     * @param dial - <Dial> TwiML Verb
     */
    constructor(dial: any);

    /**
     * <Client> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Client name
     */
    client(attributes: VoiceResponse.ClientAttributes, name: string): void;
    /**
     * <Conference> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Conference name
     */
    conference(attributes: VoiceResponse.ConferenceAttributes, name: string): void;
    /**
     * <Number> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param phoneNumber - Phone Number to dial
     */
    number(attributes: VoiceResponse.NumberAttributes, phoneNumber: string): void;
    /**
     * <Queue> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param name - Queue name
     */
    queue(attributes: VoiceResponse.QueueAttributes, name: string): void;
    /**
     * <Sim> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param simSid - SIM SID
     */
    sim(attributes: VoiceResponse.SimAttributes, simSid: string): void;
    /**
     * <Sip> TwiML Noun
     *
     * @param attributes - TwiML attributes
     * @param sipUrl - SIP URL
     */
    sip(attributes: VoiceResponse.SipAttributes, sipUrl: string): void;
  }

}
export = VoiceResponse;
