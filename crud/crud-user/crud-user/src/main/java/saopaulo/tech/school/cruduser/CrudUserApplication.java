package saopaulo.tech.school.cruduser;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
public class CrudUserApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudUserApplication.class, args);

		// Criar uma instância do EstudioController para acessar os métodos
		EstudioController estudioController = new EstudioController();

		// Adicionar alguns Estudios à lista
		estudioController.estudios.add(new Estudio(1, "Estudio A", "Endereco A", "CEP A", "Pais A", "Cidade A"));
		estudioController.estudios.add(new Estudio(2, "Estudio B", "Endereco B", "CEP B", "Pais B", "Cidade B"));
		estudioController.estudios.add(new Estudio(3, "Estudio C", "Endereco C", "CEP C", "Pais C", "Cidade C"));

		// Chamar o método de ordenação
		List<Estudio> estudiosOrdenados = estudioController.selectionSort(new ArrayList<>(estudioController.estudios));

		// Exibir os elementos ordenados
		for (Estudio estudio : estudiosOrdenados) {
			System.out.println("ID: " + estudio.getIdEstudio() + ", Nome: " + estudio.getNomeEstudio());
		}
	}
}
