package ch.adisaljusi.citiespeekapi.Services;

import ch.adisaljusi.citiespeekapi.Domain.Location;
import ch.adisaljusi.citiespeekapi.Repository.LocationRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@Slf4j
@Transactional
public class LocationService {
  private final LocationRepository locationRepository;

  public LocationService(LocationRepository locationRepository) {
    this.locationRepository = locationRepository;
  }

  public void insertLocation(Location location) {
    log.info("Insert location for lat: {}, lng: {}", location.getLatitude(), location.getLongitude());
    locationRepository.save(location);
  }

  public List<Location> getLocations() {
    return locationRepository.findAll();
  }

  public Optional<Location> getLocation(UUID id) {
    log.info("Search for location");
    return locationRepository.findById(id);
  }

  public void updateLocation(Location location, String id) {
    locationRepository.save(location);
    log.info("Updated location {} with lat: {}, lng: {}", id, location.getLatitude(), location.getLongitude());
  }
}
