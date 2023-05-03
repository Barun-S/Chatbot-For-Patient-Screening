/**
 * @class ShaderMaterial
 * @extends Material
 * @constructor
 * @param {String} id
 * @param {String} vertex
 * @param {String} fragment
 */
Shader = function(id, vertex, fragment) {

  this.program;
  this._id = id;
  this._vertex = vertex;
  this._fragment = fragment;
  this._uniform = {};
  this._attributes = {};
};


Shader.prototype = {

  constructor: Shader,

  compileShader: function(gl) {
    var fs = this._getShader(gl, this._fragment);
    var vs = this._getShader(gl, this._vertex);
    
    
    this.program = gl.createProgram();
    gl.attachShader(this.program, vs);
    gl.attachShader(this.program, fs);
    gl.linkProgram(this.program);
    
    
    if (!gl.getProgramParameter(this.program, gl.LINK_STATUS)) {
      alert("Unable to initialize the shader program.");
    }


    gl.useProgram(this.program);
    this._loadUniforms(gl);
    this._loadAttributes(gl);
  },


  _getShader:  function(gl, id) {
    var shaderScript = document.getElementById(id);
    
    
    if (!shaderScript) {
      return null;
    }
    
    
    var theSource = "";
    var currentChild = shaderScript.firstChild;
    
    while(currentChild) {
      if (currentChild.nodeType == 3) {
        theSource += currentChild.textContent;
      }
      
      currentChild = currentChild.nextSibling;
    }
    
    
    var shader;
    
    if (shaderScript.type == "x-shader/x-fragment") {
      shader = gl.createShader(gl.FRAGMENT_SHADER);
    } else if (shaderScript.type == "x-shader/x-vertex") {
      shader = gl.createShader(gl.VERTEX_SHADER);
    } else {
      return null;  
    }
    
    
    gl.shaderSource(shader, theSource);
    
    
    gl.compileShader(shader);
    
    
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      alert("An error occurred compiling the shaders: " + gl.getShaderInfoLog(shader));
      return null;
    }
    
    return shader;
  },




  bind: function(gl) {
    gl.useProgram(this.program);
  },


  _loadUniforms: function(gl) {
    var uniforms = gl.getProgramParameter(this.program, gl.ACTIVE_UNIFORMS);
    var name;
    var k;

    for (k = 0; k < uniforms; k++) {
      name = gl.getActiveUniform(this.program, k).name;
      this._uniform[name] = gl.getUniformLocation(this.program, name);
    }
  },


  _loadAttributes: function(gl) {
    var attributes = gl.getProgramParameter(this.program, gl.ACTIVE_ATTRIBUTES);
    var name;
    var k;

    for (k = 0; k < attributes; k++) {
      name = gl.getActiveAttrib(this.program, k).name;
      this._attributes[name] = gl.getAttribLocation(this.program, name);
    }
  },


  getUniformLoc: function(name) {
    if(this._uniform[name] !== null) return this._uniform[name];
  },

  getAttLoc: function(name) {
    if(this._attributes[name] !== null) return this._attributes[name];
  }
}