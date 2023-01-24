package ma.emsi.factureservice.repos;

import ma.emsi.factureservice.entities.Facture;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
public interface FactureRepo extends JpaRepository<Facture,Long> {

    List<Facture> findFacturesByIdClient(Long id);
}

