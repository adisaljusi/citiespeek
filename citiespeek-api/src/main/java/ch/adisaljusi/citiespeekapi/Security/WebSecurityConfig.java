package ch.adisaljusi.citiespeekapi.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

@EnableWebSecurity
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

  @Override
  protected void configure(HttpSecurity http) throws Exception {
    http.cors().and().csrf().disable().authorizeRequests().anyRequest().permitAll();
  }

  @Bean
  CorsConfigurationSource corsConfigurationSource() {
    final UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();

    String[] headers = {"Access-Control-Allow-Headers",
                        "Access-Control-Allow-Origin",
                        "Access-Control-Expose-Headers",
                        "Authorization",
                        "Cache-Control",
                        "Content-Type",
                        "Origin"};

    CorsConfiguration corsConfiguration = new CorsConfiguration();
    corsConfiguration.applyPermitDefaultValues();

    for (String header : headers) {
      corsConfiguration.addExposedHeader(header);
    }

    corsConfiguration.addAllowedMethod("POST");
    corsConfiguration.addAllowedMethod("GET");

    source.registerCorsConfiguration("/**", corsConfiguration);

    return source;
  }
}
