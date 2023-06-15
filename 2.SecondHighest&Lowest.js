let arr = [10, 11, 7, 13, 9, 4, 2, 12];
max = -32768;
secondMax = -32768;
min = 32768;
secondMin = 32768;

// function for finding Second Highest Number
function secondHighest() {
  for (var i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      secondMax = max;
      max = arr[i];
    } else if (secondMax < arr[i]) {
      secondMax = arr[i];
    }
  }
  console.log("2nd Highest Number is: " + secondMax);
}

// function for finding Second Lowest Number
function secondLowest() {
  for (var i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      secondMin = min;
      min = arr[i];
    } else if (secondMin > arr[i]) {
      secondMin = arr[i];
    }
  }
  console.log("2nd lowest Number is: " + secondMin);
}

secondHighest();
secondLowest();
