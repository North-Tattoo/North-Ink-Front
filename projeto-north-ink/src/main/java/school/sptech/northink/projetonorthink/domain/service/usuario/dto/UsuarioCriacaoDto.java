package school.sptech.northink.projetonorthink.domain.service.usuario.dto;

import jakarta.validation.constraints.*;

public class UsuarioCriacaoDto {

    @NotNull
    private String nome;
    @NotNull
    private String sobrenome;

    @NotNull
    @Size(min = 8)
    private Long telefone;

    @Email
    @NotNull
    private String email;

    @NotNull
    @Size(min = 6, max = 20)
    private String senha;

    @Size(min = 3, max = 10)
    private String estilo;

    @Size(max = 8)
    private String cep;
    @NotNull
    private Double anosExperiencia;

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSobrenome() {
        return sobrenome;
    }

    public void setSobrenome(String sobrenome) {
        this.sobrenome = sobrenome;
    }

    public Long getTelefone() {
        return telefone;
    }

    public void setTelefone(Long telefone) {
        this.telefone = telefone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getEstilo() {
        return estilo;
    }

    public void setEstilo(String estilo) {
        this.estilo = estilo;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public Double getAnosExperiencia() {
        return anosExperiencia;
    }

    public void setAnosExperiencia(Double anosExperiencia) {
        this.anosExperiencia = anosExperiencia;
    }
}
