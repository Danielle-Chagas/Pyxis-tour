
    function cadastrar() {
      const nome = document.getElementById('nome').value.trim();
      const email = document.getElementById('email').value.trim();
      const numero= document.getElementById('numero').value.trim();
      const senha = document.getElementById('senha').value;
      const confirmaSenha= document.getElementById('confirmaSenha').value;

      if (!nome || !email || !numero|| !senha|| !confirmaSenha) {
        alert("Preencha todos os campos.");
        return;
      }

      if(senha !== confirmaSenha){
        alert('As senhas não coincidem');
        return;
      }

      const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
      const existe = usuarios.find(u => u.email === email);

      if (existe) {
        alert("Este e-mail já está cadastrado.");
        return;
      }

      usuarios.push({ nome, email, numero, senha });
      localStorage.setItem('usuarios', JSON.stringify(usuarios));
      alert("Cadastro realizado com sucesso!");
      
      window.location.href = "login2.html";
    }
 
