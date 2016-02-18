Template.home.helpers({
    prices: Prices.find({})
});

Template.home.onRendered(function() {
    console.log("--- rendered ----");
    var query = Prices.find({});

    var handle = query.observeChanges({
        changed: function (id, fields) {

            console.log("a change!");
            //this will highlight the row of the updated favorite, using the id from the Favorites collection
            $('#' + id).effect('highlight', {}, 1500);
        }
    });
});
