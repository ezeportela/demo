Template.ApplicationTabs.onRendered(function() {
  $('.tabs').tabs()
})

Template.ApplicationTabs.helpers({
  allApplications() {
    return Applications.find({}, { sort: { order: 1 } })
  }
})
