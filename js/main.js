const pedidos = [
    {
        id: 1,
        locker: 'Av Mutinga',
        cliente: 'Jose',
        pedido: '7639141',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Depositado',
    },
    {
        id: 2,
        locker: 'Shop Tiete',
        cliente: 'Maria',
        pedido: '7639142',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Retirado',
    },
    {
        id: 3,
        locker: 'Shop Tiete',
        cliente: 'Renato',
        pedido: '7639143',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Retirado',
    },
    {
        id: 4,
        locker: 'Shop Tiete',
        cliente: 'Emerson',
        pedido: '7639144',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Depositado',
    },
    {
        id: 5,
        locker: 'Shop Tiete',
        cliente: 'Esdras',
        pedido: '7639145',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Atrasado',
    },
    {
        id: 6,
        locker: 'Shop Tiete',
        cliente: 'William',
        pedido: '7639146',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Depositado',
    },
    {
        id: 7,
        locker: 'Av Mutinga',
        cliente: 'Rosane',
        pedido: '7639147',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Atrasado',
    },
    {
        id: 8,
        locker: 'Shop Tiete',
        cliente: 'Julio',
        pedido: '7639148',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Depositado',
    },
    {
        id: 9,
        locker: 'Shop Tiete',
        cliente: 'Diego',
        pedido: '7639149',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Atrasado',
    },
    {
        id: 10,
        locker: 'Shop Tiete',
        cliente: 'Gustavo',
        pedido: '7639150',
        tel: '11 98452 4412', 
        criado: '24/11/2020',
        status: 'Depositado',
    },
]

const criaTabela = {
    pedidosContainer: document.querySelector('#tabela tbody'),
    addTable(pedidos, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = criaTabela.innerHTMLTable(pedidos)

        criaTabela.pedidosContainer.appendChild(tr)
    },
    innerHTMLTable(pedidos) {
        const html = `
        <td>${pedidos.locker}</td>
        <td>${pedidos.cliente}</td>
        <td>${pedidos.pedido}</td>
        <td>${pedidos.tel}</td>
        <td>${pedidos.criado}</td>
        <td>${pedidos.status}</td>
        `
        return html
    }
}

pedidos.forEach(function(pedido) {
    criaTabela.addTable(pedido)
})