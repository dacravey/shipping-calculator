$(document).ready(function() {
  $('form.shipping-cost').submit(function(event){
    event.preventDefault();

    var distanceInput = parseInt($("input#distance").val());
    var weightInput = parseInt($("input#weight").val());
    var heightInput = parseInt($("input#height").val());
    var lengthInput = parseInt($("input#weight").val());
    var widthInput = parseInt($("input#width").val());

    var newShipment ={ distance: distanceInput,weight: weightInput, height: heightInput, length: lengthInput,
                      width: widthInput,
                      volume: function() {
                      return this.height * this.length * this.width;
                        }
                      };

    newShipment.cost = function() {
        var total = this.weight/5 * this.volume()/20 * this.distance/100;
        return total;
    }

    newShipment.expedited = function() {
        var total = this.weight/3 * this.volume()/4 * this.distance/75;
        return total;
    }

    newShipment.fastest = function() {
        var total = this.weight * this.volume()/2 * this.distance/10;
        return total;
    }


    $("#cost").text(newShipment.cost());
    $("#expedited").text(newShipment.expedited());
    $("#fastest").text(newShipment.fastest());

  });
});
