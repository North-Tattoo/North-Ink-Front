package school.sptech.northink.projetonorthink.domain.service.usuario.dto.usuario;

import jakarta.validation.constraints.*;

public class UsuarioCriacaoDto {

    @NotNull
    @Size(min = 3, max = 20)
    private String nome;

    @NotNull
    @Size(min = 3, max = 30)
    private String sobrenome;

    @NotNull
    @Pattern(regexp = "^[0-9]{11}$", message = "O CPF deve conter apenas dígitos e ter 11 caracteres")
    private String cpf;

    @NotNull(message = "O celular não pode ser nulo")
    @Size(min = 8, message = "O celular deve ter no mínimo 8 dígitos")
    @Pattern(regexp = "^[0-9]+$", message = "O celular deve conter apenas dígitos")
    private Long celular;

    @Email(regexp = "^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\\.[a-zA-Z]+\\.([a-zA-Z]+)?$", message = "O email não é válido")
    @NotNull
    private String email;

    @NotNull(message = "A senha não pode ser nula")
    @Size(min = 6, max = 20, message = "A senha deve ter entre 6 e 20 caracteres")
    @Pattern(regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&()_+{}|\"?><.,]).{6,}$")
    private String senha;

    @NotNull
    @Max(500)
    private String sobreMim;

    @Size(min = 3, max = 10)
    private String estilo;

    @NotNull
    private Double anosExperiencia;

    @NotNull
    private Double precoMin;

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

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

    public Long getCelular() {
        return celular;
    }

    public void setCelular(Long celular) {
        this.celular = celular;
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

    public String getSobreMim() {
        return sobreMim;
    }

    public void setSobreMim(String sobreMim) {
        this.sobreMim = sobreMim;
    }

    public String getEstilo() {
        return estilo;
    }

    public void setEstilo(String estilo) {
        this.estilo = estilo;
    }

    public Double getAnosExperiencia() {
        return anosExperiencia;
    }

    public void setAnosExperiencia(Double anosExperiencia) {
        this.anosExperiencia = anosExperiencia;
    }

    public Double getPrecoMin() {
        return precoMin;
    }

    public void setPrecoMin(Double precoMin) {
        this.precoMin = precoMin;
    }
}