

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    getCarnivore: function (callback) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function () {
        console.log("this.responseText", this.responseText);
        data = JSON.parse(this.responseText);
        carnivores = data.carnivores;

        callback(carnivores);
      });

      loader.open("GET", "carnivores.json");
      loader.send();
    },

    getHerbivore: function (callback) {
      var loader = new XMLHttpRequest();

      loader.addEventListener("load", function() {
        console.log("this.responseText", this.responseText);
        data = JSON.parse(this.responseText);
        herbivores = data.herbivores;

        callback(herbivores);
      })

      loader.open("GET", "herbivores.json");
      loader.send();
    }
  }
})();















