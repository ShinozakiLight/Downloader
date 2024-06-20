document.addEventListener("DOMContentLoaded", () => {
    const fileInput = document.querySelector("input");
    const downloadBtn = document.querySelector("button");
    const form = document.getElementById("downloadForm");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetchFile(fileInput.value);
    });

    function fetchFile(url) {
        fetch(url)
            .then(res => res.blob())
            .then(file => {
                let tempUrl = URL.createObjectURL(file);
                let aTag = document.createElement("a");
                aTag.href = tempUrl;
                aTag.download = "downloadedFile";
                document.body.appendChild(aTag);
                aTag.click();
                aTag.remove();
                URL.revokeObjectURL(tempUrl);
            })
            .catch(() => alert("Failed to download the file. Please check the URL."));
    }
});
