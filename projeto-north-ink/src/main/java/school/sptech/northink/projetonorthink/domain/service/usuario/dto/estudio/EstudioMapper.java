package school.sptech.northink.projetonorthink.domain.service.usuario.dto.estudio;

import school.sptech.northink.projetonorthink.domain.entity.Estudio;
import school.sptech.northink.projetonorthink.domain.entity.Usuario;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioAtualizacaoDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioCriacaoDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioListagemDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario.UsuarioMapper;

import java.util.List;

public class EstudioMapper {


// metodo de criação do estudio no sistema
    public static Estudio of(EstudioCriacaoDto estudioCriacaoDto){
        Estudio estudio = new Estudio();

//        usuario.setNome(usuarioCriacaoDto.getNome());
//        usuario.setSobrenome(usuarioCriacaoDto.getSobrenome());
//        usuario.setCpf(usuarioCriacaoDto.getCpf());
//        usuario.setCelular(usuarioCriacaoDto.getCelular());
//        usuario.setEmail(usuarioCriacaoDto.getEmail());
//        usuario.setSenha(usuarioCriacaoDto.getSenha());
//        usuario.setSobreMim(usuarioCriacaoDto.getSobreMim());
//        usuario.setEstilo(usuarioCriacaoDto.getEstilo());

        return estudio;
    }


    // metodo convertendo a entity em uma dto
    public static EstudioListagemDto toDto(Estudio estudio) {
        if (estudio == null) return null;

        EstudioListagemDto estudioListagemDto = new EstudioListagemDto();

        // CORRIGIR OS DADOS ABAIXO E ADEQUAR A ENTITIDY DE ESTUDIO
//        usuarioListagemDto.setId(usuario.getId());
//        usuarioListagemDto.setNome(usuario.getNome());
//        usuarioListagemDto.setSobrenome(usuario.getSobrenome());
//        usuarioListagemDto.setCpf(usuario.getCpf());
//        usuarioListagemDto.setCelular(usuario.getCelular());
//        usuarioListagemDto.setEmail(usuario.getEmail());
//        usuarioListagemDto.setSenha(usuario.getSenha());
//        usuarioListagemDto.setSobreMim(usuario.getSobreMim());
//        usuarioListagemDto.setEstilo(usuario.getEstilo());

        return estudioListagemDto;
    }

    // convertendo uma dto para um entidade
    public static Estudio toEntity(EstudioCriacaoDto estudioCriacaoDto) {
        if (estudioCriacaoDto == null) return null;

        Estudio estudio = new Estudio();

//        usuario.setNome(usuarioCriacaoDto.getNome());
//        usuario.setSobrenome(usuarioCriacaoDto.getSobrenome());
//        usuario.setCpf(usuarioCriacaoDto.getCpf());
//        usuario.setCelular(usuarioCriacaoDto.getCelular());
//        usuario.setEmail(usuarioCriacaoDto.getEmail());
//        usuario.setSenha(usuarioCriacaoDto.getSenha());
//        usuario.setSobreMim(usuarioCriacaoDto.getSobreMim());
//        usuario.setEstilo(usuarioCriacaoDto.getEstilo());

        return estudio;
    }

    public static List<EstudioListagemDto> toDto(List<Estudio> entities) {
        return entities.stream().map(EstudioMapper::toDto).toList();
    }

    public static Estudio atualizarEstudio(Estudio estudioExistente, EstudioAtualizacaoDto estudioAtualizacaoDto) {
        // Atualize os campos do usuário existente com base nos dados do DTO de atualização
//        usuarioExistente.setNome(usuarioAtualizacaoDto.getNome());
//        usuarioExistente.setSobrenome(usuarioAtualizacaoDto.getSobrenome());
//        usuarioExistente.setCpf(usuarioAtualizacaoDto.getCpf());
//        usuarioExistente.setCelular(usuarioAtualizacaoDto.getCelular());
//        usuarioExistente.setEmail(usuarioAtualizacaoDto.getEmail());
//        usuarioExistente.setSenha(usuarioAtualizacaoDto.getSenha());
//        usuarioExistente.setSobreMim(usuarioAtualizacaoDto.getSobreMim());
//        usuarioExistente.setEstilo(usuarioAtualizacaoDto.getEstilo());

        return estudioExistente;
    }
}
