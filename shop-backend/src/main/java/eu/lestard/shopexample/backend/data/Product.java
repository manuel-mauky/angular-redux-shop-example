package eu.lestard.shopexample.backend.data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@Entity
public class Product extends BaseEntity {

	private String name;

	@Lob
	private String description;

	private String imageUrl;

	private double price;

	@ManyToMany(fetch = FetchType.EAGER)
	private List<ProductCategory> categories = new ArrayList<>();

	Product(){}

	public Product(String name, String description, String imageUrl, double price) {
		this.name = name;
		this.description = description;
		this.imageUrl = imageUrl;
		this.price = price;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public double getPrice() {
		return price;
	}

	public void setPrice(double price) {
		this.price = price;
	}

	public List<ProductCategory> getCategories() {
		return Collections.unmodifiableList(categories);
	}

	public void addToCategory(ProductCategory category) {
		if(!this.categories.contains(category)) {
			this.categories.add(category);

			category.addProducts(this);
		}
	}
}
