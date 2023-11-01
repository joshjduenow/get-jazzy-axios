function onReady() {
    console.log('Hello from client.js');

    axios.get('/artist')
        .then(function (response) {
            // Code that will run on successful response
            // from the server.
            console.log(response);
            // quotesFromServer will be an Array of quotes
            let artistArray = response.data;
            let contentDiv = document.querySelector('#artistTableBody');
            for (let artist of artistArray) {
                contentDiv.innerHTML += `
                <tr>
                    <td>${artist.name}</td>
                    <td>${artist.born}</td>
                    <td>${artist.died}</td>
                </tr>
            `;
            }
        }).catch(function (error) {
            // Code that will run on any errors from the server.
            console.log(error);
            alert('Something bad happened! Check the console for more details.')
        });
    
    }
    // TODO Add Axios request for /songs and display on DOM

    axios.get('/song')
    .then(function (response) {
        // Code that will run on successful response
        // from the server.
        console.log(response);
        // quotesFromServer will be an Array of quotes
        let songArray = response.data;
        let contentDiv = document.querySelector('#songTableBody');
        for (let song of songArray) {
            contentDiv.innerHTML += `
            <tr>
                <td>${song.title}</td>
                <td>${song.artist}</td>
            </tr>
        `;
        }

    })

onReady();