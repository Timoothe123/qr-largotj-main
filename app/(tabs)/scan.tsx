import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Scan() {
  const handleScan = () => {
    alert("QR Scanner will open here.");
  };

  return (
    <View style={styles.container}>
      {/* QR Icon */}
      <View style={styles.iconCircle}>
        <MaterialIcons
          name="qr-code-scanner"
          size={60}
          color="#1565C0"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Scan QR Code</Text>

      {/* Description */}
      <Text style={styles.subtitle}>
        Scan the QR code provided during the school event to record your attendance.
      </Text>

      {/* Scan Button */}
      <TouchableOpacity style={styles.scanButton} onPress={handleScan}>
        <MaterialIcons
          name="qr-code-scanner"
          size={24}
          color="#fff"
        />
        <Text style={styles.scanText}> Start Scanning</Text>
      </TouchableOpacity>

      {/* Instructions */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Instructions</Text>

        <Text style={styles.cardText}>
          • Tap the <Text style={{ fontWeight: "bold" }}>Start Scanning</Text> button.
        </Text>

        <Text style={styles.cardText}>
          • Point your camera at the event QR code.
        </Text>

        <Text style={styles.cardText}>
          • Wait for the QR code to be detected.
        </Text>

        <Text style={styles.cardText}>
          • Your attendance will be recorded automatically.
        </Text>
      </View>
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

  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#dcecff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    textAlign: "center",
    color: "#1565C0",
    fontSize: 16,
    marginBottom: 30,
  },

  scanButton: {
    width: "100%",
    height: 60,
    backgroundColor: "#1565C0",
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 30,
  },

  scanText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },

  cardText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 12,
  },
});