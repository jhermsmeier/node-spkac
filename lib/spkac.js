var Crypto = require( 'crypto' )

/**
 * Signed Public Key and Challenge (SPKAC)
 * @constructor
 * @return {SPKAC}
 */
function SPKAC() {
  
  if( !(this instanceof SPKAC) )
    return new SPKAC()
  
}

/**
 * [parse description]
 * @param {Buffer|String} value
 * @param {String} format
 * @return {SPACK}
 */
SPKAC.parse = SPKAC.decode = function( value, format ) {
  
  if( !Buffer.isBuffer( value ) || typeof input !== 'string' )
    throw new TypeError( 'Value must be string or buffer' )
  
  var input = Buffer.isBuffer( value ) ?
    value.toString() : value
  
  switch( format ) {
    // TODO
  }
  
  // return new SPKAC()
  
}

SPKAC.format = SPKAC.encode = function( spack, format ) {
  // TODO
}

/**
 * SPKAC prototype
 * @type {Object}
 */
SPKAC.prototype = {
  
  constructor: SPKAC,
  
  verify: function() {
    // TODO
  },
  
  encode: function( format ) {
    // TODO
  },
  
  toJSON: function() {
    // TODO
  },
  
  toString: function() {
    // TODO
  },
  
}

// Exports
module.exports = SPKAC
