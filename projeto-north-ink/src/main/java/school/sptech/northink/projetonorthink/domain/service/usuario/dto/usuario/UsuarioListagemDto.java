package school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class UsuarioListagemDto {

    // classe resposavel por criar a dto de listagem dos tatuadores
    private Long id;
    private String nome;
    private String sobrenome;
    private String cpf;
    private String celular;
    private String email;
    private String senha;
    private String sobreMim;
    private List<String> estilo;
}
