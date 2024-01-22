export default function jobshandler(req, res) {
    if (req.method === 'POST') {
      const formData = req.body;
  
      // Handle the form data and perform necessary operations
      // Send a response back if needed
      res.status(200).json({ message: 'Form submitted successfully!' });
    } else {
      res.status(405).json({ error: 'Method not allowed' });
    }
  }