const fileInput = document.getElementById("fileInput");
const fileName = document.getElementById("fileName");
const status = document.getElementById("status");
const uploadBtn = document.getElementById("uploadBtn");

fileInput.onchange = () => {
    fileName.textContent = fileInput.files[0]?.name || "";
};

uploadBtn.onclick = async () => {
    if (!fileInput.files[0]) {
        return alert("Select a file first!");
    }

    const body = new FormData();
    body.append("myfile", fileInput.files[0]);

    const res = await fetch("/upload", {
        method: "POST",
        body
    });

    const data = await res.json();

    status.style.display = "block";
    status.className = `status ${res.ok ? "success" : "error"}`;
    status.textContent = res.ok
        ? `✓ Uploaded: ${data.name}`
        : `✗ ${data.error}`;

    if (res.ok) {
        fileInput.value = "";
        fileName.textContent = "";
    }
};