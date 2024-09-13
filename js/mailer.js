// const modalConsultation = document.querySelector('.modal__consultation-overlay')


// function getBaseUrl(fullUrl) {
//     const url = new URL(fullUrl);
//     return url.origin;
// }

// const fullUrl = window.location.href;


$('#form').on('submit', function (e) {
    e.stopPropagation();
    e.preventDefault();

    // const result1 = document.querySelector('#result1');
    // result1.innerHTML = 'Please wait...';

    // document.querySelector('#phone_code1').value = document.querySelector('.selected-dial-code').innerHTML; 
 
    $.ajax({
        url: 'mail.php',
        type: 'POST',
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function(response) {
            console.log('Успешно!');
            // $('#result1').html(response);
        },
        error: function() {
            // $('#result1').html('Ошибка при отправке!');
        }
    });

    let form = this,
        submit = $('.submit', form),
        data = new FormData(),
        files = $('input[type=file]')

    
    
    $('.submit', form).val('Отправка...');

    // data.append( 'from', 		$('[name="from"]', form).val());
    data.append( 'name', 		$('[name="name"]', form).val());
    data.append( 'email', 	$('[name="email"]', form).val());
    data.append( 'phone', 		$('[name="phone"]', form).val() );

    files.each(function (key, file) {
        let cont = file.files;
        if ( cont ) {
            $.each( cont, function( key, value ) {
                data.append( key, value );
            });
        }
    });
    
    return false;
});