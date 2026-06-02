#!/usr/bin/env python3
"""Optimize PNG images to WebP format for web."""

import os
import sys
from PIL import Image

SRC = '/home/julio/subadatos-landing/public/lovable-uploads'

for fname in sorted(os.listdir(SRC)):
    if not fname.lower().endswith('.png'):
        continue
    
    src_path = os.path.join(SRC, fname)
    webp_name = fname.rsplit('.', 1)[0] + '.webp'
    webp_path = os.path.join(SRC, webp_name)
    
    old_size = os.path.getsize(src_path)
    
    img = Image.open(src_path)
    
    # Convert RGBA to RGB for WebP if needed
    if img.mode == 'RGBA':
        img = img.convert('RGBA')
    
    # Save as WebP with quality 80
    img.save(webp_path, 'WEBP', quality=80, method=6)
    
    new_size = os.path.getsize(webp_path)
    savings = (1 - new_size / old_size) * 100
    
    print(f'{fname}: {old_size/1024:.0f}KB → {webp_name}: {new_size/1024:.0f}KB ({savings:.0f}% savings)')

print('\nDone! Now update the source references to use .webp extension.')
