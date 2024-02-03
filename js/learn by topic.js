function openTopic(evt, Name) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(Name).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

$(document).ready(function () {
  $('#tune').click(function(){
    $('#addTune').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#beef').click(function(){
    $('#addBeef').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#pork').click(function(){
    $('#addPork').slideToggle("slow");
  })
})
$(document).ready(function () {
  $('#tea').click(function(){
    $('#addTea').slideToggle("slow");
  })
})


$(document).ready(function () {
  $('#udon').click(function(){
    $('#addUdon').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#soba').click(function(){
    $('#addSoba').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#ramen').click(function(){
    $('#addRamen').slideToggle("slow");
  })
})
$(document).ready(function () {
  $('#hiya').click(function(){
    $('#addHiya').slideToggle("slow");
  })
})


$(document).ready(function () {
  $('#grilledBeef').click(function(){
    $('#addGrBe').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#chicken').click(function(){
    $('#addChick').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#eel').click(function(){
    $('#addEel').slideToggle("slow");
  })
})
$(document).ready(function () {
  $('#ginger').click(function(){
    $('#addGin').slideToggle("slow");
  })
})

$(document).ready(function () {
  $('#fried').click(function(){
    $('#addFried').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#skewer').click(function(){
    $('#addSke').slideToggle("slow");
  })
});
$(document).ready(function () {
  $('#friShrimp').click(function(){
    $('#addShrimp').slideToggle("slow");
  })
})
$(document).ready(function () {
  $('#friPork').click(function(){
    $('#addFriPork').slideToggle("slow");
  })
})