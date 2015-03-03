var listReq = new XMLHttpRequest();
  //Create Variables for auth
      var showMeUser = window.localStorage.getItem("username");
      var showMePword = window.localStorage.getItem("password");
      var showMeIp = window.localStorage.getItem("ip");
      var authHeader = window.btoa(showMeUser + ":" + showMePword);
      var baseUrl = "https://" + showMeIp + "/restapi/api/referencedata/maps";