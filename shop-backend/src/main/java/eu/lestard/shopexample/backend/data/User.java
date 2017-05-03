package eu.lestard.shopexample.backend.data;

import javax.persistence.Entity;

@Entity
public class User extends BaseEntity {

	private String username;
	private String passwordHash;


	protected User(){}

	public User(String username, String passwordHash) {
		this.username = username;
		this.passwordHash = passwordHash;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPasswordHash() {
		return passwordHash;
	}

	public void setPasswordHash(String passwordHash) {
		this.passwordHash = passwordHash;
	}
}
