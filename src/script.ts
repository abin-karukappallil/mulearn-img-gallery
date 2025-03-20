const displayedImage = document.querySelector('.displayed-img') as HTMLImageElement;
const thumbBar = document.querySelector('.thumb-bar') as HTMLDivElement;
const title = document.querySelector('.gallery-title') as HTMLHeadingElement;

const imageArray: string[] = [
    '/bmw.jpg',
    '/mercedes.jpg',
    '/audi.jpg',
    '/lamborghini.jpg',
    '/chevrolet.jpg'
];

const imageText: string[] = ["BMW", "Mercedes", "Audi", "Lamborghini", "Chevrolet"];

imageArray.forEach((image: string, index: number) => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', image);
    newImage.setAttribute('alt', imageText[index]);
    thumbBar.appendChild(newImage);

    newImage.addEventListener('click', (e: Event) => {
        const target = e.target as HTMLImageElement;
        displayedImage.setAttribute('src', target.src);
        displayedImage.setAttribute('alt', target.alt);
        title.textContent = target.alt;
    });
});