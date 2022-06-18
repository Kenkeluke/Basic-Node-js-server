//this file specifically handles routes 
// this is then imprted in the server.js file 
const url = require('url');
let fs = require('fs');

html = {
    render(path, res)
    {
        fs.readFile(path, null, function(error, data){
            if (error)
            {
                res.writeHead(404);
                res.write("Oops, file not found, check again");
            }
            else
             {
                res.write(data);
            }
            res.end(null);
        });
    }
};

module.exports = {
    handleRequest(req, res)
    {
        res.writeHead(200, {'Content-Type': 'text/html'});

        let path = url.parse(req.url).pathname;
        
        switch (path)
        {
            case '/':
                html.render('./index.html', res);
                break;

            case '/home':
                html.render('./index.html', res);
                break;

            case '/about':
                html.render('./about.html', res);
                break;

            case '/contact':
                html.render('./contact.html', res);
                break;

            default:
                res.writeHead(404);
                res.write('Route not found, check again');
                res.end();
        }

    }
};