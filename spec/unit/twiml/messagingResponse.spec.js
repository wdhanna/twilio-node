var MessagingResponse = require('../../../lib/twiml/MessagingResponse');

describe('create messaging response TwiML', function() {

  it('should serialize empty response', function() {
    var actual = new MessagingResponse();
    expect(actual.toString()).toEqual('<?xml version="1.0"?><Response/>');
  });

  it('should serialize a single message', function() {
    var actual = new MessagingResponse();
    actual.message({
      to: '18885551234',
      from: '18885554321'
    }, 'foobar');
    expect(actual.toString()).toEqual('');
  });

  it('should serialize multiple messages', function() {
    var actual = new MessagingResponse();
    actual.message({
      to: '18885551234',
      from: '18885554321'
    }, 'foobar');
    actual.message({
      to: '11234567890',
      from: '10987654321'
    });
    expect(actual.toString()).toEqual('');
  });

  it('should serialse a redirect', function() {

  });


});