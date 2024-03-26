
class Placemark {
    constructor(iconHref, iconSize, iconOffset) {
        this.iconHref = iconHref;
        this.iconSize = iconSize;
        this.iconOffset = iconOffset;
    }

    create(id, coordinates, name, logo, addr, sched) {
        return {
            type: 'Feature',
            id: id,
            geometry: {
                type: 'Point',
                coordinates: coordinates
            },
            properties: {
                name: name,
                logo: logo,
                addr: addr,
                sched: sched
            },
            options: {
                iconLayout: 'default#image',
                iconImageHref: this.iconHref,
                iconImageSize: this.iconSize,
                iconImageOffset: this.iconOffset,
            }
        };
    }

    createCollection(placemarkData) {
        return placemarkData.map((data, index) =>
            this.create(index + 1, data.coordinates, data.name, data.logo, data.addr, data.sched));
    }

    json(jsonString) {
        const data = JSON.parse(jsonString);
        return this.createCollection(data);
    }
}

const jsonPlacemarks =
    `[
    {
      "coordinates": [55.88880506895561, 37.44204738251827],
      "name": "ЗдравСити 1",
      "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
    },
    {
      "coordinates": [55.67914751140277, 37.280685692169946],
      "name": "ЗдравСити 2",
      "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
    },
    {
    "coordinates": [55.7848, 37.6605],
    "name": "ЗдравСити 3",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.786, 37.67],
    "name": "ЗдравСити 4",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.79, 37.6605],
    "name": "ЗдравСити 5",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.79, 37.67],
    "name": "ЗдравСити 6",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.791, 37.671],
    "name": "ЗдравСити 7",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.792, 37.672],
    "name": "ЗдравСити 8",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.793, 37.673],
    "name": "ЗдравСити 9",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.794, 37.674],
    "name": "ЗдравСити 10",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.795, 37.675],
    "name": "ЗдравСити 11",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.796, 37.676],
    "name": "ЗдравСити 12",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.797, 37.677],
    "name": "ЗдравСити 13",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  },
  {
    "coordinates": [55.798, 37.678],
    "name": "ЗдравСити 14",
    "logo": "/images/apteki/apt_logo.png",
    "addr": "Земляной Вал ул, 27 c 1, Москва",
    "sched": "08:00-22:00 Пн-Пт, 09:00-21:00 Сб-Вс"
  }
  ]`;

import mapPlacemark from '@/images/icons/placemark.svg';
const placemark = new Placemark(mapPlacemark, [38, 48], [-16, -42]);
var placemarks = placemark.json(jsonPlacemarks);

export function mapInit() {
    var myMap = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 8,
        controls: []
    }, {
        searchControlProvider: 'yandex#search'
    });
    // CONTROLS
    var zoomInButton = document.querySelector('.js-map-zoom-in');
    zoomInButton.onclick = function () {
        var currentZoom = myMap.getZoom();
        myMap.setZoom(currentZoom + 1, {duration: 100});
    };

    var zoomOutButton = document.querySelector('.js-map-zoom-out');
    zoomOutButton.onclick = function () {
        var currentZoom = myMap.getZoom();
        myMap.setZoom(currentZoom - 1, {duration: 100});
    };

    var customGeoLocationButton = document.querySelector('.js-map-geolocation');
    customGeoLocationButton.onclick = function () {
        ymaps.geolocation.get({
            mapStateAutoApply: true
        }).then(function (result) {
            myMap.setCenter(result.geoObjects.position, 10);
        }, function (error) {
            console.error("Возникла ошибка при определении местоположения: ", error);
        });
    };

    // OBJECTS

    var myClusterIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__cluster"><div class="map__cluster-text">$[properties.geoObjects.length]</div></div>'
    );

    var objectManager = new ymaps.ObjectManager({
        clusterize: true,
        gridSize: 32,
        clusterDisableClickZoom: false,
        clusterOpenBalloonOnClick: false,
    });

    myMap.geoObjects.add(objectManager);

    var myClusterIconContentLayout = ymaps.templateLayoutFactory.createClass(
        '<div class="map__cluster">$[properties.geoObjects.length]</div>', {
            build: function () {
                myClusterIconContentLayout.superclass.build.call(this);
                var size = this.getData().properties.geoObjects.length;
                var element = this.getElement();
                var newSize = calculateClusterIconSize(size);
                element.style.display = "block";
                element.style.width = newSize + "px";
                element.style.height = newSize + "px";
            }
        }
    );

    function calculateClusterIconSize(number) {
        if (number <= 9) {
            return 20;
        } else if (number >= 10 && number <= 99) {
            return 28;
        } else if (number >= 100 && number <= 999) {
            return 36;
        } else {
            return 50; // Для чисел больше 999
        }
    }

    objectManager.clusters.options.set({
        clusterIcons: [{
            href: '',
            size: [28, 28],
            offset: [-14, -14],
        }],
        clusterIconContentLayout: myClusterIconContentLayout,
    });

    objectManager.objects.events.add('click', function (e) {


        var objectId = e.get('objectId');
        var object = objectManager.objects.getById(objectId);

        if (object.type == 'Feature') {
            myMap.balloon.open(object.geometry.coordinates, {
                contentHeader: '',
                contentBody: `
                <div class="pricelist__left">
                    <div class="pricelist__company">
                        <img class="pricelist__logo" src="${object.properties.logo}" alt="Логотип аптеки">
                        <span class="pricelist__name">${object.properties.name}</span>
                    </div>
                    <span class="pricelist__address">${object.properties.addr}</span>
                    <span class="pricelist__schedule">${object.properties.sched}</span>
                </div>
            `,
                contentFooter:''
            }, {
                minWidth: 328,
            });
        }
    });

    // Добавление созданных меток в objectManager
    objectManager.add({
        type: 'FeatureCollection',
        features: placemarks
    });
}