(function () {
    // Realizo una petición vía HTTP por medio de GET a la API
    axios.get('http://localhost:5000/api/v1/posts')
        .then(function (response) { // Al obtener una respuesta satisfactoria
            if (response.data.data) { // Valido si existen POST
                postsArray = response.data.data; 
                postsArray.forEach(element => { // Itero el JSON con los posts
                    //console.log(element);

                    // Añado los post al div allPosts
                    $('#allPosts').append(`
                        <div class="d-flex text-muted pt-3">
                                <svg class="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                    xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                    preserveAspectRatio="xMidYMid slice" focusable="false">
                                    <title>`+ element.title + `</title>
                                    <rect width="100%" height="100%" fill="#007bff" /><text x="50%" y="50%" fill="#007bff"
                                        dy=".3em">32x32</text>
                                </svg>

                                <p class="pb-3 mb-0 small lh-sm border-bottom">
                                    <strong class="d-block text-gray-dark">`+ element.author + `</strong>
                                    `+ element.content + `
                                </p>
                            </div>
                        `);
                });
            }

            // TODO: Mostrar en la vista un mensaje si no se encontraron posts

            // TODO: Paginar posts
        })
        .catch(function (error) { 
            // TODO: Mostrar en la vista un mensaje de error           
            console.log(error);
        });

})()
