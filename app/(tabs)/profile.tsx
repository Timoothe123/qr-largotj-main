import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Profile() {
  return (
    <View style={styles.container}>

      {/* Profile Picture */}
      <View style={styles.avatar}>
        <Ionicons name="person" size={70} color="#1565C0" />
      </View>

      {/* User Information */}
      <Text style={styles.name}>Jacob Isaac Largo</Text>
      <Text style={styles.role}>Student</Text>

      <View style={styles.card}>
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={22} color="#1565C0" />
          <Text style={styles.infoText}>jacobisaac2003@gmail.com</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="school-outline" size={22} color="#1565C0" />
          <Text style={styles.infoText}>BS Information Technology</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="id-card-outline" size={22} color="#1565C0" />
          <Text style={styles.infoText}>20242264</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Ionicons name="log-out-outline" size={22} color="#fff" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef3fb",
    alignItems: "center",
    padding: 20,
  },

  avatar: {
    width: 130,
    height: 130,
    borderRadius: 65,
    backgroundColor: "#e9920f",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
  },

  role: {
    fontSize: 18,
    color: "#261a44",
    marginBottom: 30,
  },

  card: {
    width: "100%",
    backgroundColor: "#e7bf3d",
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },

  infoRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  infoText: {
    marginLeft: 15,
    fontSize: 17,
    color: "#333",
  },

  logoutButton: {
    width: "100%",
    height: 55,
    backgroundColor: "#15c048",
    borderRadius: 15,
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  logoutText: {
    color: "#d6e3e4",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
});