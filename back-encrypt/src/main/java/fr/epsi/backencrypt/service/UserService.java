package fr.epsi.backencrypt.service;

import fr.epsi.backencrypt.facade.dto.UserDto;

public interface UserService {

  void createUser(UserDto userDto);
}
