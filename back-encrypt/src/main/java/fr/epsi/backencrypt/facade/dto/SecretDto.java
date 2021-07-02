package fr.epsi.backencrypt.facade.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SecretDto {

  private Long id;

  private String domain;

  private String password;

  private String login;

  private String description;

  private UserDto userDto;
}
