import Feather from "@expo/vector-icons/Feather";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function History() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.iconCircle}>
        <Feather name="clock" size={40} color="#1565C0" />
      </View>

      <Text style={styles.title}>Attendance History</Text>

      <Text style={styles.subtitle}>
        View your recent attendance records.
      </Text>

      {/* Sample Record */}
      <View style={styles.card}>
        <Text style={styles.event}>📚 School assembly</Text>
        <Text style={styles.info}>Date: Aug 31, 2026</Text>
        <Text style={styles.info}>Time: 1:00 PM</Text>

        <View style={styles.status}>
          <Text style={styles.statusText}>Present</Text>
        </View>
      </View>
      <View style={styles.card}>
        <Text style={styles.event}>📚 Intramurals</Text>
        <Text style={styles.info}>Date: Aug 8, 2026</Text>
        <Text style={styles.info}>Time: 5:00 PM</Text>
        <View style={styles.status}>
          <Text style={styles.statusText}>Present</Text>
        </View>
      </View>

      {/* Empty State */}
      <View style={styles.emptyCard}>
        <Feather name="file-text" size={40} color="#999" />
        <Text style={styles.emptyTitle}>No More Records</Text>
        <Text style={styles.emptyText}>
          Your attendance history will appear here after you scan a QR code.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#eef3fb",
    alignItems: "center",
    padding: 20,
  },

  iconCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#dcecff",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#1565C0",
    marginBottom: 30,
    textAlign: "center",
  },

  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
  },

  event: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  info: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },

  status: {
    alignSelf: "flex-start",
    marginTop: 15,
    backgroundColor: "#4CAF50",
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 20,
  },

  statusText: {
    color: "#fff",
    fontWeight: "bold",
  },

  emptyCard: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 30,
    alignItems: "center",
    elevation: 3,
  },

  emptyTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },

  emptyText: {
    color: "#666",
    textAlign: "center",
    marginTop: 10,
    lineHeight: 22,
  },
});