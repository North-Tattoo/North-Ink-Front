package school.sptech.northink.projetonorthink.domain.repository;

import school.sptech.northink.projetonorthink.domain.entity.Usuario;

import java.util.Optional;

public interface UsuarioRepository {

    // UTILIZADO NO JWT
    Optional<Usuario> findByEmail(String email);

}
