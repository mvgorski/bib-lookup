$(document).ready(function() {

	$("#runner-name-search").keyup(function(){

		// console.log($('#runner-name-search').val());

		var value = $(this).val();
	    var exp = new RegExp(value, 'i');

	    $.ajax({
	        type : 'GET',
	        dataType : 'json',
	        url: 'surf-city-bib.json',
	        success: function(data){

	        	console.log(exp);
        		var output = '<div id="bib-display">';

        	
        		$.each(data, function(index,key) {
        			
        			// console.log(data["First Name"]);

    			
        			if (key["First Name"].search(exp) != -1) {
        				
        				output += '<img src="" class="img-responsive center-block" alt="Run Surf City Bib Number">';
        				output += '<div id="bib-number">'+key["Bib Number"]+'</div>';
        				output += '<div id="bib-name">'+key["First Name"]+' '+key["Last Name"]+'</div>';
        				output += '</div>';

        				console.log('success');
        			}
	
        		}); // each
				
				


	          
	        } // success

	    }); // ajax

	}); // keyup

}); // ready	