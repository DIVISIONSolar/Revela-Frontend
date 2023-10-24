"use strict";
const error = document.getElementById("rv-error");
const errorCode = document.getElementById("rv-error-code");
const registerButton = document.getElementById("rv-register-sw");

if (location.pathname.startsWith(__uv$config.prefix)) {
  error.textContent = "Error: The seuvice worker is not registered.";
  registerButton.classList.add("show");
}

registerButton.addEventListener("click", async () => {
  try {
    await registerSW();
    location.reload();
  } catch (err) {
    error.textContent = "Failed to register seuvice worker. Try refreshing?";
    errorCode.textContent = err.toString();
    registerButton.classList.remove("show");
  }
});
