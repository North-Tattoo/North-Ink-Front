package saopaulo.tech.school.cruduser;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController implements CrudInterface {

    private List<Usuario> usuarios = new ArrayList<>();
    private int id = 0;

    @Override
    public boolean emailValido(String email) {
        // Verifica se o e-mail possui pelo menos um caractere antes e depois do "@"
        return email.matches(".+@.+");
    }

    @Override
    public boolean emailCadastrado(String email) {
        for (Usuario usuario : usuarios) {
            if (usuario.getEmail().equals(email)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean telefoneValido(Integer telefone) {
        // Verifica se o telefone não é nulo
        return telefone != null;
    }

    @Override
    public boolean telefoneCadastrado(Integer telefone) {
        for (Usuario usuario : usuarios) {
            if (usuario.getTelefone() != null && usuario.getTelefone().equals(telefone)) {
                return true;
            }
        }
        return false;
    }

    @PostMapping
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario) {
        if (!emailValido(usuario.getEmail())) {
            return ResponseEntity.status(400).build();
        }
        if (emailCadastrado(usuario.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        if (!telefoneValido(usuario.getTelefone())) {
            return ResponseEntity.status(400).build();
        }
        if (telefoneCadastrado(usuario.getTelefone())) {
            return ResponseEntity.status(409).build();
        }

        usuario.setId(++id);
        usuarios.add(usuario);
        return ResponseEntity.status(201).body(usuario);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> buscarUsuarioId(@PathVariable int id) {
        Usuario usuario = buscarUsuarioPorId(id);
        if (usuario != null) {
            return ResponseEntity.status(200).body(usuario);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> atualizar(@RequestBody Usuario usuario, @PathVariable int id) {
        if (!emailValido(usuario.getEmail())) {
            return ResponseEntity.status(400).build();
        }
        if (emailCadastrado(usuario.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        if (!telefoneValido(usuario.getTelefone())) {
            return ResponseEntity.status(400).build();
        }

        Usuario usuarioAtualizado = buscarUsuarioPorId(id);
        if (usuarioAtualizado != null) {
            usuarioAtualizado.setEmail(usuario.getEmail());
            usuarioAtualizado.setNome(usuario.getNome());
            usuarioAtualizado.setSenha(usuario.getSenha());
            usuarioAtualizado.setTelefone(usuario.getTelefone());
            usuarioAtualizado.setEstilo(usuario.getEstilo());
            usuarioAtualizado.setQtdExperiencia(usuario.getQtdExperiencia());
            return ResponseEntity.status(200).body(usuarioAtualizado);
        } else {
            return ResponseEntity.status(404).build();
        }
    }


    @GetMapping("/estilo/{estilo}")
    public ResponseEntity<List<Usuario>> buscarUsuariosPorEstilo(@PathVariable String estilo) {
        List<Usuario> usuariosPorEstilo = new ArrayList<>();
        for (Usuario usuario : usuarios) {
            if (usuario.getEstilo().equals(estilo)) {
                usuariosPorEstilo.add(usuario);
            }
        }
        if (!usuariosPorEstilo.isEmpty()) {
            return ResponseEntity.status(200).body(usuariosPorEstilo);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PatchMapping("/estilo/{estilo}")
    public ResponseEntity<Usuario> atualizarEstiloUsuario(@PathVariable String estilo, @RequestBody Usuario novoUsuario) {
        Usuario usuarioExistente = buscarUsuarioPorEstilo(estilo);
        if (usuarioExistente != null) {
            usuarioExistente.setEstilo(novoUsuario.getEstilo());
            return ResponseEntity.status(200).body(usuarioExistente);
        } else {
            return ResponseEntity.status(404).build();
        }
    }



    @DeleteMapping("/{id}")
    public ResponseEntity<Usuario> deletar(@PathVariable int id) {
        Usuario usuario = buscarUsuarioPorId(id);
        if (usuario != null) {
            usuarios.remove(usuario);
            return ResponseEntity.status(204).body(usuario);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    public Usuario buscarUsuarioPorEstilo(String estilo) {
        for (Usuario usuario : usuarios) {
            if (usuario.getEstilo().equals(estilo)) {
                return usuario;
            }
        }
        return null;
    }

    private Usuario buscarUsuarioPorId(int id) {
        for (Usuario usuario : usuarios) {
            if (usuario.getId() == id) {
                return usuario;
            }
        }
        return null;
    }
}
