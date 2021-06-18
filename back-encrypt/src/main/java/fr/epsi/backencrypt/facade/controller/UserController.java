package fr.epsi.backencrypt.facade.controller;

import fr.epsi.backencrypt.facade.dto.UserDto;
import fr.epsi.backencrypt.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/user")
public class UserController {

  private static final Logger log = LoggerFactory.getLogger(UserController.class);

  @Autowired private UserService userService;

  @PostMapping
  public ResponseEntity<Void> createUser(@RequestBody UserDto userDto) {
    userService.createUser(userDto);
    log.info("User created");
    return ResponseEntity.ok().build();
  }
}
