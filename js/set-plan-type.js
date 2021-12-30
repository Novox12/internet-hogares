function setPlanTypeValue(value,id) {
    let planType = document.getElementById(id);
    planType.value = value;
}

const pedirModal =(segment)=> {

    const targets = [
        //id-formulario-principal-btn
        //id-formulario-principal-class
        'id-triple-play',
        'id-duo-play',
        'id-individual',
        'id-portate-a-tigo',
        'id-servicio-premium',
        'id-necesitas-mas-velocidad',
        'id-kv-compra-hoy-triple-play-1',
        'id-kv-compra-hoy-triple-play-2',
        'id-amazon-music',
        'id-canales-premium',
        'id-amazon-prime-video',
        'id-footer-tellamamos',
        'id-movil-15gb-35mil',
        'id-movil-25gb-45mil',
        'id-movil-40gb-60mil',
        'id-movil-75gb-75mil',
        'id-movil-ilimitado-100mil',
        'id-movil-aun-no-tienes-plan',
        'id-movil-ya-tienes-plan',
        'id-compra-full-tigo',
        'id-full-tigo-movil-50gb',
        'id-full-tigo-movil-80gb',
        'id-full-tigo-movil-150gb',
        'id-internet-que-mereces',
        //btn-email-send
        //id-btn-email-send-class
    ];

    var htmlElements = "";
    for (i=0; i<targets.length; i++) {
        htmlElements += ` <div class="modal fade" id="${targets[i]}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg justify-content-center">
            <div class="modal-content">
                <div class="card card-modal">
                    <div class="row no-gutters">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 modal-section-img">
                            <img src="../static/images/fixed-internet.webp" class="img-fluid w-100 img-modal" loading="lazy" alt="modal-image">
                            <button type="button" class="close btn-modal-close btn-home-close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-to-call modal-home-form">
                            <form action="../backend/helper.php" enctype="multipart/form-data" method="POST" onsubmit="return validateModalFields('${targets[i]}-input-name', '${targets[i]}-input-phone');">
                                <!-- Google Search Console -->
                                <meta name="google-site-verification" content="gmg5hNX4eWgSfbr-I22DQGYjjsHNtR-Bz0J2SXJ7oYQ" />
                                <!-- Event snippet for ESTOY INTERESADO conversion page
                                In your html page, add the snippet and call gtag_report_conversion when someone clicks on the chosen link or button. -->
                                <script>
                                    function gtag_report_conversion(url) {
                                    var callback = function () {
                                        if (typeof(url) != 'undefined') {
                                        window.location = url;
                                        }
                                    };
                                    gtag('event', 'conversion', {
                                        'send_to': 'AW-792985003/3IPFCPCQw4cBEKv7j_oC',
                                        'event_callback': callback
                                    });
                                    return false;
                                    }
                                </script>
                                <h5 class="modal-title text-center">TE LLAMAMOS</h5>
                                <hr />
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group" style="display: none;">
                                            <input class="form-control text-danger form-input" type="text" value="" name="type_form_lead" id="${targets[i]}-planType" readonly>
                                        </div>
                                        <div class="form-group" style="display: none;">
                                            <input class="form-control text-danger form-input" type="text" name="segment_lead" value="${segment}" readonly>
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control modal-input" type="text" name="full_name_lead" id="${targets[i]}-input-name" placeholder="Tu nombre" autocomplete="off">
                                            <input type="hidden" id="gclid_mobile" name="gclid" value="">
                                        </div>
                                        <div class="form-group">
                                            <input class="form-control modal-input" type="number" min="0" name="phone_lead" id="${targets[i]}-input-phone" placeholder="Tu móvil">
                                        </div>
                                        <div class="form-group text-center">
                                            <input type="checkbox" id="checkboxModal" name="terms_lead" checked> Acepto las
                                            <a href="#" data-toggle="modal" data-target="#modalTyc" class="modal-form-link-check">Políticas de protección de datos personales</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <button type="submit" onClick="submitIdModal('${targets[i]}')" class="btn btn-warning btn-modal w-100 ${targets[i]}-class" id="btn-modal-send">ESTOY INTERESADO</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    }
    document.getElementById("demo-1").innerHTML = htmlElements;
}
