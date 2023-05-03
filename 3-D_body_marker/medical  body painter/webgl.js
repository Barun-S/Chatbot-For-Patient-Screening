
var canvas;
var gl;


var WindowWidth, WindowHeight, ncp = 0.1, fcp = 20;

var perspectiveMatrix, orthoMatrix = makeOrtho(0.0, 1.0, 0.0, 1.0, -1.0, 1.0);

var shTexture, shaderNormal, shaderTextureFS, shaderFlatColor, shaderPaint; //Shaders
var quad = null, OBJobject = null;


var translate = new Vector3D(0.0,0.0,0.0);
var scale = 1.0;

var pressed = -1;
var lastx, lasty;
var quaternion = new Quaternion(0.0, 0.0, 0.0, 1.0), q2 = new Quaternion(0.0, 0.0, 0.0, 1.0);
var shiftKey = false;
var imageTexture = new Image(), imageBlur;
var Brush;


function clickToPaint(xx,yy){

  if(menuText.TexturedView){
      lastx = xx/WindowWidth;
      lasty = (WindowHeight - yy)/WindowHeight;

      OBJobject.RendertoTexture(gl, quad, shaderPaint, WindowWidth, WindowHeight, lastx, lasty, Brush); 
  }else{
      var direction = $V([(lastx - 0.5), (lasty - 0.5), -1.0, 0.0]).toUnitVector(); 
      var origin = $V([0.0, 0.0, 0.0, 1.0]); 
      
      quaternion.normalize();
      var RotarioMat = quaternion.toMat4();
      var trans2 = Matrix.glTranslate($V([translate.x, translate.y, -3.0 + translate.z]));
      var scaleMat = Matrix.glScale($V([scale, scale, scale]));
      uModelMatrix = trans2.x(RotarioMat.x(scaleMat));
      var invModelMatrix = uModelMatrix.inverse();
      origin = invModelMatrix.x(origin);
      direction = invModelMatrix.x(direction).toUnitVector();

      origin = new Vector3D(origin.elements[0], origin.elements[1], origin.elements[2]);
      direction = new Vector3D(direction.elements[0], direction.elements[1], direction.elements[2]);

      //calculate the click 
      click = OBJobject.intersection(origin, direction);

      if(click != null) OBJobject.RendertoTexture(gl, quad, shaderPaint, WindowWidth, WindowHeight, click.s, click.t, Brush); 
  }
}





let v = [];
function openF(e){




  v.push(e.target.files[0]);
  var reader = new FileReader();

  reader.addEventListener("load", function(event) {
      console.log(event);
      OBJobject.loadModel(event.target.result);
    });
    
  
  reader.readAsText(v[v.length-1]);
}


function loadbody(){
  var reader = new FileReader();

  reader.addEventListener("load", function(event) {
      console.log(event);
      OBJobject.loadModel(event.target.result);
    });
    
  
  reader.readAsText(v[0]);
}

function loadupperbody(){
  var reader = new FileReader();

  reader.addEventListener("load", function(event) {
      console.log(event);
      OBJobject.loadModel(event.target.result);
    });
    
  
  reader.readAsText(v[1]);
}

function loadlowerbody(){
  var reader = new FileReader();

  reader.addEventListener("load", function(event) {
      console.log(event);
      OBJobject.loadModel(event.target.result);
    });
    
  
  reader.readAsText(v[2]);
}

function save() {
  const canvas =  document.getElementsByTagName("canvas")[0]
  const image = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = image.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
  a.download="image.png"
  a.click();
}


