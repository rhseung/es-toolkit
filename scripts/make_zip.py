import shutil
import os

# Define the source and destination paths
source_folder = 'dist'
destination_zip = 'es-toolkit.zip'

# Create a temporary directory to hold the contents of the zip file
temp_dir = 'es-toolkit'

# Copy the contents of the source folder to the temporary directory
if os.path.exists(temp_dir):
    shutil.rmtree(temp_dir)
shutil.copytree(source_folder, temp_dir)

# Create a zip file from the temporary directory
shutil.make_archive('es-toolkit', 'zip', temp_dir)

# Clean up the temporary directory
shutil.rmtree(temp_dir)