// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));
dragElement(document.getElementById("about"));
dragElement(document.getElementById("accomplishments"));
dragElement(document.querySelector("#albumswindow"))
dragElement(document.querySelector("#importance"))
dragElement(document.querySelector("#childhood"))
dragElement(document.querySelector("#speech"))
dragElement(document.querySelector("#backgroundsAppwindow"))
dragElement(document.querySelector("#quotes"))


// Step 1: Define a function called `dragElement` that makes an HTML element draggable.
function dragElement(element) {
  // Step 2: Set up variables to keep track of the element's position.
  var initialX = 0;
  var initialY = 0;
  var currentX = 0;
  var currentY = 0;

  // Step 3: Check if there is a special header element associated with the draggable element.
  if (document.getElementById(element.id + "header")) {
    // Step 4: If present, assign the `dragMouseDown` function to the header's `onmousedown` event.
    // This allows you to drag the window around by its header.
    document.getElementById(element.id + "header").onmousedown = startDragging;
  } else {
    // Step 5: If not present, assign the function directly to the draggable element's `onmousedown` event.
    // This allows you to drag the window by holding down anywhere on the window.
    element.onmousedown = startDragging;
  }

  // Step 6: Define the `startDragging` function to capture the initial mouse position and set up event listeners.
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 7: Get the mouse cursor position at startup.
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 8: Set up event listeners for mouse movement (`elementDrag`) and mouse button release (`closeDragElement`).
    document.onmouseup = stopDragging;
    document.onmousemove = dragElement;
  }

  // Step 9: Define the `elementDrag` function to calculate the new position of the element based on mouse movement.
  function dragElement(e) {
    e = e || window.event;
    e.preventDefault();
    // Step 10: Calculate the new cursor position.
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    // Step 11: Update the element's new position by modifying its `top` and `left` CSS properties.
    const topBarBottom = document.getElementById("top").getBoundingClientRect().bottom;
    const maxTop = Math.max(topBarBottom, window.innerHeight - element.offsetHeight);
    const nextTop = element.offsetTop - currentY;

    element.style.top = Math.min(Math.max(nextTop, topBarBottom), maxTop) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }

  // Step 12: Define the `stopDragging` function to stop tracking mouse movement by removing the event listeners.
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


var welcomeScreen = document.querySelector("#welcome")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var welcomeScreenClose = document.querySelector("#welcomeclose")

var welcomeScreenOpen = document.querySelector("#welcomeopen")

welcomeScreenClose.addEventListener("click", function() {
  closeWindow(welcomeScreen);
});

welcomeScreenOpen.addEventListener("click", function() {
  openWindow(welcomeScreen);
});


var aboutScreen = document.querySelector("#about")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var aboutScreenClose = document.querySelector("#aboutclose")

var aboutScreenOpen = document.querySelector("#aboutopen")

aboutScreenClose.addEventListener("click", function() {
  closeWindow(aboutScreen);
});

aboutScreenOpen.addEventListener("click", function() {
  openWindow(aboutScreen);
});

var accomplishmentsScreen = document.querySelector("#accomplishments")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var accomplishmentsScreenClose = document.querySelector("#accomplishmentsclose")

var accomplishmentsScreenOpen = document.querySelector("#accomplishmentsopen")

accomplishmentsScreenClose.addEventListener("click", function() {
  closeWindow(accomplishmentsScreen);
});

accomplishmentsScreenOpen.addEventListener("click", function() {
  openWindow(accomplishmentsScreen);
});


var aboutScreenOpen = document.querySelector("#accomplishmentsopen")

accomplishmentsScreenClose.addEventListener("click", function() {
  closeWindow(accomplishmentsScreen);
});

accomplishmentsScreenOpen.addEventListener("click", function() {
  openWindow(accomplishmentsScreen);
});

var importanceScreen = document.querySelector("#importance")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var importanceScreenClose = document.querySelector("#importanceclose")

var importanceScreenOpen = document.querySelector("#importanceopen")

importanceScreenClose.addEventListener("click", function() {
  closeWindow(importanceScreen);
});

importanceScreenOpen.addEventListener("click", function() {
  openWindow(importanceScreen);
});


var childhoodScreen = document.querySelector("#childhood")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var childhoodScreenClose = document.querySelector("#childhoodclose")

var childhoodScreenOpen = document.querySelector("#childhoodopen")

childhoodScreenClose.addEventListener("click", function() {
  closeWindow(childhoodScreen);
});

