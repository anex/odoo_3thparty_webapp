var server =  'http://localhost:8069';
var options = {'use_cors': false}
var db = 'test';
var user = 'user';
var pass = 'pass';

(function() {
    //Search Example
    /*openerp.session = new openerp.Session(self, server, options)
    openerp.session.session_authenticate(db, user, pass)
    model = openerp.session.model('res.partner')
    console.log(model);
    model.call('search_read', [[]]).done(function (response){
        console.log(response)
    })*/
})();

$(document).ready(function(){
    $("#form").submit(function(event) {
        var $inputs = $('#form :input');
        var values = {};

        $inputs.each(function() {
            values[this.name] = $(this).val();
        });

        console.log(values)

        openerp.session = new openerp.Session(self, server, options)

        openerp.session.session_authenticate(db, user, pass)

        // JSON request
        //openerp.session.rpc("/crm/contactus", values)
        //    .done(function (data) {
        //        console.log(data)
        //    });
        
        // RPC request
        model = openerp.session.model('crm.lead')

        model.call('create', [values]).done(function (response){
            console.log(response)
        })
        event.preventDefault();
    });
});
