package ch.adisaljusi.citiespeekapi.Controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(produces = MediaType.APPLICATION_JSON_VALUE)
public class LocationController {

  @GetMapping("/location")
  public void getLocations() {
  }

  @PostMapping("/location")
  public void insertLocation() {

  }
}
