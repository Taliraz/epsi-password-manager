package fr.epsi.backencrypt.repository;

import fr.epsi.backencrypt.model.Secret;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecretRepository extends JpaRepository<Secret, Long> {

  @Query("Select s From Secret s join s.user u where u.username = ?1")
  List<Secret> findAllByUsername(String username);
}
