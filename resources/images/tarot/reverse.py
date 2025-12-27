import os
from PIL import Image

def flip_images_in_directory():
    # File extensions we consider as images
    image_extensions = {".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"}

    for filename in os.listdir("."):
        name, ext = os.path.splitext(filename)

        # Skip non-image files
        if ext.lower() not in image_extensions:
            continue

        # Build output filename
        new_filename = f"{name}_r{ext}"

        try:
            # Open, flip, save
            with Image.open(filename) as img:
                flipped = img.transpose(Image.FLIP_TOP_BOTTOM)
                flipped.save(new_filename)
                print(f"Created {new_filename}")
        except Exception as e:
            print(f"Skipping {filename}: {e}")

if __name__ == "__main__":
    flip_images_in_directory()
