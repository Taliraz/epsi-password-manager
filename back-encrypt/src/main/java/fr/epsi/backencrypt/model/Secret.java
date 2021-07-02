package fr.epsi.backencrypt.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Getter
@Setter
@Entity
@Table(name = "secret")
public class Secret {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String password;

  private String domain;

  private String login;

  private String description;

  @ManyToOne
  @JoinColumn(name = "username", nullable = false)
  private User user;
}
