var url = "https://62a9708c3b31438554332570.mockapi.io/students"
fetch(url).then(data => data.json()).then(data => console.log(data));