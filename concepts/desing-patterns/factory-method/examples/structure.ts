// -------------------------------------
// 1. Product
// -------------------------------------

interface Transport {
  deliver(): void
}

// -------------------------------------
// 2. Concrete Products
// -------------------------------------

class Truck implements Transport {
  deliver(): void {
    console.log('🚚 Delivering by land')
  }
}

class Ship implements Transport {
  deliver(): void {
    console.log('🚢 Delivering by sea')
  }
}

// -------------------------------------
// 3. Creator
// -------------------------------------

abstract class Logistics {
  abstract createTransport(): Transport

  planDelivery(): void {
    const transport = this.createTransport()
    transport.deliver()
  }
}

// -------------------------------------
// 4. Concrete Creators
// -------------------------------------

class RoadLogistics extends Logistics {
  createTransport(): Transport {
    return new Truck()
  }
}

class SeaLogistics extends Logistics {
  createTransport(): Transport {
    return new Ship()
  }
}
