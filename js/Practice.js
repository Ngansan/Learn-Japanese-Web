function openPage(evt, pageName) {
    // Declare all variables
    var i, content, links;
  
    // Get all elements with class="content" and hide them
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
      content[i].style.display = "none";
    }
  
    // Get all elements with class="links" and remove the class "active"
    links = document.getElementsByClassName("links");
    for (i = 0; i < links.length; i++) {
      links[i].className = links[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(pageName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

// $(document).ready(function(){
//     $('.getDoc').click(function(){
//         $('.allDoc').animate("margin-left",'100px');
//     })
// })