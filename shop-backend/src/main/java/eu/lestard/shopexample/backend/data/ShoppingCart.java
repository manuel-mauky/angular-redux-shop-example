package eu.lestard.shopexample.backend.data;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Entity
public class ShoppingCart extends BaseEntity {

	@ManyToOne
	private User user;

	@ManyToMany(fetch = FetchType.EAGER)
	private List<Product> products = new ArrayList<>();

	private LocalDateTime closedDate;

	ShoppingCart() {}

	public ShoppingCart(User user) {
		this.user = user;
	}

	public boolean isClosed() {
		return closedDate != null;
	}

	public User getUser() {
		return user;
	}

	public List<Product> getProducts() {
		return Collections.unmodifiableList(products);
	}

	public void addProducts(Product ... products) {
		Collections.addAll(this.products, products);
	}

	public void addProducts(Collection<Product> products) {
		this.products.addAll(products);
	}

	public LocalDateTime getClosedDate() {
		return closedDate;
	}
}
