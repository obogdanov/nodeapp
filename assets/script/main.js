$("#add").submit(function(e) {

    var url = "/add";

    $.ajax({
           type: "POST",
           url: url,
           data: $("#add").serialize(),
           success: function(data)
           {
            $("input[type=text]").val('');
            window.location.reload(false);
            }
         });

    e.preventDefault();
});
$("#remove").submit(function(e) {

    var url = "/delete";

    $.ajax({
           type: "DELETE",
           url: url,
           data: $("#remove").serialize(),
           success: function(data)
           {
            $("input[type=text]").val('');
            window.location.reload(false);
            }
         });

    e.preventDefault();
});