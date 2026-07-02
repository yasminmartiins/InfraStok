const usuariosMock = [
    { id: 1, nome: "Ana Silva", email: "ana@empresa.com", ativos: ["Notebook Dell", "Fone Sony"] },
    { id: 2, nome: "Carlos Souza", email: "carlos@empresa.com", ativos: ["Monitor LG"] }
];

function renderizarUsuarios() {
    const container = document.getElementById('lista-usuarios');
    container.innerHTML = usuariosMock.map(user => `
        <div class="card user-card" onclick="exibirDetalhes(${user.id})">
            <h3>${user.nome}</h3>
            <p>${user.email}</p>
            <div class="active-assets">
                <strong>Ativos:</strong> ${user.ativos.join(', ')}
            </div>
            <button onclick="event.stopPropagation(); alert('Atribuir item para ${user.nome}')">Atribuir Item</button>
        </div>
    `).join('');
}

renderizarUsuarios();
