Meteor.methods({
  enableApplication(name, state) {
    Applications.update({ name: name }, { $set: { enabled: state }})
  },
  reset() {
    Applications.remove({})
  }
})
