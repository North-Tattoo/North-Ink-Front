package school.sptech.northink.projetonorthink.domain.entity;
import jakarta.persistence.*;

@Entity
public class Tatuagem {

     /*Classe que representa a tatuagem que será cadastrada no portfolio 1*n */
     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String descricao;
     private Double tamanho;
     private Double preco;
     private String descricaoImagem;
     private String nomeArquivo;
     private String tipoArquivo;
     private Double tamanhoArquivo;

     public Long getId() {
          return id;
     }

     public void setId(Long id) {
          this.id = id;
     }

     public Usuario getUsuario() {
          return usuario;
     }

     public void setUsuario(Usuario usuario) {
          this.usuario = usuario;
     }

     public String getDescricao() {
          return descricao;
     }

     public void setDescricao(String descricao) {
          this.descricao = descricao;
     }

     public double getTamanho() {
          return tamanho;
     }

     public void setTamanho(double tamanho) {
          this.tamanho = tamanho;
     }

     public double getPreco() {
          return preco;
     }

     public void setPreco(double preco) {
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

     @ManyToOne // indica que um usuario terá muitas tatuagens hehehe
     @JoinColumn(name = "usuario_id", referencedColumnName = "id")
     private Usuario usuario; // Esta é a chave estrangeira que faz referência ao usuário (tatuador)
}