function start2() {
	
  canvas = document.getElementById("glcanvas");
  canvas.addEventListener("webglcontextlost", function(event) {
            event.preventDefault();
          }, false);
      
  WindowWidth = canvas.width;
  WindowHeight = canvas.height;
  

  initWebGL(canvas);      


  
  if (gl) {
	var ext = gl.getExtension('OES_element_index_uint');
  
    gl.viewport(0,0,WindowWidth,WindowHeight);

    gl.clearColor(0.0, 0.0, 0.0, 1.0); 
    gl.clearDepth(1.0);                
    gl.enable(gl.DEPTH_TEST);           
    gl.depthFunc(gl.LEQUAL);           
    
    initShaders();

    
    perspectiveMatrix = makePerspective(45.0, WindowWidth/WindowHeight, ncp, fcp);
     

  	quad = new Quad(gl);


  	OBJobject = new OBJ(gl);
    Brush = new brushTexture(gl);
  	OBJobject.initSpehere(gl, 20, 20, 0.5, [1.0, 1.0, 1.0, 1.0]);



    imageTexture.addEventListener("load", 
                      function(){
                        OBJobject.loadFromImage(gl, imageTexture);
                      }, false);

 
    var color = new Vector3D(1.0,0.0,1.0);
    Brush.loadFromImage(gl);



    canvas.addEventListener('mousedown', mousedown, false);
    canvas.addEventListener('mouseup', mouseup, false);
    canvas.addEventListener('mouseleave', mouseleave, false);
    canvas.addEventListener('mousemove', mousemove, false);


    window.addEventListener('keydown', keydown, false);
    window.addEventListener('keyup', keyup, false);


    setInterval(drawScene, 1);
    loadupperbody();
    
  }else{
    console.log("Your browser doesn't support WebGL");
  }
}

function start3() {
	
  canvas = document.getElementById("glcanvas");
  canvas.addEventListener("webglcontextlost", function(event) {
            event.preventDefault();
          }, false);
      
  WindowWidth = canvas.width;
  WindowHeight = canvas.height;
  

  initWebGL(canvas);    


  
  if (gl) {
	var ext = gl.getExtension('OES_element_index_uint');
  
    gl.viewport(0,0,WindowWidth,WindowHeight);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);  
    gl.clearDepth(1.0);                 
    gl.enable(gl.DEPTH_TEST);          
    gl.depthFunc(gl.LEQUAL);            
    
    initShaders();

    
    perspectiveMatrix = makePerspective(45.0, WindowWidth/WindowHeight, ncp, fcp);
     

  	quad = new Quad(gl);


  	OBJobject = new OBJ(gl);
    Brush = new brushTexture(gl);
  	OBJobject.initSpehere(gl, 20, 20, 0.5, [1.0, 1.0, 1.0, 1.0]);



    imageTexture.addEventListener("load", 
                      function(){
                        OBJobject.loadFromImage(gl, imageTexture);
                      }, false);

 
    var color = new Vector3D(1.0,0.0,1.0);
    Brush.loadFromImage(gl);



    canvas.addEventListener('mousedown', mousedown, false);
    canvas.addEventListener('mouseup', mouseup, false);
    canvas.addEventListener('mouseleave', mouseleave, false);
    canvas.addEventListener('mousemove', mousemove, false);


    window.addEventListener('keydown', keydown, false);
    window.addEventListener('keyup', keyup, false);



    setInterval(drawScene, 1);
    loadbody();
    
  }else{
    console.log("Your browser doesn't support WebGL");
  }
}

function start4() {
	
  canvas = document.getElementById("glcanvas");
  canvas.addEventListener("webglcontextlost", function(event) {
            event.preventDefault();
          }, false);
      
  WindowWidth = canvas.width;
  WindowHeight = canvas.height;
  

  initWebGL(canvas);      


  
  if (gl) {
	var ext = gl.getExtension('OES_element_index_uint');
  
    gl.viewport(0,0,WindowWidth,WindowHeight);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);  
    gl.clearDepth(1.0);                 
    gl.enable(gl.DEPTH_TEST);          
    gl.depthFunc(gl.LEQUAL);            

    initShaders();

    
    perspectiveMatrix = makePerspective(45.0, WindowWidth/WindowHeight, ncp, fcp);
     

  	quad = new Quad(gl);


  	OBJobject = new OBJ(gl);
    Brush = new brushTexture(gl);
  	OBJobject.initSpehere(gl, 20, 20, 0.5, [1.0, 1.0, 1.0, 1.0]);



    imageTexture.addEventListener("load", 
                      //Handle new image on load
                      function(){
                        OBJobject.loadFromImage(gl, imageTexture);
                      }, false);

 
    var color = new Vector3D(1.0,0.0,1.0);
    Brush.loadFromImage(gl);



    canvas.addEventListener('mousedown', mousedown, false);
    canvas.addEventListener('mouseup', mouseup, false);
    canvas.addEventListener('mouseleave', mouseleave, false);
    canvas.addEventListener('mousemove', mousemove, false);


    window.addEventListener('keydown', keydown, false);
    window.addEventListener('keyup', keyup, false);


    setInterval(drawScene, 1);
    loadlowerbody();
    
  }else{
    console.log("Your browser doesn't support WebGL");
  }
}

