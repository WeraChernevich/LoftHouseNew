const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const nav = document.querySelector('.header__top-row');

navBtn.onclick = function () {
	navIcon.classList.toggle('nav-icon--active');
	nav.classList.toggle('header__top-row--mobile');
	document.body.classList.toggle('no-scroll')
}

//Phone Masc
mask('[data-tel-input]');

const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=> {
	input.addEventListener('input', ()=> {
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=> {
		if (input.value == '+') input.value = '';
	})
});


//Yandex Map
initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                // Координаты центра карты
                center: [30.338928, 59.943543],

                // Уровень масштабирования
                zoom: 15
            }
        }
				
    );

    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());

		// const lineStringFeature = new YMapFeature({
		// 	id: 'line',
		// 	source: 'featureSource',
		// 	geometry: {
		// 		type: 'LineString',
		// 		coordinates: [
		// 			[30.338928, 59.943543],
		// 			[30.356575, 59.955739]
		// 		]
		// 	},
		// 	style: {
		// 		stroke: [{width: 12, color: 'rgb(14, 194, 219)'}]
		// 	}
		// });
		
		// map.addChild(lineStringFeature);
}