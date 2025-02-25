const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerText = "Submit";
submitButton.style.display = "block";
submitButton.style.margin = "10px auto";
submitButton.style.padding = "10px 15px";
submitButton.style.background = "#28a745";
submitButton.style.color = "white";
submitButton.style.border = "none";
submitButton.style.borderRadius = "5px";
submitButton.style.cursor = "pointer";

submitButton.addEventListener("mouseover", function () {
    submitButton.style.background = "#218838";
});

submitButton.addEventListener("mouseout", function () {
    submitButton.style.background = "#28a745";
});

form.appendChild(labelName);
form.appendChild(inputName);
form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(labelMessage);
form.appendChild(textareaMessage);
form.appendChild(submitButton);

content.appendChild(header);
content.appendChild(paragraph);
content.appendChild(list);
content.appendChild(button);
content.appendChild(form);

document.body.appendChild(content);