function start() {
	
  canvas = document.getElementById("glcanvas");
  canvas.addEventListener("webglcontextlost", function(event) {
            event.preventDefault();
          }, false);
      
  WindowWidth = canvas.width;
  WindowHeight = canvas.height;
  

  initWebGL(canvas);     

 
  
  if (gl) {
	var ext = gl.getExtension('OES_element_index_uint');
  
    gl.viewport(0,0,WindowWidth,WindowHeight);

    gl.clearColor(0.0, 0.0, 0.0, 1.0);  
    gl.clearDepth(1.0);                 
    gl.enable(gl.DEPTH_TEST);           
    gl.depthFunc(gl.LEQUAL);            
    

    initShaders();

    
    perspectiveMatrix = makePerspective(45.0, WindowWidth/WindowHeight, ncp, fcp);
     

  	quad = new Quad(gl);


  	OBJobject = new OBJ(gl);
    Brush = new brushTexture(gl);
  	OBJobject.initSpehere(gl, 20, 20, 0.5, [1.0, 1.0, 1.0, 1.0]);



    imageTexture.addEventListener("load", 

                      function(){
                        OBJobject.loadFromImage(gl, imageTexture);
                      }, false);

 
    var color = new Vector3D(1.0,0.0,1.0);
    Brush.loadFromImage(gl);



    canvas.addEventListener('mousedown', mousedown, false);
    canvas.addEventListener('mouseup', mouseup, false);
    canvas.addEventListener('mouseleave', mouseleave, false);
    canvas.addEventListener('mousemove', mousemove, false);


    window.addEventListener('keydown', keydown, false);
    window.addEventListener('keyup', keyup, false);


    // createMenu();


	
    
    setInterval(drawScene, 1);
  }else{
    console.log("Your browser doesn't support WebGL");
  }
}


function initWebGL() {
  gl = null;

  
  try {
    gl = canvas.getContext("experimental-webgl");
  }
  catch(e) {
  }

  
  if (!gl) {
    alert("Unable to initialize WebGL. Your browser may not support it.");
  }
}



