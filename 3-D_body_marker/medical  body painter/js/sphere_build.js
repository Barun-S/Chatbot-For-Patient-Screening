OBJ = function(){
	this.Data;
	this.Buffer;
	this.BufferIndex;
	this.BufferIndexLines;
	this.BufferIndexVertex;
	this.BufferIndexVertexNormal;
	this.BufferLineNormal;
	this.BufferNormal;
	this.BufferTexture;
	this.textureArray = [];
	this.actualTexture = 0;
	this.textureSize=[];

	this.Triangles = [];
	this.Vertex = [];
	this.Textures = [];
	
}




OBJ.prototype = {

    constructor: OBJ,

    init: function (gl, rings, segments, radius, baseColor)
	{
		var vertexPositionData = [];
		var normalData = [];
		var textureCoordData = [];
		var colorData = [];

		for (var ringsNumber = 0; ringsNumber <= rings; ringsNumber++) 
		{
			var theta = ringsNumber * Math.PI / rings;
			var sinTheta = Math.sin(theta);
			var cosTheta = Math.cos(theta);

			for (var segmentsNumber = 0; segmentsNumber <= segments; segmentsNumber++) 
			{
				var phi = segmentsNumber * 2 * Math.PI / segments;
				var sinPhi = Math.sin(phi);
				var cosPhi = Math.cos(phi);
				
				var x = cosPhi * sinTheta;
				var y = cosTheta;
				var z = sinPhi * sinTheta;
				var u = 1 - (segmentsNumber / segments);
				var v = 1 - (ringsNumber / rings);

				normalData.push(x);
				normalData.push(y);
				normalData.push(z);

				textureCoordData.push(u);
				textureCoordData.push(v);



				vertexPositionData.push(radius * x);
				vertexPositionData.push(radius * y);
				vertexPositionData.push(radius * z);

				colorData.push(baseColor[0]);
				colorData.push(baseColor[1]);
				colorData.push(baseColor[2]);
				colorData.push(baseColor[3]);

				
				this.Textures.push(new Vector2D(u, v));
				this.Vertex.push(new Vector3D(radius * x, radius * y, radius * z));
			}
		}
		var indexData = [];
		for (var ringsNumber = 0; ringsNumber < rings; ringsNumber++) 
		{
			for (var segmentsNumber = 0; segmentsNumber < segments; segmentsNumber++) 
			{
				var first = (ringsNumber * (segments + 1)) + segmentsNumber;
				var second = first + segments + 1;

				indexData.push(first);
				indexData.push(second);
				indexData.push(first + 1);

				indexData.push(second);
				indexData.push(second + 1);
				indexData.push(first + 1);

				this.Triangles.push(new Vector3D(first, second, first + 1));
				this.Triangles.push(new Vector3D(second, second + 1 , first + 1));
			}
		}
		
		
		this.Buffer = gl.createBuffer();
		this.BufferNormal = gl.createBuffer();
		this.BufferTexture = gl.createBuffer();
		this.BufferIndex = gl.createBuffer();
		this.BufferIndexLines = gl.createBuffer();
		this.BufferIndexVertex = gl.createBuffer();
		this.BufferIndexVertexNormal = gl.createBuffer();
		this.BufferLineNormal = gl.createBuffer();

		var LinesArray = [];
		for(var i =0; i< indexData.length; i = i+ 3){
			LinesArray.push(indexData[i]);
			LinesArray.push(indexData[i+1]);

			LinesArray.push(indexData[i+1]);
			LinesArray.push(indexData[i+2]);

			LinesArray.push(indexData[i]);
			LinesArray.push(indexData[i+2]);
		};


		var VertexArray = [];
		for(var i =0; i< indexData.length; i+=3){
			LinesArray.push(indexData[i]);
			LinesArray.push(indexData[i+1]);
			LinesArray.push(indexData[i+2]);
		}



		var vertexLineNormal = [];
		var indexLineNormal = [];
		for(var i = 0, j = 0; i< vertexPositionData.length; i+=3){
			vertexLineNormal.push(vertexPositionData[i]); 					
			vertexLineNormal.push(vertexPositionData[i+1]); 				
			vertexLineNormal.push(vertexPositionData[i+2]); 				

			vertexLineNormal.push(vertexPositionData[i] + normalData[i] * 0.05);
			vertexLineNormal.push(vertexPositionData[i+1] + normalData[i+1] * 0.05);
			vertexLineNormal.push(vertexPositionData[i+2] + normalData[i+2] * 0.05);

			indexLineNormal.push(j); ++j;
			indexLineNormal.push(j); ++j;
		}
		  

		this.Buffer.numItems = vertexPositionData.length;
		this.Buffer.itemSize = 3;

		this.BufferIndex.numItems = indexData.length;
		this.BufferIndex.itemSize = 1;

		this.BufferNormal.numItems = normalData.length;
		this.BufferNormal.itemSize = 3;

		this.BufferLineNormal.numItems = vertexLineNormal.length;
		this.BufferLineNormal.itemSize = 3;

		this.BufferTexture.numItems = textureCoordData.length;
		this.BufferTexture.itemSize = 2;

		this.BufferIndexLines.numItems = LinesArray.length;
		this.BufferIndexLines.itemSize = 1;

		this.BufferIndexVertex.numItems = VertexArray.length;
		this.BufferIndexVertex.itemSize = 1;

		this.BufferIndexVertexNormal.numItems = indexLineNormal.length;
		this.BufferIndexVertexNormal.itemSize = 1;





		gl.bindBuffer(gl.ARRAY_BUFFER, this.Buffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexPositionData), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferNormal);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normalData), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferTexture);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(textureCoordData), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferLineNormal);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexLineNormal), gl.STATIC_DRAW);





		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndex);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndexLines);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(LinesArray), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndexVertex);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(VertexArray), gl.STATIC_DRAW);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndexVertexNormal);
		gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexLineNormal), gl.STATIC_DRAW);







		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
		gl.bindBuffer(gl.ARRAY_BUFFER, null);







		this._loadTexture(gl);
		this.frameBuffer = gl.createFramebuffer();
	},
	

	drawWireframe: function(gl, vertexLocation, normalLocation, textureLocation){
		gl.bindTexture(gl.TEXTURE_2D, this.textureArray[this.actualTexture]);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndexLines); 
		
		if(vertexLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.Buffer); 
			gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0); 
		}
		if(normalLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferNormal);  
			gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, 0, 0);
		}
		if(textureLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferTexture); 
			gl.vertexAttribPointer(textureLocation, 2, gl.FLOAT, false, 0, 0); 
		} 
		

		gl.drawElements(gl.LINES, this.BufferIndexLines.numItems, gl.UNSIGNED_SHORT, 0);
		
	},
	
	
	draw: function(gl, vertexLocation, normalLocation, textureLocation){
		gl.bindTexture(gl.TEXTURE_2D, this.textureArray[this.actualTexture]);

		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndex);
		
		if(vertexLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.Buffer); 
			gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0); 
		}
		if(normalLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferNormal);  
			gl.vertexAttribPointer(normalLocation, 3, gl.FLOAT, false, 0, 0);
		}
		if(textureLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferTexture); 
			gl.vertexAttribPointer(textureLocation, 2, gl.FLOAT, false, 0, 0); 
		}
		
		
		gl.drawElements(gl.TRIANGLES, this.BufferIndex.numItems, gl.UNSIGNED_SHORT, 0);
	},


	drawVertex: function(gl, vertexLocation){
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndexLines);
		
		if(vertexLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.Buffer); 
			gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0);
		}		
		
		gl.drawElements(gl.POINT, this.BufferIndexLines.numItems, gl.UNSIGNED_SHORT, 0);

	},


	drawNormal: function(gl, vertexLocation){
		gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.BufferIndexVertexNormal);
		
		if(vertexLocation != -1){
			gl.bindBuffer(gl.ARRAY_BUFFER, this.BufferLineNormal); 
			gl.vertexAttribPointer(vertexLocation, 3, gl.FLOAT, false, 0, 0);
		}		
		
		gl.drawElements(gl.LINES, this.BufferIndexVertexNormal.numItems, gl.UNSIGNED_SHORT, 0);

	},


	
	_loadTexture: function(gl, size, size){
		this.textureArray.push(gl.createTexture());
		this.textureArray.push(gl.createTexture());

		gl.bindTexture(gl.TEXTURE_2D, this.textureArray[0]);

		var buffer;
		this.textureSize.push(1024);
		this.textureSize.push(1024);
		buffer = new Uint8Array(this.textureSize[0] * this.textureSize[1] * 4);

		var x;
		for (x = 0; x < this.textureSize[0] * this.textureSize[1]  * 4; ){
			buffer[x++] = 0;
			buffer[x++] = 255;
			buffer[x++] = 255;
			buffer[x++] = 255;
		}



		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.textureSize[0], this.textureSize[1], 0, gl.RGBA, gl.UNSIGNED_BYTE, buffer);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);



		gl.bindTexture(gl.TEXTURE_2D, this.textureArray[1]);

		gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, this.textureSize[0], this.textureSize[1], 0, gl.RGBA, gl.UNSIGNED_BYTE, null);

		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
		gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
		gl.bindTexture(gl.TEXTURE_2D, null);
	},

	RendertoTexture: function(gl, quad, shader, windowswidth, windowsheight, x, y){

		gl.viewport(0, 0, this.textureSize[0], this.textureSize[1]);

		

    	gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer);

    	gl.disable(gl.DEPTH_TEST);

    	gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.textureArray[1 - this.actualTexture], 0);

    	gl.clearColor(1.0,0.0,0.0,1.0);
  		gl.clear(gl.COLOR_BUFFER_BIT);


		gl.activeTexture(gl.TEXTURE0);
		gl.bindTexture(gl.TEXTURE_2D, this.textureArray[this.actualTexture]);


    	

    	shader.bind(gl);

    	gl.enableVertexAttribArray(shader.getAttLoc("aVertexPos"));
	    gl.enableVertexAttribArray(shader.getAttLoc("aTexturePosition"));


	    var uModel = Matrix.glScale($V([this.textureSize[0], this.textureSize[1], 1.0]));
	    var orthoMatrix = makeOrtho(0.0, this.textureSize[0], 0.0, this.textureSize[1], -1.0, 1.0);

    	gl.uniformMatrix4fv(shader.getUniformLoc("uModel"), false, new Float32Array(uModel.flatten()));			//Model Matrix
	    gl.uniformMatrix4fv(shader.getUniformLoc("uPMatrix"), false, new Float32Array(orthoMatrix.flatten()));  //Projection Matrix
	    gl.uniform1i(shader.getUniformLoc("tex"), 0);
	    gl.uniform1i(shader.getUniformLoc("bg"), 1);

	    quad.draw(gl, shader.getAttLoc("aVertexPos"), -1, shader.getAttLoc("aTexturePosition"));




	    var trans = Matrix.glTranslate($V([-0.5, -0.5, 0.0]));
	    var scale = Matrix.glScale($V([windowswidth * 0.1, windowsheight * 0.1, 1.0]));
	    uModel = Matrix.glTranslate($V([x * this.textureSize[0], y * this.textureSize[1], 0.0])).x(scale.x(trans));
	    gl.uniformMatrix4fv(shader.getUniformLoc("uModel"), false, new Float32Array(uModel.flatten()));			//Model Matrix
	    gl.uniformMatrix4fv(shader.getUniformLoc("uPMatrix"), false, new Float32Array(orthoMatrix.flatten()));  //Projection Matrix
	    gl.uniform1i(shader.getUniformLoc("tex"), 0);
	    gl.uniform1i(shader.getUniformLoc("bg"), 0);

	    quad.draw(gl, shader.getAttLoc("aVertexPos"), -1, shader.getAttLoc("aTexturePosition"));

	    gl.disableVertexAttribArray(shader.getAttLoc("aVertexPos"));
	    gl.disableVertexAttribArray(shader.getAttLoc("aTexturePosition"));



	    gl.enable(gl.DEPTH_TEST);
    	gl.bindFramebuffer(gl.FRAMEBUFFER, null);

    	this.actualTexture = 1 - this.actualTexture;

    	gl.viewport(0, 0, windowswidth, windowsheight);
	},

	intersection: function(origin, direction){
		var mint = 999999999, minu, minv, u, v;
		var interId = -1;


		for(var i=0;i<this.Triangles.length;++i){
			var p0 = this.Triangles[i].x, p1 = this.Triangles[i].y, p2 = this.Triangles[i].z;

			var inter = Ray_Triangle(this.Vertex[p0], this.Vertex[p1], this.Vertex[p2], 
										origin, direction);


			if(inter != null && inter.t < mint){
				mint = inter.t;
				minu = inter.u;
				minv = inter.v;
				interId = i;
			}
		}

		if(mint != 999999999){

			var p0 = this.Triangles[interId].x, p1 = this.Triangles[interId].y, p2 = this.Triangles[interId].z;

			s = (1 - minu - minv) * this.Textures[p0].x + minu * this.Textures[p1].x + minv * this.Textures[p2].x; 
			t = (1 - minu - minv) * this.Textures[p0].y + minu * this.Textures[p1].y + minv * this.Textures[p2].y; 
			return {s: s, t: t};
		}

		return null;
	}
};


