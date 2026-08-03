import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons, Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/* School Icon */}
        <View style={styles.iconCircle}>
          <Ionicons name="school" size={45} color="#1565C0" />
        </View>

        {/* Title */}
        <Text style={styles.title}>QR Attendance</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>School Event Attendance</Text>

        {/* Description */}
        <Text style={styles.description}>
          Scan QR Codes to record attendance during school activities.
        </Text>

        {/* Scan Button */}
        <TouchableOpacity
          style={styles.scanButton}
          onPress={() => router.push("/scan")}
        >
          <MaterialIcons name="qr-code-scanner" size={24} color="#fff" />
          <Text style={styles.scanText}> Scan QR Code</Text>
        </TouchableOpacity>

        {/* History Button */}
        <TouchableOpacity
          style={styles.historyButton}
          onPress={() => router.push("/history")}
        >
          <Feather name="clock" size={22} color="#333" />
          <Text style={styles.historyText}> Attendance History</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef3fb",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  iconCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#dcecff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },

  subtitle: {
    fontSize: 22,
    color: "#1565C0",
    fontWeight: "600",
    marginBottom: 10,
  },

  description: {
    textAlign: "center",
    color: "#555",
    marginBottom: 40,
    fontSize: 16,
  },

  scanButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#1565C0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20,
  },

  scanText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  historyButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
  },

  historyText: {
    color: "#333",
    fontSize: 18,
    fontWeight: "600",
  },
});