document.addEventListener('DOMContentLoaded', () => {
    // Fetch current week's songs
    fetch('songs.json')
        .then(response => response.json())
        .then(data => {
            const songList = document.getElementById('song-list');
            // Show the top 5 current songs
            data.songs.slice(0, 5).forEach(song => {
                const songItem = document.createElement('div');
                songItem.classList.add('song-item');

                songItem.innerHTML = `
                    <h2>${song.title} - ${song.artist}</h2>
                    <img src="${song.album_image}" alt="${song.album} cover" class="album-image">
                    <p><strong>Beskrivelse:</strong> ${song.description}</p>
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

    // Fetch archive of previous weeks' songs
    fetch('songs-week-archive.json')
        .then(response => response.json())
        .then(archiveData => {
            const archiveDiv = document.getElementById('archive');
            archiveData.songs.forEach(song => {
                const songElement = document.createElement('div');

                songElement.innerHTML = `
                    <h3>${song.title} - ${song.artist}</h3>
                    <img src="${song.album_image}" alt="${song.album} cover" class="album-image">
                    <p><strong>Sjanger:</strong> ${song.genre}</p>
                    <a href="${song.link}" target="_blank">Hør på sangen her</a>
                `;
                archiveDiv.appendChild(songElement);
            });
        })
        .catch(error => {
            console.error('Feil ved henting av arkivdata:', error);
        });
});
