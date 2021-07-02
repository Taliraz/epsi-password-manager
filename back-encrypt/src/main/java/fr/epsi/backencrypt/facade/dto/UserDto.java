package fr.epsi.backencrypt.facade.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {

  private String username;

  private String publicKey;
}
