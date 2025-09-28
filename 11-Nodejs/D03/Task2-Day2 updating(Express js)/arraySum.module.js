(function (moduleName, env, definition) {
  if (typeof module !== "undefined" && module.exports) {
    env[moduleName] = definition();
  } else {
    env[moduleName] = definition();
  }
})("arraySum", this, function () {
  function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  return { sumArray };
});
