#!/usr/bin/env python3
"""Static dev server for local preview.

Identical to `python3 -m http.server` except that it tells the browser never to
cache anything. Without this, edited CSS keeps rendering from the heuristic HTTP
cache and the preview lies about what you just changed.
"""

import sys
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class NoCacheHandler(SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store, must-revalidate")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, fmt, *args):
        sys.stderr.write("%s %s\n" % (self.address_string(), fmt % args))


if __name__ == "__main__":
    port = int(sys.argv[1]) if len(sys.argv) > 1 else 4173
    handler = partial(NoCacheHandler, directory=".")
    with ThreadingHTTPServer(("127.0.0.1", port), handler) as httpd:
        sys.stderr.write("serving . on http://127.0.0.1:%d/ (no-store)\n" % port)
        httpd.serve_forever()
