(function(){
  function init(){
	  var widget = '.wim-signup';
	  addFocusEvents(widget);
	  addErrorEvents(widget);
	  hideLabels(widget);
	  
  }
  
  function addFocusEvents(sel){
	  var inattr;

	 jQuery(sel).find('input').focus(function(){
		jQuery(this).closest('.row').addClass('focus'); 
		inattr = jQuery(this).attr('id');
		jQuery('label[for="'+inattr+'"]').show();	
	 }).blur(function(){
		jQuery(this).closest('.row').removeClass('focus'); 
		jQuery('label[for="'+inattr+'"]').hide();
	 });
  }
 
  function addErrorEvents(sel){
	 jQuery(sel).find('input').keyup(function(){
		 if (jQuery(this).is(':valid')){
			 jQuery(this).next('.wim-error').hide();
			 jQuery(this).closest('.row').addClass('ok');
		 }
		 else{
			jQuery(this).next('.wim-error').show();
			 jQuery(this).closest('.row').removeClass('ok');
		 }
	 });
  }
  
  function hideLabels(sel){
		jQuery(sel).find('label').hide();
		jQuery(sel).find('.wim-error').hide();  
  }
  
  
	
	
	jQuery(document).ready(function(){
		init();
		console.log("ready");
	});

})();

console.log("outer");
