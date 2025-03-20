document.addEventListener('DOMContentLoaded', () => {
    fetch('songs.json') //this grabs the data from the json file
        .then(response => response.json())
        .then(data => {
            const songList = document.getElementById('song-list');
            data.songs.forEach(song => {
                const songItem = document.createElement('div');
                songItem.classList.add('song-item');

                songItem.innerHTML = `
                    <h2>${song.title} - ${song.artist}</h2>
                    <img src="${song.album_image}" alt="${song.album} cover" class="album-image">
                    <p><strong>Beskrivelse:</strong> ${song.description}</p>
                    <p><strong>Tittel:</strong> ${song.title}</p>
                    <p><strong>Album:</strong> ${song.album}</p>
                    <p><strong>År:</strong> ${song.year}</p>
                    <p><strong>Varighet:</strong> ${song.duration}</p>
                    <p><strong>Sjanger:</strong> ${song.genre}</p>
                    <p><strong>Anmeldelse:</strong> ${song.review}</p>
                    <a href="${song.link}" target="_blank">Hør på sangen her</a>

                `;

                songList.appendChild(songItem);
            });
        })
        .catch(error => {
            console.error('Feil ved henting av data:', error);
        });
});