let parkedCars = [];
const maxCars = 27;

/// HARD MODE ///
function isParkedHere( car ){
  console.log( 'in isParkedHere:', car );
  if( parkedCars.indexOf( car ) >= 0 ){
    return true;
  } // end is parked here
  else{
    return false;
  } // end !parked in garage
} // end isParkedHere

/// BASE MODE ///
function parkCar( car ){
  console.log( 'in parkCar:', car );
  if( parkedCars.length < maxCars ){
    parkedCars.push( car );
    return true;
  } // end room
  else{
    return false;
  } // end !room
} // end parkCar

/// PRO MODE ///
function takeForASpin( car ){
  console.log( 'in takeForASpin:', car );
  if( isParkedHere( car ) ){
    return( parkedCars.splice( parkedCars.indexOf( car ), 1 ) );
  } //end let's go for a ride
  else{
    return false;
  } /// not found
} // end takeForASpin
