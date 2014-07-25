$(document).ready(function(){
	$('.title').each(function(){
		
	})
	$('[data-type="background"]').each(function(){
		var $bgobject = $(this);
		$(window).scroll(function(){
			
			var objectPos = -($(window).scrollTop() / $bgobject.data('speed'));
			var movDirection = $bgobject.data('direction');
			if(movDirection == 'vertical') {
				var coords = '50% ' + objectPos + 'px';
			} 
			
			
			
			else if(movDirection == 'horizontal') {
				var coords =  objectPos + 'px' + ' 50%';
				console.log(coords);
			}
			
			
			
			$bgobject.css({
				backgroundPosition: coords
			});
		});
	});
	
	

});