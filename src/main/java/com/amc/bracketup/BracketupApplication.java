package com.amc.bracketup;

import com.amc.bracketup.entity.GroupStage;
import com.amc.bracketup.entity.Team;
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


        try (CloseableHttpClient client = HttpClients.createDefault()) {
            HttpGet httpGet = new HttpGet("https://v3.football.api-sports.io/standings?league=1&season=2022");
            httpGet.setHeader("x-rapidapi-host", "v3.football.api-sports.io");
            httpGet.setHeader("x-rapidapi-key", apiKey);

            HttpResponse response = client.execute(httpGet);


            ObjectMapper objectMapper = new ObjectMapper();
            objectMapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
            ObjectWriter objectWriter = objectMapper.writerWithDefaultPrettyPrinter();

            String jsonResponse = EntityUtils.toString(response.getEntity());
            JsonNode jsonNode = objectMapper.readTree(jsonResponse);
            ArrayNode responseNode = (ArrayNode) jsonNode.get("response");

            String responseText;
            JsonNode node = responseNode.get(0);
            ArrayNode standingsNode = (ArrayNode) node.get("league").get("standings");

            List<Team> teams = new ArrayList<Team>();

            for (JsonNode groupNode : standingsNode) {
//                System.out.println(groupNode.get(0).get("team").get("name"));
                for (JsonNode teamNode : groupNode) {
                    String teamString = teamNode.toString();
                    Team team = objectMapper.readValue(teamString, Team.class);
                    team.setName(teamNode.get("team").get("name").asText());
                    team.setId(teamNode.get("team").get("id").asInt());
                    teams.add(team);
//                    System.out.println(objectMapper.writeValueAsString(team));
                }

            }

            GroupStage groupStage = new GroupStage(teams);
//            System.out.println(groupStage.getGroups());

            String responseB = objectWriter.writeValueAsString(groupStage.getGroups());
            System.out.println(responseB);


        } catch (Exception e) {
            e.printStackTrace();
        }

        String connectionString = "mongodb+srv://abrar:dhaka444@atlascluster.zsmesm4.mongodb.net/?retryWrites=true&w=majority";
        ServerApi serverApi = ServerApi.builder()
                .version(
                        ServerApiVersion.V1)
                .build();
        MongoClientSettings settings = MongoClientSettings.builder()
                .applyConnectionString(new ConnectionString(connectionString))
                .serverApi(serverApi)
                .build();
        // Create a new client and connect to the server
        try (MongoClient mongoClient = MongoClients.create(settings)) {
            try {
                // Send a ping to confirm a successful connection
                MongoDatabase database = mongoClient.getDatabase("admin");
                database.runCommand(new Document("ping", 1));
                System.out.println("Pinged your deployment. You successfully connected to MongoDB!");
            } catch (MongoException e) {
                e.printStackTrace();
            }
        }
    }


}
