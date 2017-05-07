package eu.lestard.shopexample.backend.data;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityLinks;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.Resource;
import org.springframework.hateoas.ResourceProcessor;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ProductResourceProcessor implements ResourceProcessor<Resource<Product>> {

	@Autowired
	private EntityLinks entityLinks;

	@Override
	public Resource<Product> process(Resource<Product> resource) {

		final Product content = resource.getContent();

		final List<Link> links = content.getCategories().stream()
				.map(category -> entityLinks.linkForSingleResource(ProductCategory.class, category.getId()).withRel("productCategories"))
				.collect(Collectors.toList());

		resource.add(links);

		return resource;
	}
}
