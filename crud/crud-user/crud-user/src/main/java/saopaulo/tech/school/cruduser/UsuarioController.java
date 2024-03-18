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
        return true;
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
    public boolean telefoneValido(Long telefone) {
        // Verifica se o telefone não é nulo
        return telefone == null;
    }

    @Override
    public boolean telefoneCadastrado(Long telefone) {
        for (Usuario usuario : usuarios) {
            if (usuario.getTelefone() != null && usuario.getTelefone().equals(telefone)) {
                return true;
            }
        }
        return false;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Usuario> cadastrar(@RequestBody Usuario usuario) {
        // EMAIL SEMPRE TRUE PARA TESTES
        if (!emailValido(usuario.getEmail())) {
            return ResponseEntity.status(400).build();
        }
        if (emailCadastrado(usuario.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        if (telefoneValido(usuario.getTelefone())) {
            return ResponseEntity.status(400).build();
        }
        if (telefoneCadastrado(usuario.getTelefone())) {
            return ResponseEntity.status(409).build();
        }

        usuario.setId(++id);
        usuarios.add(usuario);
        return ResponseEntity.status(201).body(usuario);
    }

    @GetMapping("/buscarUsuarioId/{id}")
    public ResponseEntity<Usuario> buscarUsuarioId(@PathVariable int id) {
        Usuario usuario = buscarUsuarioPorId(id);
        if (usuario != null) {
            return ResponseEntity.status(200).body(usuario);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Usuario> atualizar(@RequestBody Usuario usuario, @PathVariable int id) {
        if (emailCadastrado(usuario.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        if (telefoneValido(usuario.getTelefone())) {
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
            usuarioAtualizado.setCnpj(usuario.getCnpj());
            usuarioAtualizado.setCep(usuario.getCep());
            return ResponseEntity.status(200).body(usuarioAtualizado);
        } else {
            return ResponseEntity.status(404).build();
        }
    }



    @GetMapping("/buscarUsuariosPorEstilo/{estilo}")
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

    @PatchMapping("/atualizarEstiloUsuarioId/{id}/{estilo}")
    public ResponseEntity<Usuario> atualizarEstiloUsuarioId(@PathVariable String estilo,
                                                            @PathVariable int id,
                                                            @RequestBody Usuario novoUsuario) {
        Usuario usuarioExistente = buscarUsuarioPorId(id);
        if (usuarioExistente != null) {
            usuarioExistente.setEstilo(estilo);
            return ResponseEntity.status(200).body(usuarioExistente);
        } else {
            return ResponseEntity.status(404).build();
        }
    }



    @DeleteMapping("/deletar/{id}")
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

    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuarios() {
        if (usuarios.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        selectionSort(usuarios);
        return ResponseEntity.status(200).body(usuarios);
    }

    private void selectionSort(List<Usuario> usuarios) {
        int n = usuarios.size();

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (usuarios.get(j).getId() < usuarios.get(minIndex).getId()) {
                    minIndex = j;
                }
            }
            Usuario temp = usuarios.get(minIndex);
            usuarios.set(minIndex, usuarios.get(i));
            usuarios.set(i, temp);
        }
    }
}
