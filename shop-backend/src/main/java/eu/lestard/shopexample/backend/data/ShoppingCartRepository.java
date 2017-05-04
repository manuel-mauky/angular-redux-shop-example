package eu.lestard.shopexample.backend.data;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(exported = false)
public interface ShoppingCartRepository extends CrudRepository<ShoppingCart, String> {
}
