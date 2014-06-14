if (Meteor.isClient) {
  Locals = new Meteor.Collection("locals");

  Template.addLocal.events({
    'click input.add-local': function (e) {
      e.preventDefault();

      var properties = {
        name: $('#local_name').val(),
        neighborhood: $('#local_neighborhood').val(),
        city: $('#local_city').val(),
        circumstance: $('#local_circumstance').val()
      };

      Meteor.call("addLocal", properties,function(error , localId){
        console.log('Added local with ID: ' + localId);
        $('#local_name').val('');
        $('#local_neighborhood').val('');
        $('#local_city').val('');
        $('#local_circumstance').val('');
      });
    }
  });

  Template.showLocals.helpers({
    locals: function() {
      return Locals.find().fetch();
    }
  });

  Template.showLocals.events({
    'click .delete': function(e) {
      e.preventDefault();
      if (confirm("Are you sure?")) {
        Locals.remove(this._id);
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Locals = new Meteor.Collection("locals");

    Meteor.methods({
      addLocal : function(properties){
        console.log('Adding local...');
        var localId = Locals.insert({
          'name': properties.name,
          'neighborhood': properties.neighborhood,
          'city': properties.city,
          'circumstance': properties.circumstance,
          'added': new Date()
        });
        return localId;
      }
    });
  });
}
