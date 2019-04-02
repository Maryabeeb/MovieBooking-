// LAWAL MARYAM ADETOUN, 10519008
$.getJSON('https://college-movies.herokuapp.com/', function (movies) {
    var htmlString = [];
    for (var i = 0; i < movies.length; i++) {
     
        var currentMovie = movies[i];
        //var movieC=currentMovie.title
        htmlString.push("<tr >");
        htmlString.push("<td id='myTd'  >");
        htmlString.push("<a id='clickableTD' href='#'onclick='getClicked()'>");

        if(currentMovie.title=="Geostorm"){
             htmlString.push("<img src='images/gs1.jpg'>");
            
        }
        else if(currentMovie.title=="The Jungle Book")
        {
            htmlString.push("<img src='images/tjb.jpg'>");
         }
         else if(currentMovie.title=="Dirty Grandpa")
         {
             htmlString.push("<img src='images/dirty.jpg'>");

          }
          else if(currentMovie.title=="Angry Birds")
          {
              htmlString.push("<img src='images/angry.jpg'>");

           }
           else if(currentMovie.title=="Finding Dory")
           {
               htmlString.push("<img src='images/fd.png'>");
              
            }
            else if(currentMovie.title=="Alice in Wonderland: Through the Looking Glass")
            {
                htmlString.push("<img src='images/alice.jpg'>");
             }
             
             else if(currentMovie.title=="Batman v Superman: Dawn of Justice")
            {
                htmlString.push("<img src='images/batman.jpg'>");
               
             }

             else if(currentMovie.title=="Kung Fu Panda 3")
            {
                htmlString.push("<img src='images/kungfu.jpg'>");

             }
             else if(currentMovie.title=="the Free State of Jones")
            {
                htmlString.push("<img src='images/StateofJones.png'>");
                
             }

             else if(currentMovie.title=="Zootopia")
            {
                htmlString.push("<img src='images/zoo.jpg'>");
               
             }
        htmlString.push(currentMovie.title);
       
        htmlString.push("</a>");
        htmlString.push("</td>");
        htmlString.push("</tr>");
    }

    var finalHTML = htmlString.join(" ")

    $('#bookinglist').append(finalHTML);
    $('#detailID').hide();
    
})

var movieClickedValue;

 function getClicked(){
var tbl = document.getElementById("tableList");
if (tbl != null) {
    for (var i = 0; i < tbl.rows.length; i++) {
        for (var j = 0; j < tbl.rows[i].cells.length; j++){
            tbl.rows[i].cells[j].onclick = function () { getval(this); };}
          
    } 
    
    
    }
function getval(name) {
    movieClickedValue=name.innerText;
    
   
    
    document.getElementById("text").innerText=movieClickedValue;
   var selectedMovie=name.innerHTML;
    saveData(selectedMovie);
    console.log(name.innerText);
   // console.log("this is transver"+document.getElementById("testing").innerHTML);

    $.getJSON('https://college-movies.herokuapp.com/', function (movies) {
    //var htmlString = [];
    for (var i = 0; i < movies.length; i++) {
     
       var Movietitle = $.trim(movieClickedValue);
       var mocount=movies[i]; var str="";
     
       //console.log(movieClickedValue)
       console.log(movies[i].title);
        if (movies[i].title == Movietitle){
        document.getElementById("year").innerHTML=movies[i].year;
        document.getElementById("director").innerHTML=movies[i].director;
        document.getElementById("cast").innerHTML=movies[i].cast;
        document.getElementById("genre").innerHTML=movies[i].genre;
        document.getElementById("notes").innerHTML=movies[i].notes;
        for(var j=0;j<movies[i].runningTimes.length;j++){
            str+=movies[i].runningTimes[j].mon+"<br/>";
            console.log(str);
        }
        document.getElementById("montimes").innerHTML= str;
        document.getElementById("tuetimes").innerHTML=generateSelect('TueTimes', 'Tuesday', movies[i].runningTimes.tue);
        document.getElementById("wedtimes").innerHTML=generateSelect('WedTimes', 'Wednesday', movies[i].runningTimes.wed);
        document.getElementById("thurtimes").innerHTML=generateSelect('ThurTimes', 'Thursday', movies[i].runningTimes.thu);
        document.getElementById("fritimes").innerHTML=generateSelect('friTimes', 'Friday', movies[i].runningTimes.fri);
        document.getElementById("sattimes").innerHTML=generateSelect('satTimes', 'Satday', movies[i].runningTimes.sat);
        document.getElementById("suntimes").innerHTML=generateSelect('sunTimes', 'Sunday', movies[i].runningTimes.sun);

        //console.log("movie details succesfully loaded");
        console.log(movieClickedValue);
      console.log("true");
        console.log(console.error());
            
        }
    
        else{
            console.log("false");
        }
    
   } 
           
       

  $('#detailID').show();
})


    }
 
}
    function saveData(detail){
        localStorage.setItem("MovieSelected",detail);
    }
    
    function generateSelect(id, day, items) {
 
        htmlString = [];
        htmlString.push(`<select id='${id}' data-day='${day}' class='movieTimes formcontrol'>`);
        htmlString.push("<option id='timing' value='Home.html'>Choose time</option");
     
        var options = items.map(x => {
     
            return `<option value='Home.html'>${x}</option>`;
     
        })
     
     
        htmlString.push(options.join(" "))
         htmlString.push("</select>");
     
        
        return htmlString.join(" ");
    }
    $('#selectionBox').on('change', '.movieTimes', function() {
 
        var element = $(this).prop('id');
        var currentTimeChosen = $(this).val();
        var currentDayChosen = $(this).data('day');
        console.log('movie time have changed for id: ' + element);
        console.log('movie time is set for : ' + currentTimeChosen);
        console.log('movie day is set for : ' + currentDayChosen);
       
            window.location.href = currentTimeChosen;

        
        
    })
