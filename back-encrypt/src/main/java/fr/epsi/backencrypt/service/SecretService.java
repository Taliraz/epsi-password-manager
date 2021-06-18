package fr.epsi.backencrypt.service;

import fr.epsi.backencrypt.facade.dto.SecretDto;

import java.util.List;

public interface SecretService {

  void createSecret(SecretDto secretDto);

  SecretDto getSecret(Long secretId);

  List<SecretDto> getAllSecretsByUsername(String username);
}
