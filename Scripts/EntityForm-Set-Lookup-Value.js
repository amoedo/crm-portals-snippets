// Added as a custom JavaScript on an Entity Form
// Setups a Lookup value and hiddes the field
//
// Replace:// prefix_fieldschemaname => your lookup field// prefix_fieldschemaname_name => label for the selected item// prefix_fieldschemaname_entityname => target entity schema name// val => the GUID for your record

//Executes when the document is ready
$(document).ready(function () {

    //Optional: Hides the Lookup
    $("#prefix_fieldschemaname").parent().parent().parent().hide();    //Set the value    $("#prefix_fieldschemaname").val("8b4e0467-137f-e611-80dc-c4346bad4198");    $("#prefix_fieldschemaname_name").val("Lookup Label");    $("#prefix_fieldschemaname_entityname").val("entityschemaname");
});
