// JavaScript Document
$(window).load(function() {
	
	$('h3[data-rel="back"]').click(function ()
	{
		
		handleControllPage(pageLastState,'page-home');
		
	});
	
	
	$('#suaviagem').click(function ()
	{
		
		pageLastState = 'page-'+$(this).attr('id');
		handleControllPage('page-home', pageLastState);	
		
	});
	
	
	$('#agenda').click(function ()
	{
		
		pageLastState = 'page-'+$(this).attr('id');
		handleControllPage('page-home', pageLastState);	
		
	});
	
	$('#informacoes').click(function ()
	{
		
		pageLastState = 'page-'+$(this).attr('id');
		handleControllPage('page-home', pageLastState);	
		
	});
	
	$('#oquefazer').click(function ()
	{
		
		pageLastState = 'page-'+$(this).attr('id');
		handleControllPage('page-home', pageLastState);	
		
	});
	
	$('#emergencia').click(function ()
	{
		
		pageLastState = 'page-'+$(this).attr('id');
		handleControllPage('page-home', pageLastState);	
		
	});
	
	$('#contato').click(function ()
	{
		
		pageLastState = 'page-'+$(this).attr('id');
		handleControllPage('page-home', pageLastState);	
		
	});
});
