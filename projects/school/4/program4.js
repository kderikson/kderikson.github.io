function main(word) {
  document.getElementById('perms').innerHTML = '';
  // var word = document.getElementById('permText').value;
  console.log(word);

  var input = word.split('');

  var result = getPermutations(input);

  for (var i = 0; i < result.length; i++) {
      result[i] = result[i].join('');
  }

  console.log(result);

  for (i = 0; i < result.length; i++) {
    if (((i % 10) == 0) && i != 0) {
      document.getElementById('perms').innerHTML += result[i] + '<br />';
      continue;
    }

    document.getElementById('perms').innerHTML += result[i] + '      ';
  }
}

function getPermutations(data) {
    data = data.slice();
    var listOfPerms = [],
        stack = [];

    function permutation() {
        if (data.length == 0) {
            listOfPerms.push(stack.slice());
        }
        for (var i = 0; i < data.length; i++) {
            var x = data.splice(i, 1);
            stack.push(x);

            permutation();
            stack.pop();

            data.splice(i, 0, x);
        }
    }

    permutation();
    return listOfPerms;
}
