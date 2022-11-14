
function isInTheFuture(date) {
    const today = new Date();
  
    return date > today;
  }
  console.log(isInTheFuture(new Date('2022-11-15')));