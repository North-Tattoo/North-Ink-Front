package school.sptech.northink.projetonorthink.domain.service.usuario.dto;

import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public class TatuagemCriacao {

    @Size(min = 10, max = 1000)
    @NotNull
    private String descricao;
    @NotNull
    private Double tamanho;
    @NotNull
    private Double preco;
    @NotNull
    private String descricaoImagem;
    @NotNull
    private String nomeArquivo;
    @NotNull
    private String tipoArquivo;
    @NotNull
    private Double tamanhoArquivo;

    public String getDescricao() {
        return descricao;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public Double getTamanho() {
        return tamanho;
    }

    public void setTamanho(Double tamanho) {
        this.tamanho = tamanho;
    }

    public Double getPreco() {
        return preco;
    }

    public void setPreco(Double preco) {
        this.preco = preco;
    }

    public String getDescricaoImagem() {
        return descricaoImagem;
    }

    public void setDescricaoImagem(String descricaoImagem) {
        this.descricaoImagem = descricaoImagem;
    }

    public String getNomeArquivo() {
        return nomeArquivo;
    }

    public void setNomeArquivo(String nomeArquivo) {
        this.nomeArquivo = nomeArquivo;
    }

    public String getTipoArquivo() {
        return tipoArquivo;
    }

    public void setTipoArquivo(String tipoArquivo) {
        this.tipoArquivo = tipoArquivo;
    }

    public Double getTamanhoArquivo() {
        return tamanhoArquivo;
    }

    public void setTamanhoArquivo(Double tamanhoArquivo) {
        this.tamanhoArquivo = tamanhoArquivo;
    }
}