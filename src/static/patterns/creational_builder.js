const BUILDER = {
  id: 'builder',
  name: 'Builder',
  type: 'creational',
  hint: 'Separates object construction from its representation',
  description: `Separate how object is created from its representation,
    so the same process of creation can generate different representations.`,
  use: `algorithm of creation is independent of the parts of the object`,
  codeES5: `function Request() {
  this.url = '';
  this.method = '';
  this.payload = {};
}

function RequestPattern() {
  this.request = new Request();

  this.forUrl = function(url) {
    this.request.url = url;
    return this;
  };

  this.useMethod = function(method) {
    this.request.method = method;
    return this;
  };

  this.payload = function(payload) {
    this.request.payload = payload;
    return this;
  };

  this.build = function() {
    return this.request;
  };
}

module.exports = RequestPattern;`,
  codeES6: `class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestPattern {
  constructor() {
    this.request = new Request();
  }

  forUrl(url) {
    this.request.url = url;
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

export default RequestPattern;`
};

export default BUILDER;
