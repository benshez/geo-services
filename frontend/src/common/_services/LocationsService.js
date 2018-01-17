import * as Promise from 'es6-promise';

export const currentPositionService = {
  PromisedLocation,
  getCurrentPosition,
  clearWatch
};

const defaults = {
  enableHighAccuracy: false,
  timeout: Infinity,
  maximumAge: 0
};

export const PromisedLocation = (
  options = defaults,
  PromiseImpl = Promise,
  nav = navigator
) =>
  new PromiseImpl((resolve, reject) => {
    debugger;
    if (!nav.geolocation || !nav.geolocation.getCurrentPosition) {
      return reject(new Error('Geolocation not supported!'));
    }

    nav.geolocation.getCurrentPosition(resolve, reject, options);
  });

function getCurrentPosition() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      position => {
        let crd = pos.coords;
        debugger;
        return crd;
      },
      error,
      options
    );
  }
}

const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
  debugger;
  let crd = pos.coords;
  return crd;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

function clearWatch(watchID) {
  navigator.geolocation.clearWatch(watchID);
}
