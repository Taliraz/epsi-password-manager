package fr.epsi.backencrypt.facade.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import fr.epsi.backencrypt.facade.dto.UserDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@SpringBootTest
@AutoConfigureMockMvc
class UserControllerIT {

  @Autowired private MockMvc mockMvc;

  @Autowired private ObjectMapper objectMapper;

  @Test
  void createOpenData_statusIsOk() throws Exception {
    UserDto userDto = new UserDto();
    userDto.setUsername("username");
    userDto.setPublicKey("public key");
    String content = objectMapper.writeValueAsString(userDto);

    mockMvc
        .perform(post("/user").contentType(MediaType.APPLICATION_JSON).content(content))
        .andExpect(status().isOk());
  }
}
