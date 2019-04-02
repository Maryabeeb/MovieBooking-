//Lawal,Maryam Adetoun with the cardNo 10519008
$(function (){

    $('#proceed').on('click',function(){
        document.getElementById("myModal").style.display="block";
        
    })
    var count=0;
    
    $('.seat').on('click', function() {
        $(this).toggleClass('active','mouse');
        count++;

        document.getElementById("seatNo").innerText="Seat(s) selected: "+count;
        console.log($('#seatNo').val());
    })
    
    $('#submit').on('click',function(){
        document.getElementById("myModal").style.display="none";
        saveSeatNo(count);
        if($('#large').is(":checked"))
    {
        var qty=document.getElementById("qty");
        var no=localStorage.getItem('seatNo');
        var price=$('#jumboLabel').text().replace(/[^0-9]/gi,'');
    // Always hand in the correct base since 010 != 10 in js
        var price_int = parseInt(price,10);
      
        qty.innerText+=count;
         var total_price=(no*price_int)/100;
         document.getElementById("total").innerText+=total_price;
        console.log($('#large').is(":checked"));
        saveTicket($("#ticketDetails").innerText);
    }
    
    
    })
    $('#checkout').on('click', function() {
        chekout();
    })
    function chekout()
    { window.location.href="contact.html";}
    function saveTicket(no)
    { localStorage.setItem("Ticket",no);}
    function saveSeatNo(no)
    { localStorage.setItem("seatNo",no);}
    
});