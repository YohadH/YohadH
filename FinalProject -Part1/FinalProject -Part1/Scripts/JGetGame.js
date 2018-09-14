//getting all the table from the db in ajax 
function JgetGameTable() {
    $.ajax({ url: 'http://localhost:6447/api/gametable' }).then(
        function (data) {
            console.log(data)

            for (var i = 0; i < data.length; i++) {
                var item = data[i];
                for (var field in item) {
                    $('#results').append(" " + field +
                        " : " + item[field] + ", ")
                }
                $('#results').append("<br>")
            }
        }
    )
}

//getting game row by id. 
function JgetGameTablebyid() {
    var the_id = $("#jid").val()
    $.ajax({
        url: 'http://localhost:6447/api/gametable/' + the_id
    }).then(
        function (data) {
            console.log(data)
            one = data;
            for (var field in one) {
                document.getElementById("results").innerHTML += field + " : " + one[field] + " , "
            }
        }
    )
}
