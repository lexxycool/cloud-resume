let visitorCount = localStorage.getItem("visitorCount");

if (visitorCount === null) {
    visitorCount = 0;
}

visitorCount++;

localStorage.setItem("visitorCount", visitorCount);

document.getElementById("visitorCount").textContent = visitorCount;