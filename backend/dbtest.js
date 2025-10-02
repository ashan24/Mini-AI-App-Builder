import { MongoClient } from "mongodb";
import dns from "dns";

// Tell the dns module to use Google's DNS servers
dns.setServers(['8.8.8.8', '8.8.4.4']);

// Your regular connection code
const uri =  "mongodb+srv://ashanthapa60_db_user:Auckland%4087@cluster0.3paxox9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

async function testConnection() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Successfully connected to MongoDB!");
  } catch (error) {
    console.error("❌ Connection failed!", error);
  } finally {
    await client.close();
  }
}

testConnection();
