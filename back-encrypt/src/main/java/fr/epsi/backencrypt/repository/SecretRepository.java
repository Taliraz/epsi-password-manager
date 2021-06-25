package fr.epsi.backencrypt.repository;

import fr.epsi.backencrypt.model.Secret;
import fr.epsi.backencrypt.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SecretRepository extends JpaRepository<Secret, Long> {
    List<Secret> findAllByUser(User user);
}
