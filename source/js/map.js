(() => {
  const map = document.querySelector('#map');
  if (!map) return;

  let ok = false;
  window.addEventListener('scroll', function () {
    if (ok === false) {
      ok = true;
      const map_script = document.createElement('script');
      map_script.src = 'https://api-maps.yandex.ru/2.1/?apikey=c214d7f7-bb76-458f-8f7b-6523a76e9c85&lang=ru_RU';
      map_script.type = 'text/javascript';
      map.append(map_script);
      map_script.addEventListener("load", () => {
        ymaps.ready(init);
      });
    }
  });

  function init() {
    var myMap = new ymaps.Map('map', {
      center: [59.913374, 30.331391],
      zoom: 14,
      controls: []
    });

    myPlacemark = new ymaps.Placemark([59.913374, 30.331391], {
      hintContent: 'Мы тут'
      }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.svg',
      iconImageSize: [16, 24],
      iconImageOffset: [-10, -20]
    });

    myMap.geoObjects.add(myPlacemark);

    start();
    window.addEventListener('resize', start);
    function start() {
      myMap.setCenter([59.913374, 30.331391], 14,);
    }
  }
})();
