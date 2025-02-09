function downloadVideo() {
    let url = document.getElementById("videoUrl").value;
    if (!url) {
        alert("Please enter a valid video URL");
        return;
    }
    
    document.getElementById("status").innerText = "Downloading...";

    // এখানে Python বা Node.js ব্যাকএন্ড কানেক্ট করা হবে
    fetch(`https://your-backend-api.com/download?url=${url}`)
        .then(response => response.json())
        .then(data => {
            document.getElementById("status").innerHTML = 
                `<a href="${data.download_link}" download>Click here to download</a>`;
        })
        .catch(error => {
            document.getElementById("status").innerText = "Error downloading video!";
        });
}
