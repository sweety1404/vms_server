module.exports = (sequelize, Sequelize) => {
  const Vendor = sequelize.define("vendor", {
    name: {
      type: Sequelize.STRING
    },
   
    comp_name: {
      type: Sequelize.STRING
    },
    mobile: {
      type: Sequelize.STRING
    },
    address: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    state: {
      type: Sequelize.STRING
    },
    district: {
      type: Sequelize.STRING
    },
    
    pincode: {
      type: Sequelize.STRING
    }
  });
  return Vendor;
};
