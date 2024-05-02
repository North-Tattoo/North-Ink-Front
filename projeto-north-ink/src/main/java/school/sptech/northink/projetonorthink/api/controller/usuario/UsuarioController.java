package school.sptech.northink.projetonorthink.api.controller.usuario;

import jakarta.annotation.security.PermitAll;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import school.sptech.northink.projetonorthink.domain.entity.Usuario;
import school.sptech.northink.projetonorthink.domain.service.usuario.UsuarioService;
import school.sptech.northink.projetonorthink.domain.service.usuario.autenticacao.dto.UsuarioLoginDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.autenticacao.dto.UsuarioTokenDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioAtualizacaoDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioCriacaoDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioListagemDto;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    // Nessa classe está todas as requisições que o tatuador fará
    @Autowired
    private UsuarioService usuarioService;

    // criar usuario
    @PermitAll
    @PostMapping
    public ResponseEntity<Void> criar(@RequestBody @Valid UsuarioCriacaoDto usuarioCriacaoDto) {
        this.usuarioService.criar(usuarioCriacaoDto);
        return ResponseEntity.status(201).build();
    }

    // logar usuario
    @PostMapping("/login")
    public ResponseEntity<UsuarioTokenDto> login(@RequestBody UsuarioLoginDto usuarioLoginDto) {
        UsuarioTokenDto usuarioToken = this.usuarioService.autenticar(usuarioLoginDto);
        return ResponseEntity.status(200).body(usuarioToken);
    }

    // listar todos os usuarios
    @GetMapping
    public ResponseEntity<List<UsuarioListagemDto>>   listar() {
        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.listarUsuarios());
    }

    // listar usuario pelo id
    @GetMapping("/{id}")
    public ResponseEntity<UsuarioListagemDto> listarPeloId(@PathVariable Long id) {

        return ResponseEntity.status(HttpStatus.OK).body(usuarioService.listarUsuarioId(id));
    }

    // atualizar todos os dados do usuario
    @PutMapping("/{id}")
    public ResponseEntity<UsuarioAtualizacaoDto> atualizarUsuario(@PathVariable Long id, @RequestBody @Valid UsuarioAtualizacaoDto usuarioAtualizacaoDto) {
        usuarioService.atualizarUsuario(id, usuarioAtualizacaoDto);
        return ResponseEntity.status(200).body(usuarioAtualizacaoDto);
    }

    // deletar usuario
    @DeleteMapping("/{id}")
    public ResponseEntity<Usuario> deletar(@PathVariable Long id) {
        usuarioService.deletarUsuario(id);
        return ResponseEntity.status(200).build();
    }

    @PostMapping("/logout")
    public ResponseEntity<String> logout(HttpServletRequest request) {
        // Remove o token JWT do header Authorization
        String authorizationHeader = request.getHeader("Authorization");
        if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
            String token = authorizationHeader.substring(7); // Remove o prefixo "Bearer "
            // Lógica para invalidar ou expirar o token JWT (pode variar dependendo da implementação)
            // Exemplo: adicionar o token a uma lista de tokens inválidos
            SecurityContextHolder.clearContext();
            // tokenManager.invalidateToken(token);
            return ResponseEntity.ok("Logout realizado com sucesso.");
        }
        return ResponseEntity.badRequest().body("Falha ao realizar logout.");
    }
}
