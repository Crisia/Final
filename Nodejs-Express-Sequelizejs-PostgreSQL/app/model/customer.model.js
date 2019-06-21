module.exports = (sequelize, Sequelize) => {
	const Customer = sequelize.define('customer', {
	  nameemployee: {
			type: Sequelize.STRING
	  },
	  picture: {
		type: Sequelize.STRING
      },
	  identificacion: {
			type: Sequelize.STRING
	  },
	  phone: {
		type: Sequelize.INTEGER
	  },
	  email: {
		type: Sequelize.STRING
      },
	  idManager: {
		  type: Sequelize.STRING
	  }
	});
	
	return Customer;
}