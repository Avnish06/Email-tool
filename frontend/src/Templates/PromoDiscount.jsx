import {
  Html, Head, Body, Container, Text, Button, Section
} from "@react-email/components";

export default function PromoDiscount({ name = "Customer" }) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f4f4f4", padding: "20px" }}>
        <Container style={{ background: "#ffffff", padding: "30px", borderRadius: "8px" }}>
          <Text style={{ fontSize: "26px", fontWeight: "bold" }}>
            🎉 Exclusive 30% OFF Just for You!
          </Text>

          <Text>Hi {name}, grab your limited-time discount now.</Text>

          <Section style={{ textAlign: "center", marginTop: "20px" }}>
            <Button
              href="#"
              style={{ background: "#4f46e5", color: "#fff", padding: "12px 20px" }}
            >
              Shop Now
            </Button>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
