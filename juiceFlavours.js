function juiceFlavours(arr) {
  let juices = {};
  let bottles = {};

  function createBottle(flavour) {
    if (juices[flavour] >= 1000) {
      if (!bottles.hasOwnProperty(flavour)) {
        bottles[flavour] = 0;
      }

      let allBottles = Math.floor(juices[flavour] / 1000);
      bottles[flavour] += allBottles;
      juices[flavour] -= (allBottles * 1000);
    }
  }

  for (let element of arr) {
    let [flavour, quantity] = element.split(' => ');
    quantity = Number(quantity);
    if (!juices.hasOwnProperty(flavour)) {
      juices[flavour] = 0;
    }
    juices[flavour] += quantity;
    createBottle(flavour);
  }

  for (let flavour in bottles) {
    console.log(flavour + ' => ' + bottles[flavour]);
  }
}
juiceFlavours(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789'])