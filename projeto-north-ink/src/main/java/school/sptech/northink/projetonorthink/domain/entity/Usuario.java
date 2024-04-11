package school.sptech.northink.projetonorthink.domain.entity;

public class Usuario {
    private int id;

    private String email, nome, senha, estilo, cnpj, cep;

    private Long telefone;

    private Double qtdExperiencia;

    public Long getTelefone() {
        return telefone;
    }


    public String getEstilo() {
        return estilo;
    }

    public void setEstilo(String estilo) {
        this.estilo = estilo;
    }

    public void setTelefone(Long telefone) {
        this.telefone = telefone;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

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

    public Double getQtdExperiencia() {
        return qtdExperiencia;
    }

    public void setQtdExperiencia(Double qtdExperiencia) {
        this.qtdExperiencia = qtdExperiencia;
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
