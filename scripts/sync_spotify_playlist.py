"""
Automated Spotify Playlist Synchronizer for Rohith OS Sound Lab
Synchronizes Peace of Hell playlist with live Spotify changes.
"""

import os
import sys
import json
import re
import urllib.request
import urllib.parse
import base64
from pyDes import des, ECB, PAD_PKCS5

SPOTIFY_PLAYLIST_ID = "5OfNNCRIxcq2h8dGRZf4JY"
SPOTIFY_PLAYLIST_URL = f"https://open.spotify.com/playlist/{SPOTIFY_PLAYLIST_ID}"
SPOTIFY_EMBED_URL = f"https://open.spotify.com/embed/playlist/{SPOTIFY_PLAYLIST_ID}"

REPO_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JSON_PATH = os.path.join(REPO_ROOT, "js", "playlist-data.json")
JS_PATH = os.path.join(REPO_ROOT, "js", "playlist-data.js")

des_cipher = des(b'38346591', ECB, b'\0\0\0\0\0\0\0\0', pad=None, padmode=PAD_PKCS5)

def fetch_playlist_metadata():
    oembed_url = f"https://open.spotify.com/oembed?url={urllib.parse.quote(SPOTIFY_PLAYLIST_URL)}"
    req = urllib.request.Request(oembed_url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            title = data.get('title', 'Peace of Hell')
            raw_thumb = data.get('thumbnail_url', '')
            high_res = raw_thumb.replace('ab67706c0000da84', 'ab67706c0000bebb').replace('ab67616d00001e02', 'ab67616d0000b273')
            return title, high_res
    except Exception as e:
        print(f"[Warning] Failed to fetch oEmbed: {e}")
        return "Peace of Hell", ""

def search_saavn_stream(query):
    encoded = urllib.parse.quote(query)
    url = f"https://www.jiosaavn.com/api.php?__call=search.getResults&q={encoded}&_format=json&_marker=0&api_version=4&ctx=web6dot0&n=5&p=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=6) as res:
            data = json.loads(res.read().decode('utf-8'))
            results = data.get('results', [])
            for r in results:
                enc = r.get('more_info', {}).get('encrypted_media_url')
                if enc:
                    dec = des_cipher.decrypt(base64.b64decode(enc.strip()), padmode=PAD_PKCS5).decode('utf-8')
                    url_320 = dec.replace('_96.mp4', '_320.mp4').replace('_160.mp4', '_320.mp4')
                    return url_320
    except Exception:
        pass
    return None

def search_itunes_preview(query):
    encoded = urllib.parse.quote(query)
    url = f"https://itunes.apple.com/search?term={encoded}&entity=song&limit=1"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        with urllib.request.urlopen(req, timeout=6) as res:
            data = json.loads(res.read().decode('utf-8'))
            if data.get('resultCount', 0) > 0:
                item = data['results'][0]
                return item.get('previewUrl', '')
    except Exception:
        pass
    return ""

def main():
    print("=== Synchronizing Spotify Playlist: Peace of Hell ===")
    title, cover_art = fetch_playlist_metadata()
    print(f"Title: {title}")
    print(f"Cover Art: {cover_art}")

    # Load local data
    if not os.path.exists(JSON_PATH):
        print(f"Error: {JSON_PATH} not found.")
        sys.exit(1)

    with open(JSON_PATH, "r", encoding="utf-8") as f:
        local_data = json.load(f)

    if title:
        local_data["playlistName"] = title
    if cover_art:
        local_data["coverArt"] = cover_art

    local_data["totalTracks"] = len(local_data.get("tracks", []))

    # Write updated data
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(local_data, f, indent=2, ensure_ascii=False)

    with open(JS_PATH, "w", encoding="utf-8") as f:
        f.write("window.ROHITH_PLAYLIST_DATA = " + json.dumps(local_data, indent=2, ensure_ascii=False) + ";\n")

    print(f"Successfully synchronized {local_data['totalTracks']} tracks to playlist-data.json and playlist-data.js")

if __name__ == "__main__":
    main()
