const roadType = document.querySelector('.road-type');
const photos = document.querySelector('.road-type__cards');
const pictograms = document.querySelector('.road-type__pictogram-back');
const text = document.querySelector('.road-type__text');

//buttons

const buttonLeft = roadType.querySelector('#left-button');
const buttonRight = roadType.querySelector('#right-button');
const roadBikesButton = document.querySelector('#road');
const gravelBikesButton = document.querySelector('#gravel');
const ttBikesButton = document.querySelector('#TT');
const buttonsBikes = document.querySelector('.bikes__fieldset');
const themeSwitch = document.querySelector('#theme-switch');

//cards

const cardTemplate = document.querySelector('#bike-template-cards').content;
const cardElements = document.querySelector('.bikes__cards');
const cardRoadTemplate = document.querySelector('#road-type-cards').content;
const cardRoadElements = document.querySelector('.road-type__cards');
const pictogramRoadTemplate = document.querySelector('#road-type-pictogram').content;
const pictogramRoadElements = document.querySelector('.road-type__pictogram-back');
const textRoadTemplate = document.querySelector('#road-type-text').content;
const textRoadElements = document.querySelector('.road-type__text');


const roadBikes = [
    {
        name: 'Cervelo Caledonia-5',
        src: './image/cervelo_caledonia-5.png',
        link: 'https://www.sigmasports.com/item/Cervelo/Caledonia-5-Ultegra-Disc-Road-Bike-2021/RDEN'
    },
    {
        name: 'Cannondale Systemsix Himod',
        src: './image/cannondale_systemsix_himod.png',
        link: 'https://www.sigmasports.com/item/Cannondale/SystemSix-HiMOD-Ultegra-Di2-Disc-Road-Bike-2021/R82J'
    },
    {
        name: 'Trek Domane SL-7',
        src: './image/trek_domane_SL-7.png',
        link: 'https://www.sigmasports.com/item/Trek/Domane-SL-7-Force-eTap-AXS-Disc-Road-Bike-2021/RULF'
    }
];

const gravelBikes = [
    {
        name: 'Cervelo Aspero GRX 810',
        src: './image/Cervelo-Aspero-GRX-810.png',
        link: 'https://www.sigmasports.com/item/Cervelo/Aspero-GRX-810-1x-Disc-Gravel-Bike-2021/RJDE'
    },
    {
        name: 'Specialized S-Works Diverge',
        src: './image/specialized-S-Works-Diverge.png',
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Diverge-Gravel-Bike-2020/NVJ9'
    },
    {
        name: 'Cannondale Topstone Lefty 3',
        src: './image/cannondale-topstone-lefty-3.png',
        link: 'https://www.sigmasports.com/item/Cannondale/Topstone-Carbon-Lefty-3-Disc-Gravel-Road-Bike-2021/PUC8'
    }
];

const ttBikes = [
    {
        name: 'Specialized S-Works Shiv',
        src: './image/specialized-S-Work-shiv.png',
        link: 'https://www.sigmasports.com/item/Specialized/S-Works-Shiv-Disc-Limited-Edition-Triathlon-Bike-2019/K8P9'
    },
    {
        name: 'BMC Timemachine 01 ONE',
        src: './image/BMC-Timemachine-01-ONE.png',
        link: 'https://www.sigmasports.com/item/BMC/Timemachine-01-One-Force-Disc-TT-Triathlon-Bike-2021/S835'
    },
    {
        name: 'Cervelo P-Series',
        src: './image/cervelo-P-Series.png',
        link: 'https://www.sigmasports.com/item/Cervelo/P-Series-Ultegra-Di2-TT-Triathlon-Bike-2021/RM6Q'
    }
];

const roadTypesImages = [
    {
        src: './image/road.png',
        alt: 'Шоссе в горах'
    },
    {
        src: './image/gravel.png',
        alt: 'Гравийная дорога в лесу'
    },
    {
        src: './image/TT.png',
        alt: 'Шоссе в поле'
    }
];

const roadTypesPictograms = [
    {
        src: './image/road-pic.svg'
    },
    {
        src: './image/gravel-pic.svg'
    },
    {
        src: './image/tt-pic.svg'
    }
];

