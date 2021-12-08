'use strict';
console.log('Starting up');

// onload:
$(onInit);

function onInit() {
    renderProjs();
    contact();
    // renderModal();
}

function renderProjs() {
    var projs = getProjs();
    var strHtmls = projs.map(function(proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
                    <a onclick="onOpenModal('${proj.id}')" class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content">
                                <i class="fa fa-plus fa-3x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src=${proj.url} alt="">
                    </a>
                    <div class="portfolio-caption">
                        <h4>${proj.name}</h4>
                        <p class="text-muted">${proj.title}</p>
                    </div>
                </div>
        `;
    });
    $('.my-projs').html(strHtmls);
}

function onOpenModal(id) {
    renderModal(id);
}

function renderModal(id) {
    // var projs = getProjs();
    var strHtmls;
    var currProj = getProjById(id);
    var strHtmls = `
        <h2>${currProj.name}</h2>
        <p class="item-intro text-muted">${currProj.title}</p>
        <img class="img-fluid d-block mx-auto" src=${currProj.url} alt="">
        <p>Use this area to describe your project. ${currProj.desc}</p>
        <ul class="list-inline">
            <li>Date: ${currProj.publishedAt}</li>
            <li>Client: Threads</li>
            <li>Category: ${currProj.labels}</li>
        </ul>
        <a href=${currProj.link}>Go Visit!</a>
        `;
    $('.my-modals').html(strHtmls);
}

function contact() {
    $('form .btn-mail').click(() => {
        var email = $('.mail').val();
        var subject = $('.subject').val();
        var msg = $('.msg').val();
        window.open(
            `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${msg}`
        );
        $('.mail').val('');
        $('.subject').val('');
        $('.msg').val('');
        $('.aside').removeClass('offcanvas-aside-open');
    });
}