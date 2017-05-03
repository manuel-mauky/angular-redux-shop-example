package eu.lestard.shopexample.backend;

import com.github.javafaker.Faker;
import eu.lestard.shopexample.backend.data.Product;
import eu.lestard.shopexample.backend.data.ProductCategory;
import eu.lestard.shopexample.backend.data.ProductCategoryRepository;
import eu.lestard.shopexample.backend.data.ProductRepository;
import eu.lestard.shopexample.backend.data.User;
import eu.lestard.shopexample.backend.data.UserRepository;
import org.hibernate.annotations.SourceType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.crypto.password.Pbkdf2PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
public class TestDataSetup {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private ProductRepository productRepository;

	@Autowired
	private ProductCategoryRepository productCategoryRepository;


	@Transactional
	public void run() {
		createTestData();

		printTestData();
	}

	private void printTestData() {
		System.out.println("Users:");

		userRepository.findAll().forEach(user -> System.out.println("\t" + user.getUsername() + "," + user.getPasswordHash()));

		System.out.println("\nProductCategories:");
		productCategoryRepository.findAll().forEach(category -> {
			System.out.println("\t" + category.getName());
			System.out.println("\tProducts in this Category:");

			category.getProducts().forEach(product -> {
				System.out.println("\t\t" + product.getName());
			});
		});

		System.out.println("\nProducts:");
		productRepository.findAll().forEach(product -> {
			System.out.println("\t" + product.getName());
		});
	}

	private void createTestData() {
		Faker faker = new Faker();
		PasswordEncoder passwordEncoder = new Pbkdf2PasswordEncoder();

		final User hugo = userRepository.save(new User("hugo", passwordEncoder.encode("top-secret")));
		final User luise = userRepository.save(new User("luise", passwordEncoder.encode("geheim")));

		final ProductCategory booksCategory = productCategoryRepository.save(new ProductCategory("Books"));
		final ProductCategory moviesCategory = productCategoryRepository.save(new ProductCategory("Movies"));
		final ProductCategory germanCategory = productCategoryRepository.save(new ProductCategory("Deutsch"));
		final ProductCategory englishCategory = productCategoryRepository.save(new ProductCategory("English"));


		Product kongMovie = productRepository.save(new Product("Kong: Skull Island",
				faker.lorem().paragraph(3),
				"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwMzI5ODEwNF5BMl5BanBnXkFtZTgwNjAzNjI2MDI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
				15.99));
		kongMovie.addToCategory(moviesCategory);
		kongMovie.addToCategory(englishCategory);
		kongMovie = productRepository.save(kongMovie);


		Product ghostInTheShellMovie = productRepository.save(new Product("Ghost in the Shell",
				faker.lorem().paragraph(3),
				"https://images-na.ssl-images-amazon.com/images/M/MV5BMzJiNTI3MjItMGJiMy00YzA1LTg2MTItZmE1ZmRhOWQ0NGY1XkEyXkFqcGdeQXVyOTk4MTM0NQ@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
				16.99));
		ghostInTheShellMovie.addToCategory(moviesCategory);
		ghostInTheShellMovie.addToCategory(englishCategory);
		ghostInTheShellMovie = productRepository.save(ghostInTheShellMovie);


		Product fastFuriousMovie = productRepository.save(new Product("The fast of the Furious",
				faker.lorem().paragraph(3),
				"https://images-na.ssl-images-amazon.com/images/M/MV5BMjMxODI2NDM5Nl5BMl5BanBnXkFtZTgwNjgzOTk1MTI@._V1_SY1000_CR0,0,631,1000_AL_.jpg",
				9.99));
		fastFuriousMovie.addToCategory(moviesCategory);
		fastFuriousMovie.addToCategory(englishCategory);
		fastFuriousMovie = productRepository.save(fastFuriousMovie);



		Product guardiens2 = productRepository.save(new Product("Guardians of the Galaxy - Vol.2",
				faker.lorem().paragraph(3),
				"https://images-na.ssl-images-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
				10.99));
		guardiens2.addToCategory(moviesCategory);
		guardiens2.addToCategory(englishCategory);
		guardiens2 = productRepository.save(guardiens2);


		Product beautyAndTheBeastMovieEnglish = productRepository.save(new Product("Beauty and the Beast",
				faker.lorem().paragraph(3),
				"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
				10.99));
		beautyAndTheBeastMovieEnglish.addToCategory(moviesCategory);
		beautyAndTheBeastMovieEnglish.addToCategory(englishCategory);
		beautyAndTheBeastMovieEnglish = productRepository.save(beautyAndTheBeastMovieEnglish);

		Product beautyAndTheBeastMovieGerman = productRepository.save(new Product("Die Schöne und das Biest",
				faker.lorem().paragraph(3),
				"https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwNjUxMTM4NV5BMl5BanBnXkFtZTgwODExMDQzMTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
				10.99));
		beautyAndTheBeastMovieGerman.addToCategory(moviesCategory);
		beautyAndTheBeastMovieGerman.addToCategory(germanCategory);
		beautyAndTheBeastMovieGerman = productRepository.save(beautyAndTheBeastMovieGerman);



		Product einfuehrungKategorientheoryBook = productRepository.save(new Product("Einführung in die Kategorientheorie",
				faker.lorem().paragraph(3),
				"https://t2.gstatic.com/images?q=tbn:ANd9GcQ-qquvmksSDfGwa7k0JxsRUcEVz1K8M7HqlMl1Q-yYwn5dfIh_",
				24.99));
		einfuehrungKategorientheoryBook.addToCategory(booksCategory);
		einfuehrungKategorientheoryBook.addToCategory(germanCategory);
		einfuehrungKategorientheoryBook = productRepository.save(einfuehrungKategorientheoryBook);



		Product haskellBook = productRepository.save(new Product("Learn You a Haskell for Great Good",
				faker.lorem().paragraph(3),
				"https://t3.gstatic.com/images?q=tbn:ANd9GcSD7zicmCSIbcw5D6RoY141ON6-53K88kRzhRlAkWgk_1Xop8Nb",
				25.99));
		haskellBook.addToCategory(booksCategory);
		haskellBook.addToCategory(englishCategory);
		haskellBook = productRepository.save(haskellBook);


		Product sicpBookEnglish = productRepository.save(new Product("Structure and Interpretation of Computer Programs",
				faker.lorem().paragraph(3),
				"https://t0.gstatic.com/images?q=tbn:ANd9GcT0z8-4ILBWnN2YLD005iI_79uKigOtECuGtxtKXveQqY7efaEn",
				51.99));
		sicpBookEnglish.addToCategory(booksCategory);
		sicpBookEnglish.addToCategory(englishCategory);
		sicpBookEnglish = productRepository.save(sicpBookEnglish);



		Product sicpBookGerman = productRepository.save(new Product("Struktur und Interpretation von Computerprogrammen",
				faker.lorem().paragraph(3),
				"https://t3.gstatic.com/images?q=tbn:ANd9GcTOgpJ3PEGUpGvKHh6qVvQbbi9cuHmo6HtlKEfVbWGyBy3569wq",
				32.99));
		sicpBookEnglish.addToCategory(booksCategory);
		sicpBookEnglish.addToCategory(germanCategory);
		sicpBookEnglish = productRepository.save(sicpBookEnglish);




	}
}
