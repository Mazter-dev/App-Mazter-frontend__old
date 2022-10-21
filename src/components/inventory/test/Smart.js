// email: "je.nelsoncardenas@gmail.com",
// password: "PASSWORDmyASS1",
// region: "+57",

const ewelink = require("ewelink-api");

// (async () => {
    const connection = new ewelink({
        email: "je.nelsoncardenas@gmail.com",
        password: "PASSWORDmyASS1",
        region: "us",
    });

    /* get all devices */
    // const devices = await connection.getDevices();
    // console.log(devices);

    /* get specific devide info */
    // const device = await connection.getDevice("100123668e");
    // console.log(device);

    /* toggle device */
    // await 
    connection.toggleDevice("100123668e");
// })();
