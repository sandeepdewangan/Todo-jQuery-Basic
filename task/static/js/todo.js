// Remember to change the input type from submit to button. We are changing the default 
// behaviour, where the req. goes to django. Now it will come to this file.

$(document).ready(function(){
    $("#createButton").click(function(){
        // gets all forms data
        var serializedData = $("#createTask").serialize();
        
        // call to ajax
        // 1st param: url
        // 2nd param: data
        // 3rd param: type -> get or post
        // 4th param: what we will do if server return success
        $.ajax({
            url: $("#createTask").data('url'),
            data: serializedData,
            type: 'post',
            success: function(response){
                $("#taskList").append('<div class="card mb-1"><div class="card-body">'+ response.task.title +'<button type="button" class="close float-right"><span aria-hidden="true">&times;</span></button></div></div>')
            }
        })

        $("#createTask")[0].reset();
    });
});