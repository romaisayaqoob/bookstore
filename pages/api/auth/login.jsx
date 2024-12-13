export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        if (email === 'test@example.com' && password === 'password') {
            res.status(200).json({ token: 'dummy-token', userId: '123', email });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
