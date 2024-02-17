import server from "./src";

const port = process.env.PORT || 80;

server.listen(port, () => {
    console.log(`server started on port ${port}.....`);
})



  
