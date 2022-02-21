const on = document.getElementById('on')
const of = document.getElementById('of')
const input = document.getElementById('txt-mensaje')
const btn = document.getElementById('btn-enviar')

//Online y Offline texto
on.style.display = 'none'
of.style.display = 'none'


const socket = io()


//Eventos Scokets
socket.on('connect', () => {
	of.style.display = 'none'
	on.style.display = 'block'
})

socket.on('disconnect', () => {
	on.style.display = 'none'
	of.style.display = 'block'
})

socket.on('enviar-mensaje', (dato) => {

	console.log(dato)
})

//Eventos del boton
btn.addEventListener('click', () => {
	
	const payload = {
		mensaje: input.value,
		id: 'idsazopapá',
		fecha: new Date().getTime()
	}	

	socket.emit('enviar-mensaje', payload, ( id ) => {
		console.log('Server', id)
	})

	input.value = ''	
})