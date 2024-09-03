import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import fs from 'fs/promises';

const app = express();

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Redirect root to /.well-known/nostr.json
app.get('/', (req: Request, res: Response) => {
  res.redirect('/.well-known/nostr.json');
});

// Route for /.well-known/nostr.json
app.get('/.well-known/nostr.json', async (_: Request, res: Response, next: NextFunction) => {
  const filePath = path.join(__dirname, '..', 'public', '.well-known', 'nostr.json');
  
  try {
    const data = await fs.readFile(filePath, 'utf8');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(data);
  } catch (err) {
    if (err instanceof Error && 'code' in err && err.code === 'ENOENT') {
      res.status(404).json({ error: 'Not Found', message: 'The nostr.json file does not exist. Check file name and path.' });
    } else {
      next(err);
    }
  }
});

// 404 handler for undefined routes
app.use((_: Request, res: Response) => {
  res.status(404).json({ error: 'Not Found', message: 'The requested resource does not exist.' });
});

// Error handler
app.use((err: Error, req: Request, res: Response, _: NextFunction) => {
  console.error(`Unhandled error: ${err.message}`);
  res.status(500).json({ 
    error: 'Internal Server Error', 
    message: 'An unexpected error occurred. Please try again later.'
  });
});

app.listen(3000, () => {
  console.log(`Running on http://localhost:3000`);
});