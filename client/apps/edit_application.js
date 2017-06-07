Template.EditApplication.helpers({
  isEnabled() {
    return this.enabled === 1 ? 'checked' : '';
  }
})

Template.EditApplication.events({
  'submit form'(e, application) {
    e.preventDefault()

    const app = {
      name: $(e.target).find('[name=app_name]').val(),
      title: $(e.target).find('[name=app_title]').val(),
      img: $(e.target).find('[name=app_img]').val(),
      link: $(e.target).find('[name=app_link]').val(),
      description: $(e.target).find('[name=app_description]').val(),
      order: parseInt($(e.target).find('[name=app_order]').val()),
      enabled: $(e.target).find('[name=app_enabled]').is(':checked') ? 1 : 0,
    }

    Meteor.call('updateApplication', application.data._id, app)
  }
})
