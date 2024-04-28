package school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario;

import school.sptech.northink.projetonorthink.domain.entity.Usuario;
import school.sptech.northink.projetonorthink.domain.service.usuario.autenticacao.dto.UsuarioTokenDto;

public class UsuarioMapper {


    // pegando as informações do front end - CADASTRO
    public static Usuario of(UsuarioCriacaoDto usuarioCriacaoDto){
        Usuario usuario = new Usuario();

        usuario.setNome(usuarioCriacaoDto.getNome());
        usuario.setSobrenome(usuarioCriacaoDto.getSobrenome());
        usuario.setCpf(usuarioCriacaoDto.getCpf());
        usuario.setCelular(usuarioCriacaoDto.getCelular());
        usuario.setEmail(usuarioCriacaoDto.getEmail());
        usuario.setSenha(usuarioCriacaoDto.getSenha());
        usuario.setSobreMim(usuarioCriacaoDto.getSobreMim());
        usuario.setEstilo(usuarioCriacaoDto.getEstilo());
        usuario.setAnosExperiencia(usuarioCriacaoDto.getAnosExperiencia());
        usuario.setSobreMim(usuarioCriacaoDto.getSobreMim());

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
