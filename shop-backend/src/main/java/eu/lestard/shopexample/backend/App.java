package eu.lestard.shopexample.backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.PostConstruct;

@SpringBootApplication
public class App {

	private final TestDataSetup testDataSetup;

	@Autowired
	public App(TestDataSetup testDataSetup) {
		this.testDataSetup = testDataSetup;
	}

	public static void main(String[] args) {
		SpringApplication.run(App.class, args);
	}

	@PostConstruct
	public void createTestData(){
		this.testDataSetup.run();
	}

}
