package fr.epsi.backencrypt.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;
import java.util.Set;

@Getter
@Setter
@Entity
@Table(
    name = "user",
    uniqueConstraints = {@UniqueConstraint(columnNames = {"username"})})
public class User {

  @Id private String username;

  private String publicKey;

  @OneToMany(mappedBy = "user")
  private Set<Secret> secrets;
}
