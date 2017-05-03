package eu.lestard.shopexample.backend.data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
public class ProductCategory extends BaseEntity {

	private String name;

	@ManyToMany(mappedBy = "categories")
	private final List<Product> products = new ArrayList<>();

	ProductCategory(){}

	public ProductCategory(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public List<Product> getProducts() {
		return Collections.unmodifiableList(products);
	}

	public void addProducts(Product...products) {
		Collections.addAll(this.products, products);
	}

	public void addProducts(Collection<Product> products) {
		this.products.addAll(products);
	}

}
