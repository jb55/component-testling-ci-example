
var parents = require('parents');
var assert = require('assert');

describe('parents', function(){
  it('1 element if element is body', function(){
    var pars = parents(document.body);
    assert(pars.length === 1);
    assert(pars[0].tagName === 'HTML');
  });

  it('2 elements if element has body as root', function(){
    var p = document.createElement('p');
    document.body.appendChild(p);
    var pars = parents(p)
    assert(pars.length === 2, pars.length);
    assert(pars[0].tagName === 'BODY', pars[0].tagName);
  });
});

