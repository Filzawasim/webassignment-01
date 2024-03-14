//navigate to another page
function navigate(id) {
  switch (id) {
    case "res-menu":
      window.location.href = "menu.html";
      break;

    case "contact-us":
      window.location.href = "contact.html";
      break;

    case "home-pg":
      window.location.href = "index.html";
      break;
      
    case "reservation-pg":
      window.location.href = "reservation.html";
  }
}
