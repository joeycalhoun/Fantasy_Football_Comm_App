	var options = 2;
	function add_option(){
	    options++;
	    var objTo = document.getElementById('options')
	    var divtest = document.createElement("div");
	    divtest.innerHTML = '<div class="form-group input-group"><input class="form-control" type="text" name="poll[option'+options+']" placeholder="option '+options+'"><div class="input-group-append"><span class="input-group-text close-button" id="deleteOption'+options+'">&#215;</span></div></div>';
	    
	    objTo.appendChild(divtest)
	}

	$("#optionGroup").on("click","span", function(event){
		var optionNumber = $(".close-button").index(this);
		event.stopPropagation();
		$(this).parent().parent().remove();
		for(var i = optionNumber; i< $('.close-button').length; i++){
			console.log("altering "+(i+2));
			// $('.close-button:nth-of-type(i)').attr("name","poll[option"+i+"]");
			$("input[type='text']:eq("+(i+3)+")").attr("placeholder","Option "+(i+3));
			$("input[type='text']:eq("+(i+3)+")").attr("name","poll[option"+(i+3)+"]");
		}
		options = options-1;
	});