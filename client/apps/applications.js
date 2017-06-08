Template.Applications.helpers({
  applications() {
    return Applications.find({ enabled: 1 }, { sort: { order: 1 }})
  },
  applicationsAmount() {
    return Applications.find({ enabled: 1 }, { sort: { order: 1 }}).count()
  },
  isAdmin() {
    return Session.get('role') === 'admin'
  },
})
