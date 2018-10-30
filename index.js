class Driver {
  constructor(name) {
    this.name = name;
    this.id = ++driverId;

    store.drivers.push(this);
  }
trips() {
  return.store.trips.filter(
    function(trip) {}
  )
}
}
