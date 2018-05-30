
// Ajax 
var xhr = new XMLHttpRequest();

function doit(method , postdata , getdata ,cb) {
    //alert(postdata + '\n' + getdata);
    var url = "index.php?url=" + getdata
    xhr.open(method , url , true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                cb(xhr.responseText);
            }
        }
    };
    if (method === 'GET') {
        xhr.send()
    } 
    if (method === "POST") {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(postdata);
    }
}
// Ajax end