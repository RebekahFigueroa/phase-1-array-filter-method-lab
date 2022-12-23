// Code your solution here

function findMatching(drivers, name) {
  return drivers.filter(function isMatch(driver) {
    if (driver.toLowerCase() === name.toLowerCase()) {
      return true;
    }
  });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter((driver) => driver.startsWith(letters));
}

function matchName(drivers, name) {
  return drivers.filter(function matchingName(driver) {
    if (name === driver.name) {
      return true;
    }
  });
}
