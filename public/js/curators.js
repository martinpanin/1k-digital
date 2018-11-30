let cardView = 3;
const getCurators = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then (curators =>
            {
                let myCard = document.querySelector('#card');
                let buttonCounter = null;
                let newCard = document.createElement('section');
                newCard.className = "grid-x grid-padding-x large-up-3 small-up-1 medium-up-1";
                for (let i = curators.length - cardView <= 0 ? cardView - (curators.length - cardView) - 1 : cardView - 3; i < cardView; i++) {
                    newCard.innerHTML +=
                        '<section class="cell">' +
                        '<section class="card round shadow">' +
                        '<img src="https://picsum.photos/30'+ i +'/?random" alt="Curators pic">' +
                        '<section class="card-section">' +
                        '<h4>'+ curators[i].name  +'</h4>' +
                        '<hr/>' +
                        '<i class="fi-home"></i>' +
                        '<h6>'+ curators[i].address.city  +'</h6>' +
                        '<hr/>' +
                        '<i class="fi-telephone"></i>' +
                        '<p>'+ curators[i].phone +'</p>' +
                        '<button data-open="Modal" onclick="initMap(' + curators[i].address.geo.lat + ',' + curators[i].address.geo.lng + ')" class="button secondary white-color shadow round text-uppercase" type="button">Show map</button>' +
                        '</section>' +
                        '</section>' +
                        '</section>';
                    buttonCounter=i;
                }

                cardView = curators.length - cardView < 3 ? cardView + (curators.length - cardView) : cardView + 3;
                if ((cardView === curators.length) && (buttonCounter === cardView - 1)) {
                    document.querySelector('#show-more').style.display="none";
                }
                myCard.appendChild(newCard);
            }
        )
};

document.addEventListener("DOMContentLoaded", getCurators());

