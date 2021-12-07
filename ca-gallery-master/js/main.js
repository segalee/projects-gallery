'use strict';
console.log('Starting up');

// onload:
$(onInit);

function onInit() {
    //     $('.btn-add-car').click(onAddCar)
    //     $('.btn-next-page').click(onNextPage)
    //     $('.btn-close').click(onCloseModal)
    renderProjs();
    renderModals();
    //     renderVendors();
}

function renderProjs() {
    var projs = getProjs();
    var strHtmls = projs.map(function(proj) {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
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

function renderModals() {
    var projs = getProjs();
    var currProj = getProjById(projId);
    var strHtmls = projs.map(function(proj) {
        return `
        <h2>${currProj.name}</h2>
        <p class="item-intro text-muted">${currProj.title}</p>
        <img class="img-fluid d-block mx-auto" src=${currProj.url} alt="">
        <p>Use this area to describe your project. ${currProj.desc}</p>
        <ul class="list-inline">
            <li>Date: ${currProj.publishedAt}</li>
            <li>Client: Threads</li>
            <li>Category: ${currProj.labels}</li>
        </ul>
        `;
    });
    $('.my-modals').html(strHtmls);
}