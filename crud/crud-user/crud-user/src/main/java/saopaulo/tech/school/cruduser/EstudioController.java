package saopaulo.tech.school.cruduser;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import saopaulo.tech.school.cruduser.Estudio;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/estudios")
public class EstudioController {

    private List<Estudio> estudios = new ArrayList<>();
    private int id = 0;

    @PostMapping
    public ResponseEntity<Estudio> cadastrar(@RequestBody Estudio estudio) {
        estudio.setCep(validarCep(estudio.getCep()));
        estudio.setIdEstudio(++id);
        estudios.add(estudio);
        return ResponseEntity.status(201).body(estudio);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Estudio> buscarEstudioPorId(@PathVariable int id) {
        Estudio estudio = buscarEstudioPorIdNaLista(id);
        if (estudio != null) {
            return ResponseEntity.status(200).body(estudio);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Estudio> atualizar(@RequestBody Estudio estudio, @PathVariable int id) {
        Estudio estudioAtualizado = buscarEstudioPorIdNaLista(id);
        if (estudioAtualizado != null) {
            estudioAtualizado.setNomeEstudio(estudio.getNomeEstudio());
            estudioAtualizado.setEndereco(estudio.getEndereco());
            estudioAtualizado.setCep(validarCep(estudio.getCep()));
            estudioAtualizado.setPais(estudio.getPais());
            estudioAtualizado.setCidade(estudio.getCidade());
            return ResponseEntity.status(200).body(estudioAtualizado);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Estudio> deletar(@PathVariable int id) {
        Estudio estudio = buscarEstudioPorIdNaLista(id);
        if (estudio != null) {
            estudios.remove(estudio);
            return ResponseEntity.status(204).body(estudio);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    private String validarCep(String cep) {
        // Implemente a lógica de validação do CEP conforme necessário
        return cep;
    }

    private Estudio buscarEstudioPorIdNaLista(int id) {
        for (Estudio estudio : estudios) {
            if (estudio.getIdEstudio() == id) {
                return estudio;
            }
        }
        return null;
    }

    // algoritmo de ordenação consumindo api:

    private List<Estudio> selectionSort(List<Estudio> estudios) {
        int n = estudios.size();
        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (estudios.get(j).getNomeEstudio().compareTo(estudios.get(minIndex).getNomeEstudio()) < 0) {
                    minIndex = j;
                }
            }
            if (minIndex != i) {
                Estudio temp = estudios.get(i);
                estudios.set(i, estudios.get(minIndex));
                estudios.set(minIndex, temp);
            }
        }
        return estudios;
    }

}
