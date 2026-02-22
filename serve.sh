#!/bin/bash
cd "$(dirname "$0")"
npm run build && npx vite preview --host --port 4173
