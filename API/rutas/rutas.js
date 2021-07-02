// body-parser
var bodyParser = require('body-parser');
api.use(bodyParser.json()); // support json encoded bodies
api.use(bodyParser.urlencoded({extended: true})); // support encoded bodies

//crear api con mongo

const PedidoController = require('../Controller/PedidoController.js')
api.post('/create',function(request,response){

    PedidoController.create(request,response)
})

api.post('/actualizar',function(request,response){
    
    PedidoController.updateOrden(request,response)
})

api.post('/eliminar',function(request,response){
    
    PedidoController.deleteOrden(request,response)
})

api.post('/listar',function(request,response){

    PedidoController.listar(request,response)
})

