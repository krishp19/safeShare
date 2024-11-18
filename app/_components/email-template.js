import * as React from 'react';
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = ({ response }) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container>
        {/* Logo at the Heading */}
        <Section style={logo}>
          <Img src={`/logo.svg`} alt="Logo" width={150} height={50} />
        </Section>

        {/* Greeting and File Information */}
        <Section style={content}>
          <Heading style={greeting}>Hi {response?.emailToSend?.split("@")[0]}</Heading>
          <Text style={paragraph}>
            
            You have received a file. Below are the file details:
          </Text>

          {/* File Information */}
          <Text style={paragraph}><b>File Name: {response.fileName} </b></Text>
          <Text style={paragraph}><b>File Type: {response.fileType} </b></Text>
          <Text style={paragraph}><b>File Size: {response.fileSize} KB </b></Text>

          {/* Download Button */}
          <Text style={thin}>*Access the download file on your risk</Text>
          <Text style={thick}>Now you can also share your file securely with SafeShare</Text>
          <Text style={paragraph}>Click below to download the File</Text>
          <Section style={containerButton}>
            <Button
              pX={20}
              pY={12}
              style={button}
              href={response?.shortUrl}
                // Redirect to file download
            >
              Click Here to Download
            </Button>
          </Section>
        </Section>

        {/* Footer Text */}
        <Text style={footerText}>
          © 2024 | SafeShare Inc. | www.safeshare.com
        </Text>
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const greeting = {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 20,
};

const thin = {
  fontSize: 12,
  margin:'10px 0'
}

const thick = {
  fontSize: 20,
  margin:'10px 0'
}

const paragraph = {
  fontSize: 16,
  margin: '10px 0',
};

const logo = {
  textAlign: 'center',
  padding: "30px 0",
};

const content = {
  padding: '20px',
  border: "1px solid #eaeaea",
  borderRadius: "5px",
  backgroundColor: "#f9f9f9",
};

const containerButton = {
  display: "flex",
  justifyContent: "center",
  marginTop: 20,
};

const button = {
  backgroundColor: "#007bff",
  borderRadius: 5,
  color: "#ffffff",
  fontWeight: "bold",
  textDecoration: "none",
  padding: "12px 20px",
  cursor: "pointer",
};

const footerText = {
  textAlign: "center",
  fontSize: 12,
  color: "#888888",
  marginTop: 40,
};
