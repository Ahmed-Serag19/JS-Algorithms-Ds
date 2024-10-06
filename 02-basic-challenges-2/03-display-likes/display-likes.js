function displayLikes(arr) {
  let message = "";
  if (arr.length === 0) {
    return (message = "no one likes this");
  }
  if (arr.length === 1) {
    message = `${arr[0]} likes this`;
  } else if (arr.length === 2) {
    message = `${arr[0]} and ${arr[1]} like this`;
  } else if (arr.length === 3) {
    message = `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
  } else {
    message = `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
  }

  return message;
}

module.exports = displayLikes;
