
const NASA_API_KEY = 'Y6ezddhKy4s5gEuN9bR9Dc7ip0iWRV6l7InkB6ChfY';
const APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=6ezddhKy4s5gEuN9bR9Dc7ip0iWRV6l7InkB6Chf`;

function fetchImage() {
    fetch(APOD_URL)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // document.getElementById('apod-title').textContent = data.title;
            document.getElementById('apod-date').textContent = data.date;
            document.getElementById('apod-image').src = data.url;
            // document.getElementById('apod-description').textContent = data.explanation;
        });
}

fetchImage();