function drawScene() {
  

  if(menuText.TexturedView){
  	gl.clearColor(0.0,0.0,0.0,0.0);
  	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    

    shaderTextureFS.bind(gl);
    
    gl.activeTexture(gl.TEXTURE0);
    gl.bindTexture(gl.TEXTURE_2D, OBJobject.textureArray[OBJobject.actualTexture]);

    gl.enableVertexAttribArray(shaderTextureFS.getAttLoc("aVertexPos"));
    gl.enableVertexAttribArray(shaderTextureFS.getAttLoc("aTexturePosition"));

    gl.uniformMatrix4fv(shaderTextureFS.getUniformLoc("uPMatrix"), false, new Float32Array(orthoMatrix.flatten()));
    var uModel = Matrix.I(4);
    gl.uniformMatrix4fv(shaderTextureFS.getUniformLoc("uModel"), false, new Float32Array(uModel.flatten()));
    gl.uniform1i(shaderTextureFS.getUniformLoc("tex"), 0);

    quad.draw(gl, shaderTextureFS.getAttLoc("aVertexPos"), -1, shaderTextureFS.getAttLoc("aTexturePosition"));

    gl.disableVertexAttribArray(shaderTextureFS.getAttLoc("aVertexPos"));
    gl.disableVertexAttribArray(shaderTextureFS.getAttLoc("aTexturePosition"));






    shTexture.bind(gl);

    gl.enableVertexAttribArray(shTexture.getAttLoc("aTexturePosition"));

    gl.uniformMatrix4fv(shTexture.getUniformLoc("uPMatrix"), false, new Float32Array(orthoMatrix.flatten()));

    OBJobject.drawWireframe(gl, -1, -1, shTexture.getAttLoc("aTexturePosition"));

    gl.disableVertexAttribArray(shTexture.getAttLoc("aVertexPos"));
		
  }else{
  	gl.clearColor(0.15,0.15,0.15,1.0);
  	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);


    shaderNormal.bind(gl);

    gl.activeTexture(gl.TEXTURE0);

    gl.enableVertexAttribArray(shaderNormal.getAttLoc("aVertexPos"));
    gl.enableVertexAttribArray(shaderNormal.getAttLoc("aNormalPosition"));
    gl.enableVertexAttribArray(shaderNormal.getAttLoc("aTexturePosition"));

    gl.uniformMatrix4fv(shaderNormal.getUniformLoc("uPMatrix"), false, new Float32Array(perspectiveMatrix.flatten()));
    var uViewMatrix = Matrix.I(4);
    gl.uniformMatrix4fv(shaderNormal.getUniformLoc("uViewMatrix"), false, new Float32Array(uViewMatrix.flatten()));

    quaternion.normalize();
    var RotarioMat = quaternion.toMat4();
    var trans2 = Matrix.glTranslate($V([translate.x, translate.y, -3.0 + translate.z]));
    var scaleMat = Matrix.glScale($V([scale, scale, scale]));
    uModelMatrix = trans2.x(RotarioMat.x(scaleMat));

    gl.uniformMatrix4fv(shaderNormal.getUniformLoc("uModelMatrix"), false, new Float32Array(uModelMatrix.flatten()));
    gl.uniform1i(shaderNormal.getUniformLoc("light"), menuText.light);
    gl.uniform1i(shaderNormal.getUniformLoc("texture"), menuText.texture);
    gl.uniform1i(shaderNormal.getUniformLoc("tex"), 0);


    if(!menuText.wireframe){
    	OBJobject.draw(gl, shaderNormal.getAttLoc("aVertexPos"), shaderNormal.getAttLoc("aNormalPosition"), shaderNormal.getAttLoc("aTexturePosition"));
    }else{
    	OBJobject.drawWireframe(gl, shaderNormal.getAttLoc("aVertexPos"), shaderNormal.getAttLoc("aNormalPosition"), shaderNormal.getAttLoc("aTexturePosition"));
	}

	gl.disableVertexAttribArray(shaderNormal.getAttLoc("aVertexPos"));
    gl.disableVertexAttribArray(shaderNormal.getAttLoc("aNormalPosition"));
    gl.disableVertexAttribArray(shaderNormal.getAttLoc("aTexturePosition"));








	shaderFlatColor.bind(gl);

	gl.enableVertexAttribArray(shaderFlatColor.getAttLoc("aVertexPos"));

	gl.uniformMatrix4fv(shaderFlatColor.getUniformLoc("uPMatrix"), false, new Float32Array(perspectiveMatrix.flatten()));
	gl.uniformMatrix4fv(shaderFlatColor.getUniformLoc("uViewMatrix"), false, new Float32Array(uViewMatrix.flatten()));
	gl.uniformMatrix4fv(shaderFlatColor.getUniformLoc("uModelMatrix"), false, new Float32Array(uModelMatrix.flatten()));
	
    if(menuText.vertex){
    	gl.uniform3f(shaderFlatColor.getUniformLoc("color"), 1.0, 0.0, 0.0);
    	OBJobject.drawVertex(gl, shaderFlatColor.getAttLoc("aVertexPos"));
    }
    
    if(menuText.normal){
    	gl.uniform3f(shaderFlatColor.getUniformLoc("color"), 0.0, 0.0, 1.0);
    	OBJobject.drawNormal(gl, shaderFlatColor.getAttLoc("aVertexPos"));
    }

    gl.disableVertexAttribArray(shaderFlatColor.getAttLoc("aVertexPos"));
    gl.disableVertexAttribArray(shaderFlatColor.getAttLoc("aNormalPosition"));
    gl.disableVertexAttribArray(shaderFlatColor.getAttLoc("aTexturePosition"));
  }
}

function initShaders() {
  
  shTexture = new Shader("Object to texture space", "textureSpaceObjectRender-vs", "textureSpaceObjectRender-fs");
  shTexture.compileShader(gl);
  shTexture.bind(gl);


  shaderNormal = new Shader("Normal Rendering", "shader-vs", "shader-fs");
  shaderNormal.compileShader(gl);
  shaderNormal.bind(gl);


  shaderTextureFS = new Shader("Normal Rendering", "textureRender-vs", "textureRender-fs");
  shaderTextureFS.compileShader(gl);
  shaderTextureFS.bind(gl);

  shaderFlatColor = new Shader("Flat color Rendering", "flatcolor-vs", "flatcolor-fs");
  shaderFlatColor.compileShader(gl);
  shaderFlatColor.bind(gl);

  shaderPaint = new Shader("Paint Rendering", "paint-vs", "paint-fs");
  shaderPaint.compileShader(gl);
  shaderPaint.bind(gl);

}
