window.addEventListener("load", function () {
    const loadingOverlay = document.getElementById("loading-overlay");
    const content = document.querySelector(".card");
  
    setTimeout(function () {
      loadingOverlay.classList.add("hidden");
      
      setTimeout(function () {
        loadingOverlay.style.display = "none";
        content.style.opacity = "1"; // Hiển thị nội dung chính
      }, 500); // 0.5 giây là thời gian transition
    }, 2000); // 2 giây
  });
  
