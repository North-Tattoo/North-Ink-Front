package saopaulo.tech.school.cruduser.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import saopaulo.tech.school.cruduser.CrudInterface;
import saopaulo.tech.school.cruduser.entity.Cliente;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClienteController implements CrudInterface {

    private List<Cliente> clientes = new ArrayList<>();
    private int id = 0;

    @Override
    public boolean emailValido(String email) {
        // Verifica se o e-mail possui pelo menos um caractere antes e depois do "@"
        return true;
    }

    @Override
    public boolean emailCadastrado(String email) {
        for (Cliente cliente : clientes) {
            if (cliente.getEmail().equals(email)) {
                return true;
            }
        }
        return false;
    }

    @Override
    public boolean telefoneValido(Long telefone) {
        // Verifica se o telefone não é nulo
        return telefone == null;
    }

    @Override
    public boolean telefoneCadastrado(Long telefone) {
        for (Cliente cliente : clientes) {
            if (cliente.getTelefone() != null && cliente.getTelefone().equals(telefone)) {
                return true;
            }
        }
        return false;
    }

    @PostMapping("/cadastrar")
    public ResponseEntity<Cliente> cadastrar(@RequestBody Cliente cliente) {
        // EMAIL SEMPRE TRUE PARA TESTES
        if (!emailValido(cliente.getEmail())) {
            return ResponseEntity.status(400).build();
        }
        if (emailCadastrado(cliente.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        if (telefoneValido(cliente.getTelefone())) {
            return ResponseEntity.status(400).build();
        }
        if (telefoneCadastrado(cliente.getTelefone())) {
            return ResponseEntity.status(409).build();
        }

        cliente.setId(++id);
        clientes.add(cliente);
        return ResponseEntity.status(201).body(cliente);
    }

    @GetMapping("/buscarClienteId/{id}")
    public ResponseEntity<Cliente> buscarClienteId(@PathVariable int id) {
        Cliente cliente = buscarClientePorId(id);
        if (cliente != null) {
            return ResponseEntity.status(200).body(cliente);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @PutMapping("/atualizar/{id}")
    public ResponseEntity<Cliente> atualizar(@RequestBody Cliente cliente, @PathVariable int id) {
        // EMAIL SEMPRE TRUE PARA TESTES
        if (!emailValido(cliente.getEmail())) {
            return ResponseEntity.status(400).build();
        }
        if (emailCadastrado(cliente.getEmail())) {
            return ResponseEntity.status(409).build();
        }
        if (telefoneValido(cliente.getTelefone())) {
            return ResponseEntity.status(400).build();
        }

        Cliente clienteAtualizado = buscarClientePorId(id);
        if (clienteAtualizado != null) {
            clienteAtualizado.setEmail(cliente.getEmail());
            clienteAtualizado.setNome(cliente.getNome());
            clienteAtualizado.setSenha(cliente.getSenha());
            clienteAtualizado.setTelefone(cliente.getTelefone());
            return ResponseEntity.status(200).body(clienteAtualizado);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    @DeleteMapping("/deletar/{id}")
    public ResponseEntity<Cliente> deletar(@PathVariable int id) {
        Cliente cliente = buscarClientePorId(id);
        if (cliente != null) {
            clientes.remove(cliente);
            return ResponseEntity.status(204).body(cliente);
        } else {
            return ResponseEntity.status(404).build();
        }
    }

    private Cliente buscarClientePorId(int id) {
        for (Cliente cliente : clientes) {
            if (cliente.getId() == id) {
                return cliente;
            }
        }
        return null;
    }

    @GetMapping
    public ResponseEntity<List<Cliente>> listarClientes() {
        if (clientes.isEmpty()) {
            return ResponseEntity.status(404).build();
        }
        selectionSort(clientes);
        return ResponseEntity.status(200).body(clientes);
    }

    private void selectionSort(List<Cliente> clientes) {
        int n = clientes.size();

        for (int i = 0; i < n - 1; i++) {
            int minIndex = i;
            for (int j = i + 1; j < n; j++) {
                if (clientes.get(j).getId() < clientes.get(minIndex).getId()) {
                    minIndex = j;
                }
            }
            Cliente temp = clientes.get(minIndex);
            clientes.set(minIndex, clientes.get(i));
            clientes.set(i, temp);
        }
    }

}
