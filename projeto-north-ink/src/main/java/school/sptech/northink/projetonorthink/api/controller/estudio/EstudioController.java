package school.sptech.northink.projetonorthink.api.controller.estudio;

import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import school.sptech.northink.projetonorthink.domain.entity.Estudio;
import school.sptech.northink.projetonorthink.domain.repository.EstudioRepository;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.estudio.EstudioAtualizacaoDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.estudio.EstudioCriacaoDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.estudio.EstudioListagemDto;
import school.sptech.northink.projetonorthink.domain.service.usuario.dto.estudio.EstudioMapper;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/estudios")
public class EstudioController {

    @Autowired
    private EstudioRepository estudioRepository;

    @PostMapping
    public ResponseEntity<EstudioListagemDto> criar(@RequestBody @Valid EstudioCriacaoDto novoEstudio) {

        Estudio estudio = EstudioMapper.toEntity(novoEstudio);

        Estudio estudioSalvo = estudioRepository.save(estudio);

        EstudioListagemDto listagemDto = EstudioMapper.toDto(estudioSalvo);
        return ResponseEntity.status(201).body(listagemDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<EstudioListagemDto> buscarPorId(@PathVariable Long id) {
        Optional<Estudio> estudioOpt = estudioRepository.findById(id);

        if (estudioOpt.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        EstudioListagemDto dto = EstudioMapper.toDto(estudioOpt.get());
        return ResponseEntity.status(200).body(dto);

    }

    @GetMapping
    public ResponseEntity<List<EstudioListagemDto>> listarEstudios() {
        List<Estudio> estudios = estudioRepository.findAll();

        if (estudios.isEmpty()) {
            return ResponseEntity.status(204).build();
        }
        List<EstudioListagemDto> listaAuxiliar = EstudioMapper.toDto(estudios);
        return ResponseEntity.status(200).body(listaAuxiliar);
    }

    @PutMapping("/{id}")
    public ResponseEntity<EstudioListagemDto> atualizarDadosEstudio(@PathVariable Long id, @RequestBody @Valid EstudioAtualizacaoDto estudioAtualizacaoDto) {

        Optional<Estudio> estudioOptional = estudioRepository.findById(id);

        if (estudioOptional.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        Estudio estudio = estudioOptional.get();

        Estudio estudioSalvo = estudioRepository.save(estudio);

        EstudioListagemDto estudioListagemDto = EstudioMapper.toDto(estudioSalvo);
        return ResponseEntity.status(200).body(estudioListagemDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Estudio> deletarEstudio(@PathVariable Long id) {
        Optional<Estudio> optionalEstudio = estudioRepository.findById(id);

        if (optionalEstudio.isEmpty()) {
            return ResponseEntity.status(404).build();
        }

        Estudio estudio = optionalEstudio.get();
        estudioRepository.delete(estudio);

        return ResponseEntity.noContent().build();
    }
}
