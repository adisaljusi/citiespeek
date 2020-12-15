package ch.adisaljusi.citiespeekapi.Controllers;

import ch.adisaljusi.citiespeekapi.Domain.Location;
import ch.adisaljusi.citiespeekapi.Services.LocationService;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class LocationController {
  private final LocationService locationService;

  public LocationController(LocationService locationService) {
    this.locationService = locationService;
  }

  @GetMapping("/location")
  public List<Location> getLocations() {
    return locationService.getLocations();
  }

  @GetMapping("/location/{id}")
  public Optional<Location> getLocation(@PathVariable String id) {
    return locationService.getLocation(UUID.fromString(id));
  }

  @PostMapping("/location")
  public void insertLocation(@RequestBody Location location) {
    locationService.insertLocation(location);
  }

  @PutMapping("/location/{id}")
  public void updateLocation(@PathVariable String id, @RequestBody Location location) {
    locationService.updateLocation(location, id);
  }
}
