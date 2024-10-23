import json
import os
import requests # type: ignore
import time

# Configuration
SET_CODE = "dsc"  # Target set code
IMAGE_FOLDER = f"C:\\projects\\mtg-archenemy\\src\\assets\\{SET_CODE}"
os.makedirs(IMAGE_FOLDER, exist_ok=True)

# Load the JSON data (downloaded from the Bulk Data page)
with open(os.path.join(os.getcwd(), "default-cards-20241021091233.json"), "r", encoding="utf-8") as file:
    cards = json.load(file)

# Filter cards by the specified set code
filtered_cards = [card for card in cards if card["set"].lower() == SET_CODE.lower() and "scheme" in card["type_line"].lower()]

# Download images for the filtered cards
i = 0
for card in filtered_cards:
    try:
        image_url = card["image_uris"]["normal"]  # Adjust size if needed
        title = card["name"].replace("/", "-").replace(" ", "_").replace("?", "")
        card_name = f"{title}"
        file_path = f"{IMAGE_FOLDER}/{card_name}.jpg"

        if not os.path.exists(file_path):
            print(f"Downloading {card_name}...")
            response = requests.get(image_url)
            response.raise_for_status()  # Check for HTTP errors

            with open(file_path, "wb") as img_file:
                img_file.write(response.content)

            # Respect Scryfall's rate limits (100ms delay)
            time.sleep(0.1)
        i += 1
    except KeyError:
        print(f"Skipping {card['name']} (no image available).")

print("Download complete!")
