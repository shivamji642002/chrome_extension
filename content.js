window.addEventListener("load", () => {
  const name = document.querySelector(
    ".pv-text-details__left-panel h1"
  ).innerText;
  const url = window.location.href;
  const about = document.querySelector(".pv-about__summary-text").innerText;
  const bio = document.querySelector(".text-body-medium.break-words").innerText;
  const location = document.querySelector(
    ".pv-top-card--list-bullet li"
  ).innerText;
  const followerCount = parseInt(
    document.querySelector(".t-bold").innerText.split(" ")[0],
    10
  );
  const connectionCount = parseInt(
    document.querySelector(".t-bold").innerText.split(" ")[1],
    10
  );

  const profile = {
    name,
    url,
    about,
    bio,
    location,
    followerCount,
    connectionCount,
  };

  chrome.runtime.sendMessage({ type: "POST_PROFILE", profile });
});
