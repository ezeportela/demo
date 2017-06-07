Meteor.methods({
  updateApplication(appId, app) {
    check(appId, String)
    check(app, {
      name: String,
      title: String,
      img: String,
      link: String,
      description: String,
      order: Number,
      enabled: Number,
    })

    Applications.update({ _id: appId }, { $set: app  })
  },
  enableApplication(name, state) {
    Applications.update({ name: name }, { $set: { enabled: state }})
  },
  reset() {
    Applications.remove({})
  }
})
