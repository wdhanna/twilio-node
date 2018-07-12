'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var _ = require('lodash');  /* jshint ignore:line */
var Holodeck = require('../../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('Domain', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': '',
                  'date_created': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'date_updated': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'domain_name': 'dunder-mifflin-scranton.api.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
                      'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .domains.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = JSON.stringify({
          'domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': '',
                  'date_created': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'date_updated': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'domain_name': 'dunder-mifflin-scranton.api.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
                      'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .domains.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/Domains.json',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = JSON.stringify({
          'domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': '',
                  'date_created': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'date_updated': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'domain_name': 'dunder-mifflin-scranton.api.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
                      'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0'
      });
      holodeck.mock(new Response(200, body));
      client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                      .sip
                      .domains.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains.list();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/Domains.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_full response',
    function() {
      var body = JSON.stringify({
          'domains': [
              {
                  'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'api_version': '2010-04-01',
                  'auth_type': '',
                  'date_created': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'date_updated': 'Fri, 06 Sep 2013 18:48:50 -0000',
                  'domain_name': 'dunder-mifflin-scranton.api.twilio.com',
                  'friendly_name': 'Scranton Office',
                  'sip_registration': true,
                  'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'subresource_uris': {
                      'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
                      'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
                  },
                  'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
                  'voice_fallback_method': 'POST',
                  'voice_fallback_url': null,
                  'voice_method': 'POST',
                  'voice_status_callback_method': 'POST',
                  'voice_status_callback_url': null,
                  'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
              }
          ],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid read_empty response',
    function() {
      var body = JSON.stringify({
          'domains': [],
          'first_page_uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0',
          'next_page_uri': null,
          'page': 0,
          'page_size': 50,
          'previous_page_uri': null,
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains.json?PageSize=50&Page=0'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains.list();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid create request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var opts = {domainName: 'domainName'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains.create(opts);
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'};
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/Domains.json')(solution);

      var values = {DomainName: 'domainName', };
      holodeck.assertHasRequest(new Request({
          method: 'POST',
          url: url,
          data: values
      }));
    }
  );
  it('should generate valid create response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'auth_type': 'IP_ACL',
          'date_created': 'Fri, 06 Sep 2013 19:18:30 -0000',
          'date_updated': 'Fri, 06 Sep 2013 19:18:30 -0000',
          'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
          'friendly_name': 'Scranton Office',
          'sip_registration': true,
          'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subresource_uris': {
              'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
              'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
          },
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_status_callback_method': 'POST',
          'voice_status_callback_url': null,
          'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
      });

      holodeck.mock(new Response(201, body));

      var opts = {domainName: 'domainName'};
      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains.create(opts);
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid fetch request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/Domains/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid fetch response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'auth_type': 'IP_ACL',
          'date_created': 'Fri, 06 Sep 2013 19:18:30 -0000',
          'date_updated': 'Fri, 06 Sep 2013 19:18:30 -0000',
          'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
          'friendly_name': 'Scranton Office',
          'sip_registration': true,
          'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subresource_uris': {
              'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
              'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
          },
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_status_callback_method': 'POST',
          'voice_status_callback_url': null,
          'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').fetch();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid update request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/Domains/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid update response',
    function() {
      var body = JSON.stringify({
          'account_sid': 'ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'api_version': '2010-04-01',
          'auth_type': 'IP_ACL',
          'date_created': 'Fri, 06 Sep 2013 19:18:30 -0000',
          'date_updated': 'Fri, 06 Sep 2013 19:18:30 -0000',
          'domain_name': 'dunder-mifflin-scranton.sip.twilio.com',
          'friendly_name': 'Scranton Office',
          'sip_registration': false,
          'sid': 'SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'subresource_uris': {
              'credential_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/CredentialListMappings.json',
              'ip_access_control_list_mappings': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/IpAccessControlListMappings.json'
          },
          'uri': '/2010-04-01/Accounts/ACaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/SIP/Domains/SDaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa.json',
          'voice_fallback_method': 'POST',
          'voice_fallback_url': null,
          'voice_method': 'POST',
          'voice_status_callback_method': 'POST',
          'voice_status_callback_url': null,
          'voice_url': 'https://dundermifflin.example.com/twilio/app.php'
      });

      holodeck.mock(new Response(200, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').update();
      promise = promise.then(function(response) {
        expect(response).toBeDefined();
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
  it('should generate valid remove request',
    function() {
      holodeck.mock(new Response(500, '{}'));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
      });
      promise.done();

      var solution = {
        accountSid: 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        sid: 'SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
      };
      var url = _.template('https://api.twilio.com/2010-04-01/Accounts/<%= accountSid %>/SIP/Domains/<%= sid %>.json')(solution);

      holodeck.assertHasRequest(new Request({
        method: 'DELETE',
        url: url
      }));
    }
  );
  it('should generate valid delete response',
    function() {
      var body = JSON.stringify(null);

      holodeck.mock(new Response(204, body));

      var promise = client.api.v2010.accounts('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                                    .sip
                                    .domains('SDXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').remove();
      promise = promise.then(function(response) {
        expect(response).toBe(true);
      }, function() {
        throw new Error('failed');
      });

      promise.done();
    }
  );
});
