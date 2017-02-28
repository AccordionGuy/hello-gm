var useMetricUnits = true
changeUnits(document.getElementById('unitSwitch'))

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
  vinElem.innerHTML = gm.info.getVIN();
});


function showSpeed(data) {
  console.log("showSpeed - metric? " + useMetricUnits)
  var speed = data.average_speed
  if ( speed !== undefined ) {
    var speedText = document.getElementById('speed')
    speed = useMetricUnits ? speed : Math.round(speed * 0.621)
    speedText.innerHTML = speed
  }
}

function changeUnits(checkbox) {
  console.log("Changed!" + checkbox.checked)
  useMetricUnits = checkbox.checked
  gm.info.getVehicleData(showSpeed, ['average_speed'])
}

gm.info.watchVehicleData(showSpeed, ['average_speed'])