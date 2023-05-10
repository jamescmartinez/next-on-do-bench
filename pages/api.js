// Wait 50ms, then generate and return a random number between 0 and 100.
export default function handler(req, res) {
  setTimeout(() => {
    const number = Math.floor(Math.random() * 100);
    res.status(200).json({ number });
  }, 50);
}
