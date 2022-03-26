function isCurrentFinder(finderId, currentFinder) {
  if (finderId == currentFinder) {
    console.log(`user matches the finder profile being viewed`);
    return true;
  } else {
    console.log(`user does not match the finder profile being viewed`);
    return false;
  }
}

module.exports = {
  isCurrentFinder,
};
