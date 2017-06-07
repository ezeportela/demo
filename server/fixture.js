if(Applications.find().count() === 0) {
  Applications.insert({
  	name: 'blocks',
  	title: 'Meteor Blocks',
  	description: 'A meteor blocks application',
  	img: 'https://img.utdstc.com/icons/256/minecraft-.png',
  	link: 'http://meteor-block.herokuapp.com/',
  	order: 1,
  })

  Applications.insert({
  	name: 'contacts',
  	title: 'Contactos',
  	description: 'Agenda de contactos',
  	img: 'http://st.depositphotos.com/1005920/3371/i/950/depositphotos_33710079-stock-photo-add-contact-icon.jpg',
  	link: 'http://meteor-block.herokuapp.com/',
  	order: 2,
  })

  Applications.insert({
  	name: 'clubs',
  	title: 'Tabla de Posiciones',
  	description: 'Tabla de Posiciones',
  	img: 'http://st.depositphotos.com/1005920/3371/i/950/depositphotos_33710079-stock-photo-add-contact-icon.jpg',
  	link: 'http://meteor-block.herokuapp.com/',
  	order: 3,
  })
}
