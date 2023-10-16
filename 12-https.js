const http=require ('http');

const server=http.createServer((req,res)=>{
 if(req.url==='/'){
   res.end('Welcome to our home page');  //we can also put what we wanna write in it
   return; // use return statements so we don't have a multiple res.end error
   
 }
// console.log(req); //bahut bada random ball of information
 // res.write();
 // res.end();
 if(req.url==='/about'){
   res.end('Here is our short history');
   return;
 }
 res.end(`
 <h1>Opps!</h1>
 <p>We can't seem to find the page you are looking for</p>
 <a href="/">Back home</a>
 `);
});

server.listen(5000);
