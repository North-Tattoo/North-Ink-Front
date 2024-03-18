package saopaulo.tech.school.cruduser;

public interface CrudInterface {
    public default boolean emailValido(String email) {
        return false;
    }

    public default boolean emailCadastrado(String email){
        return false;
    }

    public default boolean telefoneValido(Long telefone){
        return false;
    }

    public default boolean telefoneCadastrado(Long telefone){
        return false;
    }

}
