package fr.epsi.backencrypt.service.impl;

import fr.epsi.backencrypt.facade.dto.UserDto;
import fr.epsi.backencrypt.model.User;
import fr.epsi.backencrypt.repository.UserRepository;
import fr.epsi.backencrypt.service.UserService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

  @Autowired private UserRepository userRepository;

  private final ModelMapper modelMapper = new ModelMapper();

  @Override
  public void createUser(UserDto userDto) {
    User user = modelMapper.map(userDto, User.class);
    userRepository.save(user);
  }
}
