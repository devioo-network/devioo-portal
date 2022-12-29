import { NodeIncomingMessage } from "h3";

export default [
  { UserAgent: '*' },
  { Disallow: '/api' },
  { BlankLine: true },
  { Sitemap: (req: NodeIncomingMessage) => `https://${req.headers.host}/sitemap.xml` }
]