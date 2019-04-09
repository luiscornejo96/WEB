function show(bloq) 
{
    obj = document.getElementById(bloq);
    obj.style.display = (obj.style.display=='none') ? 'block' : 'none';
}
if ($('#precio2').is(':show'))
	$('#precio1').show();
	else
	$('#precio1').hide();