const roadTypesText = [
    {
        title: 'Шоссе',
        paragraph: 'На шоссейном велосипеде можно ездить по асфальту на разных градиентах: будь то горы или равнины. Гонки проходят в командном пелотоне, но тренироваться можно и самостоятельно.'
    },
    {
        title: 'Грэвел',
        paragraph: 'Грэвел похож на шоссейный велосипед, но конструкция рамы немного отличается, и на нём стоят более широкие покрышки, всё для того чтобы проехать по лёгкому бездорожью.'
    },
    {
        title: 'ТТ',
        paragraph: 'ТТ — это велосипед для триатлона или раздельного старта, гооняют на таком велике только по равнинному асфальту, велик очень быстрые и аэродинамичный.'
    }
]

// functions


function createCard(name, src, link) {
    const cardElement = cardTemplate.querySelector('.bikes__card').cloneNode(true);
    cardElement.querySelector('.bikes__image-title').textContent = name;
    const elementPhoto = cardElement.querySelector('.bikes__image');
    elementPhoto.src = src;
    cardElement.setAttribute('href', link);
    return cardElement;
}

function renderCard(name, src, link) {
    const card = createCard(name, src, link);
    cardElements.append(card);
}

function renderRoadBikes() {
    const renderedBikeCard = document.querySelector('.bikes__card');
    if (!cardElements.contains(renderedBikeCard)) {
        roadBikes.forEach(function (item) {
            renderCard(item.name, item.src, item.link)
        });
    }
}

function renderGravelBikes() {
    const renderedBikeCard = document.querySelector('.bikes__card');
    if (!cardElements.contains(renderedBikeCard)) {
        gravelBikes.forEach(function (item) {
            renderCard(item.name, item.src, item.link)
        });
    }
}

function renderTtBikes() {
    const renderedBikeCard = document.querySelector('.bikes__card');
    if (!cardElements.contains(renderedBikeCard)) {
        ttBikes.forEach(function (item) {
            renderCard(item.name, item.src, item.link)
        });
    }
}

function deleteBikesCards() {
    while (cardElements.lastChild) {
        cardElements.removeChild(cardElements.lastChild);
    }
}

function checkButtonsListener() {
    deleteBikesCards();
    if (roadBikesButton.checked) {
        renderRoadBikes();
    } else if (gravelBikesButton.checked) {
        renderGravelBikes();
    } else if (ttBikesButton.checked) {
        renderTtBikes();
    }
}

checkButtonsListener();

function createRoadCard(src, alt) {
    const cardRoadElement = cardRoadTemplate.querySelector('.road-type__card').cloneNode(true);
    const elementRoadPhoto = cardRoadElement.querySelector('.road-type__image');
    elementRoadPhoto.src = src;
    cardRoadElement.setAttribute('alt', alt);
    return cardRoadElement;
}

function renderRoadCard(src) {
    const card = createRoadCard(src);
    cardRoadElements.append(card);
}

roadTypesImages.forEach(function (item) {
    renderRoadCard(item.src, item.alt)
});

function createRoadPictogram(src) {
    const pictogramRoadElement = pictogramRoadTemplate.querySelector('.road-type__pictogram').cloneNode(true);
    pictogramRoadElement.src = src;
    return pictogramRoadElement;
}

function renderRoadPictogram(src) {
    const pictogram = createRoadPictogram(src);
    pictogramRoadElements.append(pictogram);
}


roadTypesPictograms.forEach(function (item) {
    renderRoadPictogram(item.src);
});

function createTextRoadType(title, paragraph) {
    const textElement = textRoadTemplate.querySelector('#text').cloneNode(true);
    textElement.querySelector('.road-type__title').textContent = title;
    const elementParagraph = textElement.querySelector('.road-type__paragraph');
    elementParagraph.textContent = paragraph;
    return textElement;
}

function renderTextRoadType(title, paragraph) {
    const card = createTextRoadType(title, paragraph);
    textRoadElements.append(card);
}

roadTypesText.forEach(function (item) {
    renderTextRoadType(item.title, item.paragraph);
});

function swipeCardLeft() {
    const photosItems = photos.children;
    photos.append(photosItems[0]);
    const pictogramsItems = pictograms.children;
    pictograms.append(pictogramsItems[0]);
    const textItems = text.children;
    text.append(textItems[0]);
}

function swipeCardRight() {
    const photosItems = photos.children;
    photos.prepend(photosItems[photosItems.length - 1]);
    const pictogramsItems = pictograms.children;
    pictograms.prepend(pictogramsItems[pictogramsItems.length - 1]);
    const textItems = text.children;
    text.prepend(textItems[textItems.length - 1]);
}

// event listeners

buttonsBikes.addEventListener('click', checkButtonsListener);
buttonLeft.addEventListener('click', swipeCardLeft);
buttonRight.addEventListener('click', swipeCardRight);















