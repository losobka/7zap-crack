(function() {
    let body = document.querySelector('body');
    let alertScheme = body.querySelector('.alert-scheme');
    alertScheme.remove();

    body.innerHTML = body.innerHTML.replaceAll('blur(5px);', 'blur(0px)');
    document.body.innerHTML = body.innerHTML;

    document.body.querySelectorAll('tr.one_part').forEach(( tr, index ) => {
        const regexp = new RegExp(".*");
        const tds = tr.querySelectorAll('td');

        if (tds.length === 6) {
            tds.forEach(( td, tdIndex ) => {
                if (tdIndex === 5) {
                    const spans = td.querySelectorAll('span');
                    //console.log(spans[0].onclick.toString());
                    const span = spans[0];

                    const regexp = new RegExp("get_popup\('','.*','.*','(.*)','(.*)','.*'\)", "g");
                    const results = /get_popup\('.*?','.*?','.*?','(.*?)','(.*?)','.*?'\)/g.exec(span.onclick.toString());
                    if (null !== results) {
                        const name = results[1];
                        const code = results[2];
                        span.onclick = function (event) {
                            window.open('https://7zap.com/pl/part/FORD/" + code + "/','_blank');

                            return true;
                        };
                    }
                }
            });
        }
    });
})();