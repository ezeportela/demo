Template.Applications.helpers({
  applications() {
    return Applications.find({ enabled: 1 }, { sort: { order: 1 }})
  },
  isAdmin() {
    return Session.get('role') === 'admin'
  },
})
