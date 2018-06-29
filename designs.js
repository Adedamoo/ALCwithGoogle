	// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
var color; 
var width; 
var height;

$('#sizePicker').on('submit', function(event){
event.preventDefault();
color= $('#colorPicker').val();
width= $('#inputWeight').val();
height= $('#inputHeight').val();
makeGrid(height, width);
});

function makeGrid(x,y) {

// Your code goes here!
$('tr').remove();
for (i=1;i<=x; i++){
    $('#pixelCanvas').append('<tr id=table'+i+'></tr>');
    for(d=1;d<=y;d++){
        $('tr:last').append('<td></td>');
    
        
    }
}

$('td').click(function addColor(){
    color = $('#colorPicker').val();
    if ($(this).attr('style')) {
        $(this).removeAttr('style')
    } else {
        $(this).css('background-color',color);
    }
})
}