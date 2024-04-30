package school.sptech.northink.projetonorthink.domain.entity;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
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

}
