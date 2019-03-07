const BUILDER = {
  id: 'builder',
  name: 'Builder',
  type: 'creational',
  hint: 'constructs complex objects by separating construction and representation',
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
