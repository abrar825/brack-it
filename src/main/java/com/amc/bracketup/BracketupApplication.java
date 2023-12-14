package com.amc.bracketup;

import com.amc.bracketup.entity.GroupStage;
import com.amc.bracketup.entity.Team;
import com.amc.bracketup.entity.Tournament;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.node.ArrayNode;
import com.mongodb.*;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoDatabase;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.bson.Document;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

import java.io.Closeable;
import java.util.ArrayList;
import java.util.List;

@SpringBootApplication
@JsonIgnoreProperties(ignoreUnknown = true)
public class BracketupApplication {

    public static void main(String[] args) {
        SpringApplication.run(BracketupApplication.class, args);

        Dotenv dotenv = Dotenv.load();
        String apiKey = dotenv.get("API_KEY");


        String connectionString = dotenv.get("CONN_STRING");

        Tournament UEFAEuro2024 = new Tournament("UEFA Euro 2024");


    }


}
