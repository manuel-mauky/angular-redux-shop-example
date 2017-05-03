package eu.lestard.shopexample.backend.data;

import org.springframework.data.repository.CrudRepository;

public interface ProductCategoryRepository extends CrudRepository<ProductCategory, String> {
}