childhoodScreenOpen.addEventListener("click", function() {
  openWindow(childhoodScreen);
});

var speechScreen = document.querySelector("#speech")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var speechScreenClose = document.querySelector("#speechclose")

var speechScreenOpen = document.querySelector("#speechopen")

speechScreenClose.addEventListener("click", function() {
  closeWindow(speechScreen);
});

speechScreenOpen.addEventListener("click", function() {
  openWindow(speechScreen);
});

var quotesScreen = document.querySelector("#quotes")

function closeWindow(element) {
  element.style.display = "none"
}

function openWindow(element) {
  element.style.display = "block"
}

var quotesScreenClose = document.querySelector("#quotesclose")

var quotesScreenOpen = document.querySelector("#quotesopen")

quotesScreenClose.addEventListener("click", function() {
  closeWindow(quotesScreen);
});

quotesScreenOpen.addEventListener("click", function() {
  openWindow(quotesScreen);
});

var selectedIcon = undefined

function selectIcon(element) {
  element.classList.add("selected");
  selectedIcon = element
} 

function deselectIcon(element) {
  element.classList.remove("selected");
  selectedIcon = undefined
}


const albums = document.getElementById('albumicon');
const albumswindowClose = document.getElementById('albumswindowClose');

if (albums) {
  albums.addEventListener('click', () => {
    albums.classList.add('selected');
    openWindow(document.getElementById('albumswindow'));
  });
}

if (albumswindowClose) {
  albumswindowClose.addEventListener('mousedown', (e) => e.stopPropagation());
  albumswindowClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeWindowById('albumswindow');
  });
}

document.addEventListener('DOMContentLoaded', () => {
  
  const appWin = document.getElementById('backgrounds-app-icon');
  if (appWin) appWin.style.display = 'none';
});

const backgroundsApp = document.getElementById('backgroundsApp');
const backgroundsAppwindowClose = document.getElementById('backgroundsAppwindowclose');

if (backgroundsApp) {
  backgroundsApp.addEventListener('click', () => {
    backgroundsApp.classList.add('selected');
    openWindow(document.getElementById('backgroundsAppwindow'));
  });
}

if (backgroundsAppwindowClose) {
  backgroundsAppwindowClose.addEventListener('mousedown', (e) => e.stopPropagation());
  backgroundsAppwindowClose.addEventListener('pointerdown', (e) => e.stopPropagation());
  backgroundsAppwindowClose.addEventListener('click', (e) => {
    e.stopPropagation();
   closeWindowById('backgroundsAppwindow');
  });
}



const regularWindows = [
  document.getElementById("welcome"),
  document.getElementById("about"),
  document.getElementById("accomplishments"),
  document.getElementById("importance"),
  document.getElementById("childhood"),
  document.getElementById("speech"),
  document.getElementById("quotes")
];

function bringWindowToFront(windowElement) {
  const index = regularWindows.indexOf(windowElement);
  regularWindows.splice(index, 1);
  regularWindows.push(windowElement);

  regularWindows.forEach((item, order) => {
    item.style.zIndex = 10 + order;
  });
}

regularWindows.forEach((windowElement, order) => {
  windowElement.style.zIndex = 10 + order;
  windowElement.addEventListener("mousedown", () => {
    bringWindowToFront(windowElement);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const wallpaperThumbs = Array.from(document.querySelectorAll('.wallpaper-thumb'));
  const saved = localStorage.getItem('beyonceos.wallpaper');
  const body = document.body;

  if (saved) {
    body.style.backgroundImage = `url('${saved}')`;
    body.style.backgroundSize = 'cover';
    wallpaperThumbs.forEach(btn => {
      if (btn.dataset && btn.dataset.url === saved) btn.classList.add('selected');
      else btn.classList.remove('selected');
    });
  }

  wallpaperThumbs.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const url = btn.dataset && btn.dataset.url;
      if (!url) return;
      body.style.backgroundImage = `url('${url}')`;
      body.style.backgroundSize = 'cover';
      localStorage.setItem('beyonceos.wallpaper', url);
      wallpaperThumbs.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });
});

function closeWindowById(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = 'none';

  if (id === 'albumswindow' && albums) {
    albums.classList.remove('selected');
  }

  if (id === 'backgroundsAppwindow' && backgroundsApp) {
    backgroundsApp.classList.remove('selected');
  }
}

document.getElementById('removeSelected')?.addEventListener('click', () => {
  if (selectedIcon) deselectIcon(selectedIcon);
});