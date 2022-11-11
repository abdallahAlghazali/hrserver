
$("#add_company").submit(function(event){
    alert("Data Inserted Successfully!");
})


$("#update_company").submit(function(event){
    event.preventDefault();

    var unidexed_array = $(this).serializeArray();
    var data ={}

    $.map(unidexed_array, function(n,i){
        data[n['name']] = n['value']
    })
    console.log(data);

    var request = {
        "url": `http://localhost:3000/api/companies/${data.id}`,
        "method": "PUT" ,
        "data": data
    }

    $.ajax(request).done(function(response){
        alert("Data Updated Successfully");
    })
})

if (window.location.pathname == "/") {
    $ondelete =$(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")


        var request = {
            "url": `http://localhost:3000/api/companies/${id}`,
            "method": "DELETE"   
        }

        if(confirm("Do you realy want to delet this company?")){
            $.ajax(request).done(function(response){
                alert("Data Deleted Successfully");
                location.reload()
            })

        }


        
    })
}