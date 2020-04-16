window.onload = function() {
  const htmlNav =
    '<nav class="nav-pad navbar navbar-expand-lg navbar-light bg-light">' +
    '<a class="navbar-brand" href="#"><img src="./res/img/workfront-orange.svg"/></a>' +
    '<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">' +
    '<span class="navbar-toggler-icon"></span>' +
    "</button>" +
    '<div class="justify-content-end collapse navbar-collapse" id="navbarSupportedContent">' +
    '<ul class="navbar-nav">' +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#">Why Workfront</a>' +
    "</li>" +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Solutions" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" href="#">All Solutions</a>' +
    '<a class="dropdown-item" href="#">Marketing</a>' +
    '<a class="dropdown-item" href="#">IT</a>' +
    '<a class="dropdown-item" href="#">Agencies</a>' +
    '<a class="dropdown-item" href="#">Professional Services</a>' +
    '<a class="dropdown-item" href="#">Product Development</a>' +
    '<div class="dropdown-divider"></div>' +
    '<a class="dropdown-item" href="#">Something else here</a>' +
    "</div>" +
    "</li>" +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Products" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" href="#">All Products</a>' +
    '<a class="dropdown-item" href="#">Workfront</a>' +
    '<a class="dropdown-item" href="#">Workfront Fusion</a>' +
    '<a class="dropdown-item" href="#">Workfront Library</a>' +
    '<a class="dropdown-item" href="#">Integrations</a>' +
    "" +
    "</div>" +
    "</li>" +
    '<li class="nav-item">' +
    '<a class="nav-link" href="#" tabindex="-1" aria-disabled="false">Plans</a>' +
    "</li>" +
    '<li class="nav-item dropdown">' +
    '<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">' +
    "Resources" +
    "</a>" +
    '<div class="dropdown-menu" aria-labelledby="navbarDropdown">' +
    '<a class="dropdown-item" href="#">All Resources</a>' +
    '<a class="dropdown-item" href="#">Blog</a>' +
    '<a class="dropdown-item" href="#">Knowledge areas</a>' +
    '<a class="dropdown-item" href="#">Events</a>' +
    '<a class="dropdown-item" href="#">Webinars</a>' +
    '<a class="dropdown-item" href="#">Ebooks & Whitepapers</a>' +
    '<a class="dropdown-item" href="#">Videos</a>' +
    '<a class="dropdown-item" href="#">Reports</a>' +
    '<a class="dropdown-item" href="#">Case Studies</a>' +
    '<div class="dropdown-divider"></div>' +
    '<a class="dropdown-item" href="#">Service and Support</a>' +
    '<a class="dropdown-item" href="#">System status</a>' +
    '<a class="dropdown-item" href="#">Help</a>' +
    '<a class="dropdown-item" href="#">Community</a>' +
    '<a class="dropdown-item" href="#">Idea Exchange</a>' +
    '<a class="dropdown-item" href="#">Training</a>' +
    "</div>" +
    "</li>" +
    "</ul>" +
    "</div>" +
    "</nav>";
  document.getElementById("cont-nav").innerHTML = htmlNav;
  //END NAV//

  //SIDEBAR//
  let pageTitles = [
    "Home",
    "Projects",
    "Tasks",
    "Issues",
    "Users",
    "Documents",
    "Other objects and endpoints",
    "All objects and endpoints",
    "Test"
  ];

  let pageUrls = [
    "index",
    "projects",
    "tasks",
    "issues",
    "users",
    "documents",
    "other",
    "general",
    "test"
  ];

 for (x = 0; x<pageUrls.length; x++) { 

    $('#side-menu').append(
         '<li class="nav-item menu-nav-li">' +
          '<a class="nav-link" id="'+ pageTitles[x] +'"href="./'+pageUrls[x]+'.html">' +pageTitles[x] +
          "</a>" +
          "</li>")
 }
  //END SIDEBAR//

  //Current Page Functions//
  sideMenuCurrentClass();

  currentPageTitle();

  function sideMenuCurrentClass() {
    let pageId = document.getElementById("title").text;
    for (i = 0; i < pageTitles.length; i++) {
      if (pageId === pageTitles[i]) {
        let navId = document.getElementById(pageTitles[i]);
        navId.classList.add("active");
      }
    }
  }
  function currentPageTitle() {
    let pageId = document.getElementById("title").text;
    for (y = 0; y < pageTitles.length; y++) {
      if (pageId === pageTitles[y]) {
        let pageTitle = document.getElementById('cur-page-title');
        pageTitle.append('Developer Documentation: '+pageTitles[y]);
      }
    }
  }
};
