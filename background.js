chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "POST_PROFILE") {
    fetch("http://localhost:3000/profiles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message.profile),
    })
      .then((response) => response.json())
      .then((data) => console.log("Profile saved:", data))
      .catch((error) => console.error("Error:", error));
  }
});
