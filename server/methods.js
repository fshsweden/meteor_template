Meteor.startup(function() {

});

Meteor.methods({
    "updateProduct" : function(options) {

        console.log("updateProduct called with:" + JSON.stringify(options));

        var ret = {};
        var ret = JSON.parse(options);

        /*
        options.replace(/(\b[^:]+):'([^']+)'/g, function ($0, param, value)      {
            console.log("Setting " + param + " to " + value);
            ret[param] = value;
        });
        */

        console.log("Updating:" + JSON.stringify(ret));

        Prices.update({name: ret['name']},  ret);
    }
});
