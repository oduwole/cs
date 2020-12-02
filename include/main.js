
toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": true,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }
var baseUrl = 'https://vbresourceapi.azurewebsites.net/api/Values/';
$('#sf-submit').click(function(e){
    //var $btn = $(this).button('loading') 
    $('#sspin').removeClass('hidden');
    var email = $('#sf-email').val();
    var mailUrl = baseUrl + 'subscribe?emailaddress=' + email;
    $.post(mailUrl,null,function(e){
        toastr.success('You have been successfully subscribed to our Email List.');
        $('#sspin').addClass('hidden');
        //$btn.button('reset')
    });
});

$('#cf-submit').click(function(e){
    //var $btn = $(this).button('loading') 
    $('#cspin').removeClass('hidden');
    var name = $('#cf-name').val();
    var email = $('#cf-email').val();
    var message = $('#cf-message').val();
    var subject = $('#cf-subject').val();

    var data = {
        "name":name,
        "email":email,
        "message": message,
        "subject": subject
    }
    var mailUrl = baseUrl + 'contactus';
    $.post(mailUrl,data,function(e){
        toastr.success('Thanks for contacting us. We will get back to you as soon as possible');
        $('#cspin').addClass('hidden');
        //$btn.button('reset')
    });
});