/*document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("fetch-button")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        alert("Current Tab Title: " + activeTab.title);
        window.close();
      });
    });
});*/
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("fetch-button")
    .addEventListener("click", function () {
      chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        var activeTab = tabs[0];
        var tabTitle = activeTab.title;
        document.getElementById("tab-title").textContent = tabTitle;
        document.getElementById("myModal").style.display = "block";
      });
    });

  document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("myModal").style.display = "none";
    window.close();
  });
});
