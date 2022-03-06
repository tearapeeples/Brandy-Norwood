function toggleDarkMode() {
    let bodyElement = document.getElementById("main-background"); // target the body element
    let darkModeButtonElement = document.getElementById("dark-mode-btn"); // target the dark mode button
    
    if (bodyElement.style.background === "black") {
      bodyElement.style.background = "#F9EAE1"; 
      darkModeButtonElement.innerHTML = "Switch to Dark Mode";
    }
  
    else {
      bodyElement.style.background = "black"; //  
      darkModeButtonElement.innerHTML = "Switch to Light Mode";
    }
  
  }
