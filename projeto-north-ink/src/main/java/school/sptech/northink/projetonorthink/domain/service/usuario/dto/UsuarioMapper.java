package school.sptech.northink.projetonorthink.domain.service.usuario.dto;

import school.sptech.northink.projetonorthink.domain.entity.Usuario;
import school.sptech.northink.projetonorthink.domain.service.usuario.autenticacao.dto.UsuarioTokenDto;

public class UsuarioMapper {


    // pegando as informações do front end - CADASTRO
    public static Usuario of(UsuarioCriacaoDto usuarioCriacaoDto){
        Usuario usuario = new Usuario();

        usuario.setNome(usuarioCriacaoDto.getNome());
        usuario.setSobrenome(usuarioCriacaoDto.getSobrenome());
        usuario.setTelefone(usuarioCriacaoDto.getTelefone());
        usuario.setEmail(usuarioCriacaoDto.getEmail());
        usuario.setSenha(usuarioCriacaoDto.getSenha());
        usuario.setEstilo(usuarioCriacaoDto.getEstilo());
        usuario.setCep(usuarioCriacaoDto.getCep());
        usuario.setAnosExperiencia(usuarioCriacaoDto.getAnosExperiencia());

        return usuario;
    }

    // convertendo em autenticação
    public static UsuarioTokenDto of(Usuario usuario, String token){
        UsuarioTokenDto usuarioTokenDto = new UsuarioTokenDto();

        usuarioTokenDto.setUserId(usuario.getId());
        usuarioTokenDto.setEmail(usuario.getEmail());
        usuarioTokenDto.setNome(usuario.getNome());
        usuarioTokenDto.setToken(token);

        return usuarioTokenDto;
    }

}
