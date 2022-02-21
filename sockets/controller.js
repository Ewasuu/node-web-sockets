



const socketController = (socket) => {

    socket.on('enviar-mensaje', ( payload, callback ) => {
	    
	    let id = 12345567899
	    callback(id)
	    socket.broadcast.emit('enviar-mensaje', payload)

    })

}

module.exports = {
	socketController
}