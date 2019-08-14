 /*
 Syntax: $('selector').event(action)
selector:
html element
html tag
id
class
attribute
value of attribute

JavaScript Object:
Defenation:
var khalid = {
	name : 'Abdul Khalek', ------------------Property
	add : function(){------------------------Method
		document.write('Hello Add');
	} 
};
Calling:
khalid.add();


 */
// var khalid = {
// 	name : 'Abdul Khalek',
// 	add : function(){
// 		document.write('Hello Add');
// 	} 
// };
// khalid.add();
$('h1').html(function() {
	$('h1').css({
		'color' : 'red',
		'font-size' : '36px',
		'background-color' : 'green',

	});
} );