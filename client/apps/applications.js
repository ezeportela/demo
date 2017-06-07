Template.Applications.helpers({
  applications() {
    return Applications.find({ enabled: 1 }, { sort: { order: 1 }})
  }
})
