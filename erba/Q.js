

function big(element){
  element.style.fontSize = "30px";
}

function small(element){
  element.style.fontSize = "25px";
}

function load(){
  $("#text1").animate({opacity: '0'}, "slow");
  $("#text1").animate({opacity: '1'}, "slow");
  $("#logo").animate({opacity: '0'}, "slow");
  $("#logo").animate({opacity: '1'}, "slow");
 // $("#foto1").animate({left: '+=10px'}, "slow");
//  $("#foto1").animate({left: '-=10px'}, "slow");
  $("#foto2").animate({top: '-=10px'}, "slow");
  $("#foto2").animate({top: '+=10px'}, "slow");
  $("#foto3").animate({left: '-=10px'}, "slow");
  $("#foto3").animate({left: '+=10px'}, "slow");

}
function profile(name){

    document.getElementById("username").innerHTML =name;
    document.getElementById("prof").src ="profile.png";
    document.querySelector("#exit").style.display = "inline-block";
    logout();
}
function regist(){
    var btn = document.getElementById("username").innerHTML;
  

      
        $(".regist").animate({opacity: "1"}, "slow");
    document.querySelector(".regist").style.display = "flex";
        document.body.style.overflow = "hidden";
    
    
    
      
   }
function logout(){
  $(".regist").animate({opacity: "0"}, "slow");
    document.querySelector(".regist").style.display = "none";
    document.body.style.overflow = "scroll";
    document.getElementById("username").value = "";
    document.getElementById("pass").value = "";
    
}
function goout(){
  document.getElementById("username").innerHTML ="Log In";
  document.getElementById("prof").src ="login.png";
  document.querySelector("#exit").style.display = "none";
  document.body.style.overflow = "scroll";
}
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [43.2220,76.8512],
            zoom: 10
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [43.28678376649501, 76.9482306267107]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: 'Я иду',
                hintContent: 'Ну давай быстрее'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: true
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 8, color: '#0E4779'},
                {weight: 6, color: '#1E98FF'},
                {weight: 4, color: '#82CDFF'}
            ],
            iconCaption: "Диаграмма"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
        .add(new ymaps.Placemark([43.21824768358906,76.92811612178423], {
            balloonContent: '+7 727 3307200',
              iconCaption: 'Car Center',
              hintContent: 'The main distributor'

        }, {
            preset: 'islands#redHomeIcon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([43.202524, 76.891967], {
            balloonContent: '+7 727 2322612',
              iconCaption: 'Bavaria Center',
              hintContent: 'The Second distributor'

        }, {
            preset: 'islands#redHomeIcon',
            iconColor: 'red'
        }))
        .add(new ymaps.Placemark([43.248485, 76.940884], {
            balloonContent: '+7-727-2729055',
            iconCaption: 'Bipek Avto',
            hintContent: 'The third distributor'
        }, {
            iconColor: 'red',
            preset: 'islands#redHomeIcon',
        }));

        var myGeoObject = new ymaps.GeoObject({

            geometry: {

                type: "LineString",
                coordinates: [
                    [43.200871, 76.892258],
                    [43.218586, 76.928065],
                    
                ]
            },

            properties:{
                hintContent: "Distance",
                balloonContent: "6.1km"
            }
        }, {
            
            draggable: false,
            strokeColor: "#00ff00",
            strokeWidth: 3,
            strokeStyle: 'shortdash'
        });

        myMap.geoObjects
        .add(myGeoObject)


       


}
function countdown(){
        var now = new Date();
        var eventDate = new Date(2020,12,25);
 
        var currentTiime = now.getTime();
        var eventTime = eventDate.getTime();
 
        var remTime = eventTime - currentTiime;
 
        var s = Math.floor(remTime / 1000);
        var m = Math.floor(s / 60);
        var h = Math.floor(m / 60);
        var d = Math.floor(h / 24);
 
        h %= 24;
        m %= 60;
        s %= 60;
 
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;
 
        document.getElementById("days").textContent = d;
        document.getElementById("days").innerText = d;
 
        document.getElementById("hours").textContent = h;
        document.getElementById("minutes").textContent = m;
        document.getElementById("seconds").textContent = s;
 
        setTimeout(countdown, 1000);
      }
      countdown();

     function tableCreate() {
  //body reference 
  var body = document.getElementsByTagName("body")[0];

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // cells creation
  for (var j = 0; j <= 4; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < 4; i++) {
      // create element <td> and text node 
      //Make text node the contents of <td> element
      // put <td> at end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell is row " + j + ", column " + i);

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to 
  tbl.setAttribute("border", "2");
}

