package school.sptech.northink.projetonorthink.domain.service.usuario.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Size;

public class UsuarioCriacaoDto {

    @Email
    private String email;

    @Size(min = 3, max = 10)
    private String nome;

    @Size(min = 6, max = 20)
    private String senha;

    @Size(min = 3, max = 10)
    private String estilo;

    @Size(max = 14)
    private String cnpj;

    @Size(max = 8)
    private String cep;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
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

    public String getCnpj() {
        return cnpj;
    }

    public void setCnpj(String cnpj) {
        this.cnpj = cnpj;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
}
