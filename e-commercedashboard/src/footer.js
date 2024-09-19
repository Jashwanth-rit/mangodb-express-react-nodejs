import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Footer.css'; // Make sure to import the CSS file

function Footer() {
  return (
    <div className="footer">
      <Card className="text-center">
        <Card.Body>
          <Card.Title>About Sastha Mart</Card.Title>
          <Card.Text>
            Sastha Mart is your one-stop e-commerce solution for all your shopping needs. Offering a wide range of products from electronics to fashion, we aim to provide the best shopping experience with unbeatable prices and top-notch customer service.
          </Card.Text>
          <Card.Text>
            <strong>Contact Us:</strong><br />
            Email: support@sasthamart.com<br />
            Phone: +1 234 567 890<br />
            Address: 123 E-Commerce St, Online City, OC 12345
          </Card.Text>
          <Card.Text>
            &copy; {new Date().getFullYear()} Sastha Mart. All rights reserved.
          </Card.Text>
          <Button variant="dark" href="/contact">Contact Us</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Last updated 2 days ago</Card.Footer>
      </Card>
    </div>
  );
}

export default Footer;
