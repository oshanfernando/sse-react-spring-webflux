package com.oshan.webfluxdemo.controller;

import com.oshan.webfluxdemo.model.Usage;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Flux;

import java.time.Duration;
import java.util.Date;
import java.util.Random;

@RestController
public class ResourceController {

    @CrossOrigin(allowedHeaders = "*")
    @GetMapping(value = "/event/resources/usage", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<Usage> getResourceUsage() {

        Random random = new Random();

        return Flux.interval(Duration.ofSeconds(1))
                .map(it -> new Usage(
                        random.nextInt(101),
                        random.nextInt(101),
                        new Date()));

    }
}
