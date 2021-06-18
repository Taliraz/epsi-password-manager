package fr.epsi.backencrypt.facade.controller;

import fr.epsi.backencrypt.facade.dto.SecretDto;
import fr.epsi.backencrypt.service.SecretService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/secret")
public class SecretController {

  private static final Logger log = LoggerFactory.getLogger(SecretController.class);

  @Autowired private SecretService secretService;

  @PostMapping
  public ResponseEntity<Void> createSecret(@RequestBody SecretDto secretDto) {
    secretService.createSecret(secretDto);
    log.info("Secret created");
    return ResponseEntity.ok().build();
  }

  @GetMapping("/{id}")
  public ResponseEntity<SecretDto> getSecret(@PathVariable Long id) {
    SecretDto secretDto = secretService.getSecret(id);
    return ResponseEntity.ok().body(secretDto);
  }

  @GetMapping("/user/{username}")
  public ResponseEntity<List<SecretDto>> getAllSecretByUser(@PathVariable String username) {
    List<SecretDto> secretDtos = secretService.getAllSecretsByUsername(username);
    return ResponseEntity.ok().body(secretDtos);
  }
}
