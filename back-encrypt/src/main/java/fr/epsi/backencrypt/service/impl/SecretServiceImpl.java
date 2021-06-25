package fr.epsi.backencrypt.service.impl;

import fr.epsi.backencrypt.facade.dto.SecretDto;
import fr.epsi.backencrypt.model.Secret;
import fr.epsi.backencrypt.model.User;
import fr.epsi.backencrypt.repository.SecretRepository;
import fr.epsi.backencrypt.repository.UserRepository;
import fr.epsi.backencrypt.service.SecretService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SecretServiceImpl implements SecretService {

  @Autowired private SecretRepository secretRepository;
  @Autowired private UserRepository userRepository;

  private final ModelMapper modelMapper = new ModelMapper();

  @Override
  public void createSecret(SecretDto secretDto) {
    Secret secret = modelMapper.map(secretDto, Secret.class);
    secretRepository.save(secret);
  }

  @Override
  public SecretDto getSecret(Long secretId) {
    Secret secret = secretRepository.getOne(secretId);
    return modelMapper.map(secret, SecretDto.class);
  }

  @Override
  public List<SecretDto> getAllSecretsByUsername(String username) {
    User user = userRepository.findByUsername(username);
    List<Secret> secrets = secretRepository.findAllByUser(user);
    List<SecretDto> secretDtos = new ArrayList<>();
    for (Secret secret : secrets) {
      secretDtos.add(modelMapper.map(secret, SecretDto.class));
    }
    return secretDtos;
  }

  @Override
  public void deleteSecret(Long secretId) {
    secretRepository.deleteById(secretId);
  }
}
