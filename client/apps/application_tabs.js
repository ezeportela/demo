Template.ApplicationTabs.onRendered(function() {
  Meteor.defer(function () {
    $('.tabs').tabs()
  });
})

Template.ApplicationTabs.helpers({
  allApplications() {
    return Applications.find({}, { sort: { order: 1 } })
  }
})
