function generateString() {
    var length = document.getElementById('length').value;
    var set = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var string = "";

    for (var i=0; i < length; i++) {
        string += set.charAt(Math.floor(Math.random() * set.length));
    }

    document.getElementById('string').innerHTML = string;
    return;
}
