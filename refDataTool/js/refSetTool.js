 function timeConverter(UNIX_timestamp){
        var a = new Date(UNIX_timestamp);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = a.getFullYear();
        var month = months[a.getMonth()];
        var date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date+' '+month+' '+year+' '+hour+':'+min+':'+sec ;
        return time;
 }
function fireEvent(type,msg) {
            var alertHTML = "<div class='alert alert-dismissable alert-" + type + "'> <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + msg + "</div>";

        $("#alertArea").html(alertHTML);
      }

function showCreds() {
      
      var showMeUser = window.localStorage.getItem("username")
      var showMePword = window.localStorage.getItem("password")
      var showMeIp = window.localStorage.getItem("ip")
      var topRight = document.getElementById("loginInfo")

      if ((showMeUser == null) || (showMeIp == null)) {
        fireEvent("danger","Not Authorized Yet");
      } else {
      

      topRight.innerHTML = showMeUser + "@" + showMeIp;

      }   
    }

//clear the storage
      function clearStorage() {
      
      //clear the storage
      localStorage.clear("username");
      localStorage.clear("password");
      localStorage.clear("ip");
      
      //visually cleared
      fireEvent("success","Storage Cleared");
      }