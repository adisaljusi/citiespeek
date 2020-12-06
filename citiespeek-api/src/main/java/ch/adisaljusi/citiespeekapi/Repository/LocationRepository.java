package ch.adisaljusi.citiespeekapi.Repository;

import ch.adisaljusi.citiespeekapi.Domain.Location;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface LocationRepository extends JpaRepository<Location, UUID> { }
