module.exports = app => {
    const vendors = require("../controllers/vendor.controller.js");
  
    var router = require("express").Router();
    
    // Create a new Vendors
    router.post("/", vendors.create);
  
    // Retrieve all Vendors
    router.get("/", vendors.findAll);
  
    // Retrieve all published Vendors
    router.get("/published", vendors.findAllPublished);
  
    // Retrieve a single Vendor with id
    router.get("/:id", vendors.findOne);
  
    // Update a Vendor with id
    router.put("/:id", vendors.update);
  
    // Delete a Vendor with id
    router.delete("/:id", vendors.delete);
  
    // Delete all Vendors
    router.delete("/", vendors.deleteAll);

     // Fetch Counting of all Vendors
  router.get("/test/ftd", vendors.findTotalVendors);
  
    app.use('/api/vendors', router);
  };
  
