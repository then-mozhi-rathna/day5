class UberFareCalculator{

    constructor(baseFare,costPerMinute,costPerkiloMeter,bookingfee)
    this.baseFare = baseFare;
    this.costPerMinute = costPerMinute;
    this.costPerkiloMeter = costPerkiloMeter;
    this.bookingfee = bookingfee;
}

calculateFare(minutes,kilometers){

    const timeCost = this.costPerMinute * minutes;
    const distanceCost = this.costPerkiloMeter * minutes;
    const totalFare = this.baseFare + timeCost + distanceCost + this.bookingfee;

    return totalFare;
