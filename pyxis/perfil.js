document.addEventListener("DOMContentLoaded", () => {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado'));
  if (!usuario) {
    alert("Você precisa estar logado para ver o perfil.");
    window.location.href = "login2.html";
    return;
  }

  // Preencher campos
  document.getElementById('nome').value = usuario.nome || '';
  document.getElementById('email').value = usuario.email || '';
  document.getElementById('telefone').value = usuario.numero || '';

  // Carregar imagem (se houver)
  const foto = localStorage.getItem('fotoUsuario');
  if (foto) {
    document.getElementById('fotoUsuario').src = foto;
  }

  // Alterar imagem de perfil
  document.getElementById('fotoInput').addEventListener('change', function () {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        document.getElementById('fotoUsuario').src = reader.result;
        localStorage.setItem('fotoUsuario', reader.result);
      };
      reader.readAsDataURL(file);
    }
  });

  // Salvar alterações
  document.getElementById('formPerfil').addEventListener('submit', e => {
    e.preventDefault();
    usuario.nome = document.getElementById('nome').value.trim();
    usuario.numero = document.getElementById('telefone').value.trim();

    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    alert("Perfil atualizado com sucesso!");
  });

  // Logout
  document.getElementById('logout').addEventListener('click', () => {
    localStorage.removeItem('usuarioLogado');
    window.location.href = "login2.html";
  });
});
    