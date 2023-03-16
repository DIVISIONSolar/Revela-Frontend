"use strict";
const error = document.getElementById("rv-error");
const errorCode = document.getElementById("rv-error-code");
const registerButton = document.getElementById("rv-register-sw");

if (location.pathname.startsWith(__rv$config.prefix)) {
  error.textContent = "Error: The service worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register service worker.";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});
