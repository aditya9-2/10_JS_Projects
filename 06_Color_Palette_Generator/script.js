const button = document.getElementById('btn');
const colorContainer = document.querySelector('.color-container');


const singleColorGenerator = () => {

    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    let hexColor = '#';

    for (let i = 0; i < 6; i++) {
        const random = Math.floor(Math.random() * hex.length);
        hexColor += hex[random];

    }
    return hexColor;

};

const colorPalettGenerator = () => {

    const colorPalette = [];

    for (let i = 0; i < 4; i++) {

        colorPalette.push(singleColorGenerator());

    }

    return colorPalette;
};


const renderColorPalette = () => {

    colorContainer.innerHTML = '';

    const colorPalette = colorPalettGenerator();

    colorPalette.forEach((color, i) => {

        const colorDiv = document.createElement('div');
        colorDiv.id = `color${i + 1}`;
        colorDiv.style.backgroundColor = color;
        colorDiv.className = 'color';

        const colorP = document.createElement('p');
        colorP.id = `color${i + 1}Tag`;
        colorP.className = 'colorTag';
        colorP.innerHTML = color;

        colorDiv.appendChild(colorP);
        colorContainer.appendChild(colorDiv);
    });

    const copyToClipBoard = (id) => {

        const el = document.getElementById(id);
        navigator.clipboard.writeText(el.innerText).then(() => {

            alert('Copied to clipboard!')


        }).catch((err) => {
            alert('faield to copy!')
        });
    };


    const colorTags = document.querySelectorAll('.colorTag');

    colorTags.forEach((colorTag, i) => {

        colorTag.addEventListener('click', () =>

            copyToClipBoard(`color${i + 1}Tag`)
        );

    });


};
renderColorPalette();
button.addEventListener('click', renderColorPalette);