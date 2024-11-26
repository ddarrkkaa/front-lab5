const validationRules = {
  pib: /^[А-ЯІЇЄ][а-яіїє]+ [А-ЯІЇЄ]\.[А-ЯІЇЄ]\.$/,
  group: /^[А-ЯІЇЄ]{2}-\d{2}$/,
  phone: /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
  idCard: /^[А-ЯІЇЄ]{2} №\d{6}$/,
  faculty: /^[А-ЯІЇЄ]{4}$/,
};

const form = document.getElementById("userForm");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isValid = true;

  document.querySelectorAll(".error").forEach((input) => {
    input.classList.remove("error");
  });
  document.querySelectorAll(".error-message").forEach((div) => {
    div.style.display = "none";
  });

  for (const [fieldName, pattern] of Object.entries(validationRules)) {
    const input = document.getElementById(fieldName);
    const errorDiv = document.getElementById(`${fieldName}-error`);

    if (!pattern.test(input.value)) {
      input.classList.add("error");
      errorDiv.style.display = "block";
      isValid = false;
    }
  }

  if (isValid) {
    result.style.display = "block";
    result.innerHTML =
      "<h3>Введені дані:</h3>" +
      Object.entries(validationRules)
        .map(([fieldName]) => {
          const input = document.getElementById(fieldName);
          return `<p><strong>${input.previousElementSibling.textContent}</strong> ${input.value}</p>`;
        })
        .join("");
  }
});
Las;
