$(function(){
    init();
})
    


function init(){
    $('#btnbooking').on('click',function(){
        var name=$('#bookings').val();
        console.log('making booking for ${name}');
        
        saveBooking(name);
    })

    $('#btnRetrieveBooking').on('click',function(){
        retrieveBooking();
    })
}
function saveBooking(name){
    localStorage.setItem('bookings',name);
}