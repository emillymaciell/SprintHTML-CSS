//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._arr = arr;
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Render();
                Carousel._interval = setInterval(function () {
                    Carousel.Next(1);
                }, 4000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(direction = 1) {
        Carousel._sequence = (Carousel._sequence + direction + Carousel._size) % Carousel._size;
        Carousel.Render();
    }

    static GoTo(index) {
        Carousel._sequence = index;
        Carousel.Render();
    }

    static Render() {
        let item = Carousel._arr[Carousel._sequence];
        let carouselDiv = document.getElementById("carousel");
        let titleDiv = document.getElementById("carousel-title");

        // Bolinhas
        let dots = "";
        for (let i = 0; i < Carousel._size; i++) {
            let active = i === Carousel._sequence ? "carousel-dot--active" : "";
            dots += `<button class="carousel-dot ${active}" onclick="Carousel.GoTo(${i})"></button>`;
        }

        carouselDiv.innerHTML = `
            <div class="carousel-wrapper">
                <button class="carousel-btn" onclick="Carousel.Next(-1)">&#8592;</button>
                 <a href="${item.url}">
                    <img src="${item.image}" class="carousel-image">
                </a>
                <button class="carousel-btn" onclick="Carousel.Next(1)">&#8594;</button>
            </div>
            <div class="carousel-dots">${dots}</div>
        `;

        titleDiv.innerHTML = `<a href="${item.url}">${item.title}</a>`;
    }
}
