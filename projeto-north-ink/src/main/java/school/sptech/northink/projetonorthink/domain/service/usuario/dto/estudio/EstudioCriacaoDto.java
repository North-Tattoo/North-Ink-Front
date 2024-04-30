package school.sptech.northink.projetonorthink.domain.service.usuario.dto.estudio;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Getter
@Setter
@NoArgsConstructor
public class EstudioCriacaoDto {

    @NotNull
    private String nome;

    @NotNull
    private String horarioFuncionamento;

    @Email
    @NotNull
    private String email;

    @Size(min = 10)
    private String descricao;

    @NotNull
    private String logradouro;

    @NotNull
    private String numero;

    @NotNull
    private String complemento;

    @NotNull
    private String CEP;


}
